# Blaxel LlamaIndex Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Build Status](https://github.com/blaxel-templates/template-llama-index-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/blaxel-templates/template-llama-index-ts/actions) [![Coverage Status](https://codecov.io/gh/blaxel-templates/template-llama-index-ts/branch/main/graph/badge.svg)](https://codecov.io/gh/blaxel-templates/template-llama-index-ts) [![npm version](https://img.shields.io/npm/v/@blaxel/llama-index-agent)](https://www.npmjs.com/package/@blaxel/llama-index-agent)

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="150"/>
</p>

A conversational AI agent built with LlamaIndex and GPT-4, showcasing tool integrations and flexible deployments.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Usage](#api-usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

- Interactive conversational interface
- Tool integrations (weather, search, etc.)
- Streaming responses for real-time interaction
- Configurable via `blaxel.toml`
- Easy deployment on Blaxel platform

## Prerequisites

- Node.js >= 16
- Yarn v1.22 or npm
- OpenAI API key

## Installation

```bash
# Clone the repository
git clone https://github.com/blaxel-templates/template-llama-index-ts.git
cd template-llama-index-ts
# Install dependencies
yarn install # or npm install
```

## Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Set variables in `.env`:
   ```ini
   OPENAI_API_KEY=your_key_here
   INDEX_PATH=./data/index.json
   ```
3. (Optional) Customize `blaxel.toml` for deployment settings.

## Usage

### Run Locally

```bash
yarn dev # or npm run dev
```
Server runs at `http://localhost:3000` by default.

### Example Request

```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"query":"What is the weather in Paris?"}'
```

## API Usage

### Health Check

```
GET /health
```

_Response:_
```json
{ "status": "ok" }
```

### Chat Endpoint

```
POST /chat
```

_Request Body:_
```json
{ "query": "Tell me a joke." }
```

_Response:_
```json
{ "response": "Why did the chicken cross the road?" }
```

## Project Structure

```
├── src
│   ├── agent.ts    # Agent logic and tool integrations
│   ├── index.ts    # Server and routing
│   └── utils.ts    # Helper functions
├── blaxel.toml     # Deployment config
├── .env.example    # Example env variables
└── README.md       # Project documentation
```

## Testing

```bash
yarn test # or npm test
```

## Deployment

Build and start:

```bash
yarn build
yarn start
```

Deploy via Blaxel CLI:

```bash
bl deploy
```

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a branch (`git checkout -b feature/xyz`)
3. Commit your changes (`git commit -m "feat: add xyz"`)
4. Push to your branch (`git push origin feature/xyz`)
5. Open a pull request

Please follow existing code style and include tests for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For questions or issues, please open an issue on GitHub or email `support@blaxel.ai`.
