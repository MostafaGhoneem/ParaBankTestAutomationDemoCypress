const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://parabank.parasoft.com/parabank/',
    experimentalStudio: true,
    defaultCommandTimeout: 10000,
    
    setupNodeEvents(on, config) {
      return config;
    },
    
    viewportHeight: 1000,
    viewportWidth: 1660,
  },
});
