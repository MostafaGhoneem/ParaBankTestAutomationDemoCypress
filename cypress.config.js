const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://parabank.parasoft.com/parabank/',
    experimentalStudio: true,
    defaultCommandTimeout: 10000,
    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    
    viewportHeight: 1000,
    viewportWidth: 1660,
    browser: 'chrome',
    headless: true,
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: "allure-results"
    }
  },
});
