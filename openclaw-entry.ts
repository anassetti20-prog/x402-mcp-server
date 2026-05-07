// x402 MCP Server — OpenClaw Integration
// This plugin exposes the x402 MCP Server tools to OpenClaw agents
// via OpenClaw's native MCP support.
//
// After installing, configure in config.yaml:
//   mcpServers:
//     x402:
//       command: node
//       args: ["<path>/index.js"]

export default {
  id: "x402-mcp-server",
  name: "x402 MCP Server",
  description: "47 pay-per-use AI services via x402 micropayments on Base (USDC)",
  async register(api) {
    // Tools are exposed via native MCP integration
    // This plugin registers the configuration and documentation
  },
};
