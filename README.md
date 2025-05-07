# Mistec - Modern Marketplace Platform

A full-stack marketplace platform built with Next.js, NestJS, and React Native.

## Tech Stack

### Frontend Web
- Next.js 14 (React)
- Tailwind CSS
- Apollo Client (GraphQL)

### Frontend Mobile
- React Native
- Apollo Client (GraphQL)

### Backend
- NestJS (Node.js)
- PostgreSQL
- Redis
- Elasticsearch
- GraphQL (Apollo Server)

### Infrastructure
- Docker
- Kubernetes
- AWS/GCP/Azure
- Terraform

## Project Structure

```
mistec/
├── apps/
│   ├── web/                 # Next.js web application
│   ├── mobile/             # React Native mobile app
│   └── api/                # NestJS backend
├── packages/
│   ├── shared/             # Shared types and utilities
│   └── ui/                 # Shared UI components
├── infrastructure/         # Terraform configurations
└── docs/                   # Project documentation
```

## Prerequisites

- Node.js 18+
- Docker and Docker Compose
- PostgreSQL
- Redis
- Elasticsearch

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-org/mistec.git
cd mistec
```

2. Start the development environment:
```bash
docker-compose up -d
```

3. Install dependencies:
```bash
# Install root dependencies
npm install

# Install workspace dependencies
npm run install:all
```

4. Set up environment variables:
```bash
# Copy environment files
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
cp apps/mobile/.env.example apps/mobile/.env

# Edit the environment files with your configuration
```

5. Start development servers:
```bash
# Start all services
npm run dev

# Or start individual services
npm run dev:web
npm run dev:api
npm run dev:mobile
```

## Development

### Web Application
- Next.js application with Tailwind CSS
- GraphQL integration with Apollo Client
- Modern UI components with Headless UI
- Responsive design

### API
- NestJS backend with GraphQL
- PostgreSQL database with TypeORM
- JWT authentication
- Redis for caching
- Elasticsearch for search

### Mobile App
- React Native application
- GraphQL integration
- Native UI components
- Push notifications

## Testing

```bash
# Run all tests
npm run test

# Run specific tests
npm run test:web
npm run test:api
npm run test:mobile
```

## Deployment

1. Build the applications:
```bash
npm run build
```

2. Deploy using your preferred cloud provider:
- AWS
- Google Cloud
- Azure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
