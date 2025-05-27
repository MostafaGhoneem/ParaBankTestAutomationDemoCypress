# ParaBank Test Automation with Cypress

This project contains automated tests for the ParaBank web application using Cypress. The test suite covers various functionalities including account management, login, registration, and financial transactions.

## Features

- Page Object Model (POM) design pattern
- Automated test scenarios for:
  - Account Overview
  - Login/Logout
  - User Registration
  - Bill Payment
  - Loan Requests
  - Profile Updates

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Git

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd ParaBankTestAutomationDemoCypress
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── pages/         # Page Object classes
│   │   │   ├── AccountOverviewPage.js
│   │   │   ├── BasePage.js
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   └── tests/         # Test specifications
│   │       ├── accountOverview.spec.cy.js
│   │       ├── login.spec.cy.js
│   │       └── register.spec.cy.js
│   ├── fixtures/          # Test data
│   └── support/          # Support files and commands
├── package.json
└── README.md
```

## Running Tests

To run the tests, use one of the following commands:

- Run tests in headless mode:
```bash
npm run test
```

- Open Cypress Test Runner:
```bash
npm run cypress:open
```

## Test Cases

### Account Overview Tests
- Verify account overview display
- Check account balances and available amounts
- Navigate to account details

### Login Tests
- Successful login
- Failed login attempts
- Empty fields validation

### Registration Tests
- New user registration
- Field validation
- Duplicate username handling


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [ParaBank](https://parabank.parasoft.com/) - Demo application under test
- [Cypress Documentation](https://docs.cypress.io/) - Testing framework

