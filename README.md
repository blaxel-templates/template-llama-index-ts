# Blaxel LlamaIndex Agent

div align="center"

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![Node.js v18+](https://img.shields.io/badge/node-18%2B-brightgreen)](https://nodejs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-blue)](https://www.typescriptlang.org/)  
[![LlamaIndex](https://img.shields.io/badge/LlamaIndex-powered-lightgrey)](https://github.com/jerryjliu/llama_index)  
[![GPT-4](https://img.shields.io/badge/GPT--4-enhanced-brightgreen)](https://openai.com/product/gpt-4)

/div

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</p>

A template implementation of a conversational agent using **LlamaIndex** and **GPT-4**. This agent demonstrates the power of LlamaIndex for building interactive AI agents with tool integration capabilities, streamlining real-time responses and deployment on the Blaxel platform.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Testing Your Agent](#testing-your-agent)
- [Run Directly](#run-directly)
- [Deploying to Blaxel](#deploying-to-blaxel)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Common Issues](#common-issues)
- [Contribution](#contribution)
- [Support](#support)
- [License](#license)

## Features

- Interactive conversational interface
- Efficient tool integration (weather, search)
- Streaming responses for real-time interaction
- Built on LlamaIndex for agent orchestration
- Easy Blaxel platform deployment

## Prerequisites

- Node.js v18 or later
- Blaxel CLI ([Get started](https://docs.blaxel.ai/Get-started))
- Blaxel account

## Installation

```bash
git clone https://github.com/blaxel-ai/template-llama-index-ts.git
cd template-llama-index-ts
npm install
```

## Running Locally

```bash
bl serve --hotreload
```

**Note:** This command starts the server and enables hot reload so source code changes are automatically reflected.

## Testing Your Agent

```bash
bl chat --local llama-agent
```

## Run Directly

```bash
bl run agent template-llama-index-ts --local --data '{"input": "What is the weather in Paris?"}'
```

## Deploying to Blaxel

```bash
bl deploy
```

This command uses your code and configuration files under the `.blaxel` directory to deploy your application.

## API Reference

### POST /agents/{agent_id}/run

Run the agent with provided input

```json
{
  "input": "What is the weather in Paris?",
  "stream": true
}
```

### GET /agents/{agent_id}/info

Get agent metadata and capabilities

### GET /health

Health check endpoint

For detailed API docs, run the server and visit `/docs`.

## Project Structure

```
.
├── .blaxel/
├── src/
│   ├── index.ts         # Agent entry point
│   ├── agent.ts         # Core agent implementation using LlamaIndex
│   └── weather.ts       # Weather tool integration
├── blaxel.toml          # Blaxel deployment config
├── package.json
└── README.md
```

## Examples

### Basic Conversation

```bash
bl chat --local llama-agent
```

### Weather Query

```bash
bl chat --local llama-agent --data '{"input": "What is the weather in San Francisco?"}'
```

## Troubleshooting

- Ensure Node.js v18+ is installed
- Verify Blaxel CLI is up to date: `curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=$HOME/.local/bin sh`
- Check your network connection for API calls

## Common Issues

1. **Dependency Issues:**
   - Make sure you have TypeScript 4+ installed
   - Run `npm install` to update dependencies
2. **Connection Problems:**
   - Check your Blaxel login status: `bl login YOUR-WORKSPACE`
   - Check API key validity
3. **Build Errors:**
   - Verify TS config in `tsconfig.json`

For more help, [open an issue](https://github.com/blaxel-ai/template-llama-index-ts/issues/new).

## Contribution

Contributions are welcome! Here’s how you can help:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

## Support

For support, reach out in our [Discord Community](https://discord.gg/G3MzUPcHP) or email support@blaxel.ai.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
