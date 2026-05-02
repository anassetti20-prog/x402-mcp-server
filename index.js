#!/usr/bin/env node
/**
 * x402 MCP Server — wraps the x402 Multi-Service API as MCP tools.
 * Exposes all 47 services as stdio-based MCP tools.
 * Internal bypass via X-Internal-Key header (no payment required for local calls).
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_BASE = "http://localhost:8080";
const INTERNAL_KEY = "hermes-mcp-internal-v1";

// ── Service Definitions (matching actual x402 API service IDs) ───────────────
const SERVICES = {
  "web_search":         { name: "Web Search",                 price: 0.01, args: ["query"] },
  "analyze_code":       { name: "Analyze Code",              price: 0.01, args: ["code","language"] },
  "process_data":       { name: "Process Data",              price: 0.01, args: ["data"] },
  "translate_text":     { name: "Translate Text",            price: 0.01, args: ["text","target_lang"] },
  "generate_text":      { name: "Generate Text",             price: 0.02, args: ["prompt"] },
  "uuid_generate":      { name: "UUID Generator",            price: 0.01, args: ["count"] },
  "hash_generate":      { name: "Hash Generator",            price: 0.01, args: ["text","algorithm"] },
  "base64_process":     { name: "Base64 Process",            price: 0.01, args: ["text","mode"] },
  "password_generate":  { name: "Password Generator",        price: 0.01, args: ["length"] },
  "text_stats":         { name: "Text Statistics",           price: 0.01, args: ["text"] },
  "json_process":       { name: "JSON Processor",            price: 0.01, args: ["json","operation"] },
  "markdown_convert":   { name: "Markdown Convert",          price: 0.01, args: ["text"] },
  "qrcode_generate":    { name: "QR Code Generator",         price: 0.01, args: ["text"] },
  "barcode_generate":   { name: "Barcode Generator",         price: 0.01, args: ["text","format"] },
  "url_fetch":          { name: "URL Fetch",                 price: 0.01, args: ["url"] },
  "rss_read":           { name: "RSS Feed Reader",           price: 0.01, args: ["feed_url"] },
  "pdf_extract_text":   { name: "PDF Extract Text",          price: 0.01, args: ["pdf_url"] },
  "ip_lookup":          { name: "IP Lookup",                 price: 0.01, args: ["ip"] },
  "weather_get":        { name: "Weather",                   price: 0.01, args: ["city"] },
  "currency_convert":   { name: "Currency Converter",        price: 0.01, args: ["amount","from","to"] },
  "color_convert":      { name: "Color Convert",             price: 0.01, args: ["color","to"] },
  "email_validate":     { name: "Email Validate",            price: 0.01, args: ["email"] },
  "ua_parse":           { name: "User-Agent Parse",          price: 0.01, args: ["ua"] },
  "random_data":        { name: "Random Data",               price: 0.01, args: ["type","count"] },
  "time_tools":         { name: "Time Tools",                price: 0.01, args: ["timestamp","timezone"] },
  "file_hash":          { name: "File Hash",                 price: 0.01, args: ["content","algorithm"] },
  "sentiment_analyze":  { name: "Sentiment Analysis",        price: 0.01, args: ["text"] },
  "html_strip":         { name: "HTML Strip",                price: 0.01, args: ["html"] },
  "text_diff":          { name: "Text Diff",                 price: 0.01, args: ["text1","text2"] },
  "csv_json_convert":   { name: "CSV to JSON",               price: 0.01, args: ["csv"] },
  "url_ping":           { name: "URL Ping",                  price: 0.01, args: ["url"] },
  "country_info":       { name: "Country Info",              price: 0.01, args: ["country"] },
  "number_tools":       { name: "Number Tools",              price: 0.01, args: ["number","operation"] },
  "lorem_ipsum":        { name: "Lorem Ipsum",               price: 0.01, args: ["paragraphs"] },
  "string_tools":       { name: "String Tools",              price: 0.01, args: ["text","operation"] },

  // Group 1 - High Demand
  "stock-prices":        { name: "Real-Time Stock Prices",    price: 0.001, args: ["symbol"] },
  "web-scrape":          { name: "Web Scraping",             price: 0.01, args: ["url"] },
  "property-prices":     { name: "Property Prices",          price: 0.005, args: ["loc"] },
  "commodity-prices":    { name: "Commodity Prices",         price: 0.001, args: ["commodity"] },

  // Group 2 - Exploding Demand
  "voice-to-text":       { name: "Voice to Text",            price: 0.01, args: ["audio_base64"] },
  "contract-summary":    { name: "Contract Summary",         price: 0.05, args: ["text"] },
  "code-security-scan":  { name: "Code Security Scan",       price: 0.10, args: ["code","language"] },
  "image-to-text-ocr":   { name: "Image to Text OCR",        price: 0.01, args: ["image_base64"] },

  // Group 3 - Specialized High Growth
  "finance-compliance-eu": { name: "EU Finance Compliance",  price: 0.10, args: ["biz_type"] },
  "legal-doc-analysis":    { name: "Legal Document Analysis", price: 0.05, args: ["text"] },
  "supply-chain-risk":     { name: "Supply Chain Risk",      price: 0.05, args: ["industry"] },
  "sustainability-report": { name: "Sustainability Report",  price: 0.10, args: ["company"] },
};

// JSON Schema helper
function toolSchema(name, desc, args) {
  const props = {};
  const required = [];
  for (const arg of args) {
    props[arg] = { type: "string", description: `${arg} parameter` };
    required.push(arg);
  }
  return {
    name,
    description: desc,
    inputSchema: { type: "object", properties: props, required },
  };
}

const server = new Server(
  { name: "x402-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// ── List Tools ────────────────────────────────────────────────────────────────
server.setRequestHandler(ListToolsRequestSchema, async () => {
  const tools = Object.entries(SERVICES).map(([id, svc]) =>
    toolSchema(id, `[$${svc.price}] ${svc.name}`, svc.args)
  );
  return { tools };
});

// ── Call Tool ─────────────────────────────────────────────────────────────────
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const svc = SERVICES[name];
  if (!svc) {
    return {
      content: [{ type: "text", text: `Unknown service: ${name}` }],
      isError: true,
    };
  }

  try {
    const response = await fetch(`${API_BASE}/v1/${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Internal-Key": INTERNAL_KEY,
      },
      body: JSON.stringify(args || {}),
    });

    const result = await response.json();
    if (!response.ok) {
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        isError: true,
      };
    }

    const text = typeof result.data === "string"
      ? result.data
      : JSON.stringify(result.data, null, 2);

    return { content: [{ type: "text", text }] };
  } catch (err) {
    return {
      content: [{ type: "text", text: `Error: ${err.message}` }],
      isError: true,
    };
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("x402 MCP Server ready — 47 tools available");
}

main().catch((err) => {
  console.error("Fatal MCP error:", err);
  process.exit(1);
});
