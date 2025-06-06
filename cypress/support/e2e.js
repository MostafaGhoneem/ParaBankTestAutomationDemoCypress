// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    if (err.message.includes('Cannot read properties of null (reading \'appendChild\')')) {
        return false; // Ignore this specific error
    }
    // If you want to handle other errors or allow them to fail the tests, return true or leave this part out
    return true;
});

// Alternatively you can use CommonJS syntax:
// require('./commands')