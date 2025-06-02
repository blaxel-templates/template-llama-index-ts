# Blaxel LlamaIndex Agent

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 18+](https://img.shields.io/badge/node-18+-blue.svg)](https://nodejs.org/downloads/)
[![LlamaIndex](https://img.shields.io/badge/LlamaIndex-powered-brightgreen.svg)](https://www.llamaindex.ai/)
[![TypeScript](https://img.shields.io/badge/TypeScript-enabled-blue.svg)](https://www.typescriptlang.org/)

</div>

A template implementation of a conversational agent using LlamaIndex TypeScript and GPT-4. This agent demonstrates the power of LlamaIndex for building interactive AI agents with advanced document processing, retrieval-augmented generation (RAG), and tool integration capabilities with full TypeScript type safety.

## 📑 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Running Locally](#running-the-server-locally)
  - [Testing](#testing-your-agent)
  - [Deployment](#deploying-to-blaxel)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## ✨ Features

- Interactive conversational interface with document understanding
- Advanced retrieval-augmented generation (RAG) capabilities
- Tool integration support (including weather and search capabilities)
- Streaming responses for real-time interaction
- Built on LlamaIndex TypeScript for sophisticated document processing
- Full TypeScript support with type safety
- Easy deployment and integration with Blaxel platform

## 🚀 Quick Start

For those who want to get up and running quickly:

```bash
# Clone the repository
git clone https://github.com/blaxel-ai/template-llama-index-ts.git

# Navigate to the project directory
cd template-llama-index-ts

# Install dependencies
npm install

# Start the server
bl serve --hotreload

# In another terminal, test the agent
bl chat --local blaxel-agent
```

## 📋 Prerequisites

- **Node.js:** v18 or later
- **npm or yarn:** For package management
- **Blaxel Platform Setup:** Complete Blaxel setup by following the [quickstart guide](https://docs.blaxel.ai/Get-started#quickstart)
  - **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have the Blaxel CLI installed. If not, install it globally:
    ```bash
    curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=/usr/local/bin sudo -E sh
    ```
  - **Blaxel login:** Login to Blaxel platform
    ```bash
    bl login YOUR-WORKSPACE
    ```

## 💻 Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/blaxel-ai/template-llama-index-ts.git
cd template-llama-index-ts
npm install
```

## 🔧 Usage

### Running the Server Locally

Start the development server with hot reloading:

```bash
bl serve --hotreload
```

_Note:_ This command starts the server and enables hot reload so that changes to the source code are automatically reflected.

### Testing your agent

You can test your agent using the chat interface:

```bash
bl chat --local blaxel-agent
```

Or run it directly with specific input:

```bash
bl run agent blaxel-agent --local --data '{"input": "Analyze the documents and tell me about the key insights"}'
```

### Deploying to Blaxel

When you are ready to deploy your application:

```bash
bl deploy
```

This command uses your code and the configuration files under the `.blaxel` directory to deploy your application.

## 📁 Project Structure

- **src/index.ts** - Application entry point
- **src/agent.ts** - Core agent implementation with LlamaIndex integration
- **src/types/** - TypeScript type definitions
- **src/utils/** - Utility functions and helpers
- **src/data/** - Document storage and processing
- **package.json** - Node.js package configuration
- **tsconfig.json** - TypeScript configuration
- **blaxel.toml** - Blaxel deployment configuration

## ❓ Troubleshooting

### Common Issues

1. **Blaxel Platform Issues**:
   - Ensure you're logged in to your workspace: `bl login MY-WORKSPACE`
   - Verify models are available: `bl get models`
   - Check that functions exist: `bl get functions`

2. **Node.js Version Issues**:
   - Make sure you have Node.js 18+
   - Try `node --version` to check your version
   - Update Node.js if needed

3. **TypeScript Compilation Errors**:
   - Run `npx tsc --noEmit` to check for type errors
   - Ensure all dependencies have proper type definitions
   - Check tsconfig.json configuration

For more help, please [submit an issue](https://github.com/blaxel-templates/template-llama-index-ts/issues) on GitHub.

## 👥 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Submit** a Pull Request

Please make sure to update tests as appropriate and follow the TypeScript code style of the project.

## 🆘 Support

If you need help with this template:

- [Submit an issue](https://github.com/blaxel-templates/template-llama-index-ts/issues) for bug reports or feature requests
- Visit the [Blaxel Documentation](https://docs.blaxel.ai) for platform guidance
- Check the [LlamaIndex TypeScript Documentation](https://ts.llamaindex.ai/) for framework-specific help
- Join our [Discord Community](https://discord.gg/G3NqzUPcHP) for real-time assistance

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
