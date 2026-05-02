---
name: x402-multiservice-api
description: 47 AI services with pay-per-use USDC on Base chain via x402 protocol
tags: [x402, usdc, stocks, finance, halal, security, ai, api, web-scraping, translation, compliance]
---

# x402 Multi-Service API

47 AI services available as pay-per-use on Base chain (USDC) via the x402 protocol.

## Service Categories

### 🌐 Web & Data
- `web_search` — Search the web ($0.01)
- `web-scrape` — Scrape any URL ($0.01)
- `url_fetch` — Fetch URL contents ($0.01)
- `rss_read` — Parse RSS feeds ($0.01)
- `url_ping` — Check if URL is reachable ($0.01)

### 💰 Finance & Markets
- `stock-prices` — Real-time stock prices ($0.001)
- `commodity-prices` — Gold & silver prices ($0.001)
- `property-prices` — Real estate estimates ($0.005)
- `currency_convert` — Currency conversion ($0.01)

### 🔐 Security & Compliance
- `code-security-scan` — Deep security scan ($0.10)
- `finance-compliance-eu` — EU finance compliance check ($0.10)
- `legal-doc-analysis` — Legal document analysis ($0.05)
- `supply-chain-risk` — Supply chain risk check ($0.05)

### 📄 Document Processing
- `contract-summary` — Extract key contract terms ($0.05)
- `sustainability-report` — ESG report generator ($0.10)
- `pdf_extract_text` — Extract text from PDFs ($0.01)
- `image-to-text-ocr` — OCR from images ($0.01)

### 🎤 Voice & Text
- `voice-to-text` — Transcribe audio ($0.01/min)
- `translate_text` — Translate text ($0.01)
- `generate_text` — AI text generation ($0.02)
- `sentiment_analyze` — Sentiment analysis ($0.01)

### ⚙️ Developer Tools
- `analyze_code` — Analyze source code ($0.01)
- `process_data` — Process structured data ($0.01)
- `json_process` — JSON processing ($0.01)
- `uuid_generate` — UUID generation ($0.01)
- `hash_generate` — Hash generation ($0.01)
- `base64_process` — Base64 encode/decode ($0.01)
- `password_generate` — Password generator ($0.01)
- `text_stats` — Text statistics ($0.01)
- `qrcode_generate` — QR code generator ($0.01)
- `barcode_generate` — Barcode generator ($0.01)
- `csv_json_convert` — CSV/JSON conversion ($0.01)

## Usage

### Direct HTTP
```bash
curl -X POST http://178.105.35.170:8080/v1/stock-prices \
  -H "Content-Type: application/json" \
  -d '{"symbol":"AAPL"}'
```

### MCP (Model Context Protocol)
Add to your claude_desktop_config.json:
```json
{
  "mcpServers": {
    "x402": {
      "command": "/root/.local/bin/node",
      "args": ["/root/x402-mcp-server/index.js"]
    }
  }
}
```

### A2A (Agent-to-Agent Protocol)
Connect Gemini agents via A2A at http://178.105.35.170:8083/.well-known/agent-card

## Pricing
- All prices in USDC on Base chain (Chain ID: 8453)
- USDC Contract: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
- Wallet: `0xeB262928D55A92f2EAac946807CeC4d80E9EdD6B`
- Range: $0.001 — $0.10 per request
