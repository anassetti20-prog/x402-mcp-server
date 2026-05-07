<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/MCP%20Server-x402-00ff41?style=for-the-badge&logo=github&labelColor=000&color=00ff41">
  <img alt="x402 MCP Server" src="https://img.shields.io/badge/MCP%20Server-x402-00aa33?style=for-the-badge&logo=github&labelColor=fff&color=00aa33">
</picture>

# ⚡ x402 MCP Server

**47 pay-per-use AI services — micropayments on Base (USDC)**

[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-6366f1?style=flat-square&logo=modelcontextprotocol&logoColor=white)](https://modelcontextprotocol.io)
[![License](https://img.shields.io/badge/License-MIT-00aa33?style=flat-square)]()
[![Node](https://img.shields.io/badge/Node-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)]()
[![Base](https://img.shields.io/badge/Base-0052FF?style=flat-square&logo=base&logoColor=white)]()
[![USDC](https://img.shields.io/badge/USDC-2775CA?style=flat-square&logo=circle&logoColor=white)]()
[![Glama](https://img.shields.io/badge/Glama-EA-6366f1?style=flat-square)](https://glama.ai/mcp/servers/anassetti20-prog/x402-mcp-server)
[![Glama Score](https://glama.ai/mcp/servers/anassetti20-prog/x402-mcp-server/badges/score.svg)](https://glama.ai/mcp/servers/anassetti20-prog/x402-mcp-server)

---

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that wraps the **x402 Multi-Service API** — 47 AI tools accessible via **x402 micropayments** on Base (USDC). Pay per request, no subscriptions, no credit cards.

✅ **Halal-compliant** — no Riba, no interest, no gambling  
✅ **No API key required** — just a wallet with USDC on Base  
✅ **47 tools** — search, code, data, crypto, compliance, and more  

---

## 🚀 Quick Start

### 1. Prerequisites

- **Node.js 18+**
- A wallet with **USDC on Base** (e.g., MetaMask, Coinbase Wallet)
- The x402 Multi-Service API running locally on port 8080

### 2. Install

```bash
git clone https://github.com/anassetti20-prog/x402-mcp-server.git
cd x402-mcp-server
npm install
```

### 3. Configure

Create a `.env` file:

```env
API_BASE=http://localhost:8080
INTERNAL_KEY=your-internal-key-here
```

### 4. Add to your MCP client

**Claude Desktop:**

```json
{
  "mcpServers": {
    "x402": {
      "command": "node",
      "args": ["/path/to/x402-mcp-server/index.js"]
    }
  }
}
```

**VS Code / Cline / Continue:**

```json
{
  "command": "node",
  "args": ["/path/to/x402-mcp-server/index.js"]
}
```

### 5. Start

```bash
npm start
```

---

## 💰 How x402 Micropayments Work

Instead of API keys or subscriptions, you pay **per request** with USDC on Base:

1. Your MCP client sends a request to the server
2. The server generates an **x402 payment challenge**
3. Your wallet sends the exact micro-payment (e.g., $0.01) via USDC on Base
4. The server verifies the payment and executes the tool
5. The result is returned to your AI agent

**Pricing ranges from $0.001 to $0.10 per request** — no monthly fees, no lock-in.

---

## 🛠️ Available Tools

### 🔍 Search & Data (5 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `web_search` | $0.01 | Search the web and return results |
| `web-scrape` | $0.01 | Scrape content from any URL |
| `url_fetch` | $0.01 | Fetch and parse any URL |
| `rss_read` | $0.01 | Read RSS/Atom feeds |
| `url_ping` | $0.01 | Ping and check URL availability |

### 💻 Code & Development (3 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `analyze_code` | $0.01 | Analyze code for patterns, bugs, and quality |
| `code-security-scan` | $0.10 | Scan code for vulnerabilities (SAST) |
| `stock-prices` | $0.001 | Real-time stock market prices |

### 🔄 Data Processing (6 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `process_data` | $0.01 | Process and transform structured data |
| `json_process` | $0.01 | JSON query, validate, and transform |
| `csv_json_convert` | $0.01 | Convert between CSV and JSON |
| `markdown_convert` | $0.01 | Convert text to/from Markdown |
| `html_strip` | $0.01 | Strip HTML tags |
| `text_diff` | $0.01 | Compare two texts (diff) |

### 🌍 Translation & Text (4 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `translate_text` | $0.01 | Translate text to any language |
| `generate_text` | $0.02 | Generate text using AI |
| `sentiment_analyze` | $0.01 | Analyze text sentiment |
| `lorem_ipsum` | $0.01 | Generate placeholder text |

### 🔐 Security & Crypto (5 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `hash_generate` | $0.01 | Generate hashes (SHA256, MD5, etc.) |
| `password_generate` | $0.01 | Generate secure passwords |
| `base64_process` | $0.01 | Encode/decode Base64 |
| `file_hash` | $0.01 | Hash content with various algorithms |
| `email_validate` | $0.01 | Validate email addresses |

### 🖼️ Media & OCR (3 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `image-to-text-ocr` | $0.01 | Extract text from images via OCR |
| `voice-to-text` | $0.01 | Transcribe audio to text |
| `pdf_extract_text` | $0.01 | Extract text from PDF documents |

### 🧰 Utility Tools (11 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `uuid_generate` | $0.01 | Generate UUIDs |
| `qrcode_generate` | $0.01 | Generate QR codes |
| `barcode_generate` | $0.01 | Generate barcodes |
| `ip_lookup` | $0.01 | Look up IP geolocation |
| `weather_get` | $0.01 | Get weather for any city |
| `currency_convert` | $0.01 | Convert between currencies |
| `color_convert` | $0.01 | Convert color formats |
| `time_tools` | $0.01 | Timezone and timestamp tools |
| `country_info` | $0.01 | Get country information |
| `number_tools` | $0.01 | Number operations and conversion |
| `string_tools` | $0.01 | String manipulation utilities |
| `random_data` | $0.01 | Generate random data |
| `ua_parse` | $0.01 | Parse User-Agent strings |
| `text_stats` | $0.01 | Get text statistics |

### 📊 Business & Compliance (5 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `contract-summary` | $0.05 | Summarize legal contracts |
| `legal-doc-analysis` | $0.05 | Analyze legal documents |
| `finance-compliance-eu` | $0.10 | EU finance compliance checks |
| `supply-chain-risk` | $0.05 | Supply chain risk assessment |
| `sustainability-report` | $0.10 | Generate sustainability reports |

### 💎 Commodities (2 tools)

| Tool | Price | Description |
|------|-------|-------------|
| `commodity-prices` | $0.001 | Real-time commodity prices |
| `property-prices` | $0.005 | Property price estimates |

---

## 🕌 Halal Compliance

This server and its underlying x402 API are designed for **Islamic finance compliance**:

- ✅ **No Riba (interest)** — all payments are fixed per-use fees, not loans or interest
- ✅ **No Gharar (excessive uncertainty)** — prices are fixed and transparent
- ✅ **No Haram assets** — no alcohol, gambling, tobacco, weapons, or conventional finance
- ✅ **No margin trading** — pay-as-you-go only
- ✅ **100% halal** — information services that benefit users

All transactions are settled in **USDC** (a fully-backed stablecoin) on **Base** (Ethereum L2), a permissionless, decentralized network.

---

## 🏗️ Architecture

```
┌──────────────┐     stdio/MCP      ┌──────────────────────┐
│  MCP Client  │◄──────────────────►│  x402 MCP Server     │
│  (Claude,    │                     │  (index.js)          │
│   Cline,     │                     │                      │
│   VS Code)   │                     │  47 MCP Tools        │
└──────────────┘                     └──────┬───────────────┘
                                            │ HTTP (internal)
                                            ▼
                                   ┌──────────────────────┐
                                   │  x402 Multi-Service  │
                                   │  API (port 8080)     │
                                   │                      │
                                   │  Web / Code / Data   │
                                   │  Media / Compliance  │
                                   └──────────────────────┘
```

---

## 📦 Deploy on Smithery.ai

This server includes a [`smithery.yaml`](smithery.yaml) for one-click deployment on Smithery.ai.

After Smithery processes the GitHub topics, it will be available at:
```
https://smithery.ai/server/anassetti20-prog/x402-mcp-server
```

MCP client config for Smithery:

```json
{
  "mcpServers": {
    "x402": {
      "command": "npx",
      "args": [
        "-y", "@smithery/cli",
        "run", "anassetti20-prog/x402-mcp-server",
        "--config", "{\"apiBase\":\"http://localhost:8080\",\"internalKey\":\"your-key\"}"
      ]
    }
  }
}
```

---

## 📄 License

MIT — see [LICENSE](LICENSE)

---

## 🤝 Contributing

PRs welcome! For major changes, please open an issue first to discuss.

**Halal compliance reviews** are especially welcome — help us maintain the highest ethical standards.

---

<p align="center">
  <sub>Built with ❤️ for the AI agent economy • Halal • Open • Transparent</sub>
</p>
