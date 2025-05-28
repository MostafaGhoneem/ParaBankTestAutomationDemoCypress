# ParaBank Test Automation with Cypress

This project contains automated tests for ParaBank using Cypress with Allure reporting.

## Features

- Page Object Model (POM) design pattern
- Allure Reporting Integration
- Automated test scenarios for:
  - Account Overview
  - Login/Logout
  - User Registration
  - Bill Payment
  - Loan Requests
  - Profile Updates
- Cypress screenshots on test failures

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Git
- Allure Command Line Tool (for generating reports)
- Java (Required for Allure)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/MostafaGhoneem/ParaBankTestAutomationDemoCypress.git
cd ParaBankTestAutomationDemoCypress
```

2. Install dependencies:
```bash
npm install
```

3. Install Allure Command Line Tool globally:
```bash
npm install -g allure-commandline
```

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── pages/              # Page Object classes
│   │   │   ├── AccountOverviewPage.js
│   │   │   ├── BasePage.js
│   │   │   ├── BillPayPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── LogoutPage.js
│   │   │   ├── OpenNewAccountPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── RequestLoanPage.js
│   │   │   └── UpdateProfilePage.js
│   │   └── tests/             # Test specifications
│   │       ├── accountOverview.spec.cy.js
│   │       ├── billPay.spec.cy.js
│   │       ├── login.spec.cy.js
│   │       ├── logout.spec.cy.js
│   │       ├── openNewAccount.spec.cy.js
│   │       ├── register.spec.cy.js
│   │       ├── requestLoan.spec.cy.js
│   │       ├── updateProfile.spec.cy.js
│   │       └── e2e.spec.cy.js
│   ├── fixtures/              # Test data
│   │   ├── billPayData.json
│   │   ├── loginData.json
│   │   ├── registerData.json
│   │   ├── requestLoanData.json
│   │   └── updateProfileData.json
│   ├── screenshots/           # Test failure screenshots
│   └── support/              # Support files and commands
│       ├── commands.js
│       └── e2e.js            # Allure plugin configuration
├── allure-results/           # Raw test results
├── allure-report/            # Generated HTML report
├── cypress.config.js         # Cypress configuration
├── package.json             # Project dependencies and scripts
└── README.md
```

## Running Tests

### Open Cypress Test Runner
```bash
npm run cy:open
```

### Run Tests in Headless Mode
```bash
npm run cy:run
```

### Run Tests with Allure Reporting
```bash
npm run test:allure
```

This command will:
1. Clear previous results
2. Run the tests
3. Generate the Allure report
4. Open the report in your default browser

### Individual Allure Commands

Clear previous results:
```bash
npm run allure:clear
```

Generate Allure report:
```bash
allure generate allure-results -o allure-report --clean
```

Open Allure report:
```bash
allure open allure-report
```

## Test Cases

### Account Overview Tests
- Verify account overview page loads successfully
- Check account balances display correctly
- Verify account numbers are displayed
- Navigate to account details
- Validate transaction history

### Login Tests
- Successful login with valid credentials
- Failed login with invalid credentials
- Failed login with empty username
- Failed login with empty password
- Failed login with empty username and password

### Registration Tests
- Successful new user registration
- Field validation for all required fields
- Duplicate username handling
- Password mismatch validation
- Empty fields validation

### Bill Pay Tests
- Successful bill payment
- Validate payee information fields
- Verify payment amount validation
- Check account selection
- Confirm payment processing

### Logout Tests
- Successful logout
- Verify session termination
- Check redirect to login page
- Validate secure logout

### Open New Account Tests
- Successfully open new checking account
- Successfully open new savings account
- Verify account type selection
- Validate minimum deposit requirements
- Check account creation confirmation

### Request Loan Tests
- Successful loan request submission
- Verify loan amount validation
- Check down payment validation
- Validate existing account selection
- Verify loan application status

### Update Profile Tests
- Successfully update contact information
- Verify phone number update
- Validate address fields
- Check email format validation
- Confirm profile changes saved

### End-to-End Tests
- Complete user journey from registration to loan request
- Full account management workflow
- Bill payment end-to-end process
- Profile update and verification flow

## Reporting

### Allure Reports
- Detailed test execution reports
- Test case history
- Test execution timeline
- Severity and category-based filtering

### Cypress Screenshots
- Screenshots are automatically captured on test failure
- Available in the `cypress/screenshots` directory

## Configuration

- Cypress configuration: `cypress.config.js`
- Allure plugin configuration: `cypress/support/e2e.js`

## Notes

- The Allure report server will start at `http://localhost:xxxx` (port is dynamically assigned)
- Press `Ctrl+C` to stop the Allure report server
- Test failure screenshots are saved in the Cypress screenshots directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [ParaBank](https://parabank.parasoft.com/) - Demo application under test
- [Cypress Documentation](https://docs.cypress.io/) - Testing framework
- [Allure Framework](https://docs.qameta.io/allure/) - Reporting tool

