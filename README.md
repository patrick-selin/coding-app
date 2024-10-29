# Project Title

Hello World full-stack web application with infra

## Project Description

This is a full-stack single-page-application built using Typescript/React, Node.js/Express, Nginx, and AWS infrastructure managed with Terraform.

## Features

- None yet
- Setting up the project & infra

## Technologies Used

- **Frontend**: React/TypeScript, CSS
- **Backend**: Node.js/Express Typescript
- **Reverse Proxy**: Nginx
- **Database**: PostgreSQL & Drizzle ORM
- **Infrastructure**: AWS, Terraform
- **CI/CD**: GitHub Actions, Docker, Git

## Setup and Installation - Development

Follow these steps to set up the project locally:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

1. Clone the Repository

```bash
git clone https://github.com/patrick-selin/coding-app.git
cd coding-app
```

2. Environment Configuration
   Ensure you configure the environment variables before running the application.

- Rename the files:
  "./client.env.dev.EXAMPLE" -> .env.dev
  "./server.env.dev.EXAMPLE" -> .env.dev

- Database Configuration:

3. Database Configuration
   Database Configuration

```bash
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database_name>
```

### Running the Application (Development Environment)

1. Build and start the Docker containers using the development configuration:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

2. The app will be available at:

   http://localhost:80 (proxied through Nginx)

3. To stop the application:

```bash
docker-compose -f docker-compose.dev.yml down
```

### Services

The development environment consists of the following Docker services:

- Client: React frontend, accessible via Nginx on port 80.
- Server: Node.js/Express backend running on port 3333.
- PostgreSQL Database: Runs as a service, accessible to the backend.
- Nginx: Acts as a reverse proxy for the client and server.

##

## CI/CD Pipeline

// in the making

## Usage

// in the making

## Roadmap

## Contributing

## License

## Contact

## test