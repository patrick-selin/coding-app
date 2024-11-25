# Testing Strategy

This document provides an overview of the testing strategy used in this project. It outlines the testing tools, the types of tests performed, and best practices for writing and maintaining tests.

## 1. Overview of Testing Strategy
### Testing Philosophy

In this project, I *try to* follow **Test-Driven Development (TDD)**, where tests are written before the code they validate. The primary goal is to write clear, concise tests that validate the expected behavior of the system and let's the tests guide as a "documentation".

### Types of Tests

There are three main types of tests in this project:
-  **Unit Tests**: Verify that individual functions or components work in isolation.

-  **Integration Tests**: Validate that multiple components work together as expected. 

-  **End-to-End (E2E) Tests**: Simulate real user interactions with the application, testing the entire flow from the frontend to the backend.
  

## 2. Test-Driven Development (TDD) Approach

### How TDD Works

I follow the **Red-Green-Refactor** cycle for TDD:

1.  **Red**: Write a test that fails. This test should describe the desired behavior or output of the code.

2.  **Green**: Write just enough code to pass the test, without worrying about optimization or structure.

3.  **Refactor**: Once the test passes, refactor the code to improve its quality while keeping the test green.


## 3. Unit Tests

### Tools Used

-  **Vitest**


### Best Practices for Unit Tests

-  **Isolation**: Ensure each unit test runs independently of others, testing only a single function or method at a time.

-  **Clear Naming**: Test names should describe what the unit of work is doing, making it obvious what is being tested and the test could work as a part of documentation.

-  **Mocking and Stubs**: *mieti viela tata, ehka MSWJ Mock Service Worker API:lle ja db:lle mika??*  
  

## 4. Integration Tests

### Tools Used

-  **Vitest**.


### Best Practices for Integration Tests

-  **Test Realistic Scenarios**: Integration tests should cover real-world interactions, such as database queries, API calls, and responses.

-  **Use Separate Environments**: Run integration tests with a separate test database to ensure isolation from the dev/production environment.  
  
## 5. End-to-End (E2E) Tests

### Purpose

E2E tests simulate real user behavior and validate the entire system, including both frontend and backend. These tests ensure that the user can interact with the application in the way it’s intended to work.


### Tools Used

-  **Playwright**.

  
### Best Practices for E2E Tests

-  **Real User Flows**: E2E tests should simulate real user journeys through the application.

-  **Test Critical Paths**: Focus on testing the most critical parts of the application (e.g., user authentication, form submission, data retrieval).

-  **Error Scenarios**: Also test failure scenarios (e.g., network failures, invalid inputs) to ensure the app handles errors gracefully.

  
## 6. Test File Locations

### Unit Tests
Unit tests are located next to the source files they are testing:
- **Frontend**: are in the `/client/src/*` directory.
- **Backend**: are in the `/server/src/*` directory.

### Integration Tests
Integration tests are currently located in the `/server/src/tests` directory.

### End-to-End (E2E) Tests
E2E tests are located in the `/playwright-e2e/tests` directory.

*!!! mieti viela pitaisiko integraatiotestit ja e2e refactor: ./tests/integration ja ./tests/e2e*

## 7. Test Coverage

### Coverage Goals

The goal is to ensure that the critical paths of the application are thoroughly tested.

-  **Coverage Threshold**: A minimum threshold of 80% test coverage for unit and integration tests.


### Generating Coverage Reports

To generate coverage reports, run the tests (Vitest) with the `--coverage` flag.

## 8. Continuous Integration (CI) and Automated Testing

### Integration into CI/CD Pipeline

Tests are automatically run as part of the CI pipeline through GitHub Actions. Each time a commit is pushed or a pull request is created, the tests are executed.

### CI/CD Workflow for Testing

The GitHub Actions workflow includes the following steps:

1.  **Unit Tests**: For both frontend and backend. Also typecheck and linting.

2.  **Build**: If unit tests pass, the application is built (both frontend and backend). This step is required before running integration or E2E tests, as they rely on the application being built and ready for testing.

3.  **Integration Tests**.

4.  **E2E Tests**.

*!!onko liikaa toistoa selvittaa tassaki vai pelkastaan CI/CD.md*


## 9. Troubleshooting Tests

### Common Issues

-  **Failed Tests Due to Unmet Dependencies**: Make sure all required services are running before executing tests.
	- Server, client, development database and nginx reverse proxy (npm run dev)
	- Test database (when running integration and/or E2e tests)
	- The db migrations and seed data is initialized.

### Debugging Tips

- Use `docker-compose logs` to inspect logs for services (client, server, database, rebeverse-proxy).
- Check the test output for specific errors or stack traces and investigate the failed tests.

## Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Awesome TDD course by Helsinki University](https://tdd.mooc.fi/)