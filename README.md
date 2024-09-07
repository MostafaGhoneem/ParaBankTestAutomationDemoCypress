# WorkMotion E2E Testing Task

This repository contains the E2E test automation scripts for the WorkMotion platform. The tests are implemented using the Cypress framework in JavaScript and follow the Page Object Model (POM) design pattern. This project automates the onboarding process for adding new talent on the WorkMotion platform.

## Table of Contents

- [Task Overview](#task-overview)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [What's Next](#whats-next)

## Task Overview

The goal of this task is to automate the end-to-end testing process of the onboarding feature in the WorkMotion platform using the Cypress framework. The key functionalities tested include:

1. Logging in as an HR manager.
2. Adding a new talent by selecting a specific country and work type.
3. Filling in all the onboarding steps.
4. Verifying notifications related to the onboarding process.
5. Asserting that the notifications are correctly marked and display the correct talent name.

## Project Structure

The project is organized as follows:

- **cypress/**: Contains all the Cypress-specific configurations and tests.
  - **fixtures/**: Test data files used within the tests.
  - **tests/**: The test scripts are located here, following the POM design pattern.
  - **pages/**: Page Object Model classes, where each class represents a page or component in the application.
  - **support/**: Custom commands and additional Cypress support files.

## Setup Instructions

To set up and run this project on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MostafaGhoneem/WorkMotionTask.git
   cd WorkMotionTask
   ```

2. **Install the dependencies**:
   Make sure you have Node.js installed on your machine. Then, install the necessary dependencies by running:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   If there are any environment-specific configurations (e.g., credentials, base URL), they should be set up in the `cypress.env.json` file or directly within the test files.

## Running Tests

To run the tests and generate reports, use the following commands:

- **Run Cypress Test Runner**:
  This opens the Cypress GUI, where you can select and run individual tests.
  ```bash
  npx cypress open
  ```

- **Run Tests in Headless Mode**:
  This runs all the tests in headless mode and generates an Allure report.
  ```bash
  npm run cypress:run
  ```

- **Generate Allure Report Manually**:
  After running the tests, you can generate the Allure report with the following command:
  ```bash
  npm run allure:report
  ```

- **Run Tests and Open Allure Report Automatically**:
  If you want to run the tests and have the Allure report open immediately afterward, use:
  ```bash
  npm run cypress:report
  ```

## What's Next

- **Adding More Dynamic Methods**: Enhance the test scripts by adding more dynamic and reusable methods to handle various test scenarios effectively.
  
- **Implement the Date-Picker Method**: Develop a method to interact with and test date-picker components within the application(Implemented but Blocked).

