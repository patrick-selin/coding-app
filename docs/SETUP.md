# Development Setup

This document provides instructions for setting up the project locally, including Docker setup, environment variables, and how to run tests.

## Prerequisites

Before getting started, ensure you have the following installed:

- **Docker**: To run services in containers.
- **Node.js**: Version 20 or higher.

## Cloning the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/patrick-selin/coding-app.git
cd coding-app
```

## Setting Up Environment Variables

### /server Environment Setup

1. Rename the `.env.development.EXAMPLE` file to `.env.development` in the **/server** directory and fill in the necessary environment variables:

   Example environment variables for the server:

   ```bash
   NODE_ENV=development
   SERVER_PORT=3333
   SERVER_HOST=0.0.0.0

   # Database Connection
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=yourpassword
   POSTGRES_DB=postgres
   DATABASE_URL=postgres://postgres:yourpassword@postgres:5432/postgres
   ```

### /client Environment Setup

2. Rename the `.env.development.EXAMPLE` file to `.env.development` in the **/client** directory and add the following environment variable:
   ```bash
   VITE_BASE_URL=/api1
   ```

## Docker Setup

### Running the Application
To run the application locally using Docker, ensure you have Docker installed and running. Then, use the following command to build and start all services (frontend, backend, database, and reverse proxy):

```bash
npm run dev
```

or 

```bash
docker-compose -f docker-compose.dev.yml up --build
```

This will start the app using Docker Compose and set up the necessary services for local development. The following services will be started:

- **client**: Frontend React app running in the `/client` directory.
- **server**: Backend Node.js/Express app running in the `/server` directory.
- **database-sql**: PostgreSQL *development* database service running in a Docker container.
- **migrate**: A service that runs database migrations (using Drizzle ORM) whenever necessary.
- **nginx**: Nginx acts as the reverse proxy to handle incoming requests and route them to the appropriate service (frontend or backend).
- **volumes**: Data volumes to persist PostgreSQL data (`postgres_data`), ensuring data is not lost when containers are restarted.

### Accessing the Application
After the services start, access the app in your browser at [http://localhost:80](http://localhost:80). Nginx will serve the frontend for requests to `/` and route API requests to the backend at `/api1/`.

## Running Tests

The project uses **Vitest** for unit and integration testing, and **Playwright** for end-to-end (E2E) testing. The **unit tests** use the development database, while the **integration** and **E2E tests** use the test database.

### Unit Tests
1. To run unit tests for the server, use the following command:

   ```bash
   npm run test:unit:server
   ```

2. To run unit tests for the client, use:

   ```bash
   npm run test:unit:client
   ```

###  Integration Tests
**Integration tests** use the test database. The **test database** is configured in the `docker-compose.test-local.yml` file, which starts a separate PostgreSQL container for testing.

1. To run the **integration tests** using the test database, use the following command:

   ```bash
   npm run test:integration:server
   ```
	This script runs the integration tests while using the test database configured in `docker-compose.test-local.yml`.

### End-to-End Tests
1. The **E2E tests** also use the test database, running separately from the development environment. To run the end-to-end tests using Playwright, follow these steps:

   1. Run the end-to-end tests:
      ```bash
      npm run test:e2e

