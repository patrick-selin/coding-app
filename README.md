# Project Title

Hello World full-stack web application with infra

## Project Description

This is a full-stack single-page-application built using Typescript/React, Node.js/Express, Nginx, and AWS infrastructure managed with Terraform.

## Features

- Full-stack architecture
- React frontend built with Vite
- Node.js/Express backend
- Nginx reverse proxy
- Deployed on AWS (EC2)
- Infrastructure as code using Terraform
- CI/CD pipeline with GitHub Actions and Docker

## Technologies Used

- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express
- **Reverse Proxy**: Nginx
- **Database**: PostgreSQL & Drizzle ORM
- **Infrastructure**: AWS, Terraform
- **CI/CD**: GitHub Actions, Docker

## Setup and Installation - Developent

Follow these steps to set up the project locally:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

### Clone the Repository

```bash
git clone https://github.com/patrick-selin/coding-app.git
cd coding-app
```

### Running the Application (Development Environment)

1. Build and start the Docker containers using the development configuration:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

2. The app will be available at:

- Frontend: http://localhost:80 (proxied through Nginx)
- Backend API: http://localhost:3333

## CI/CD Pipeline

// in the making

## Usage

// in the making
