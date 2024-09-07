const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl : 'https://beta.workmotion.com',
    experimentalStudio: true,
    defaultCommandTimeout: 60000,
    
    setupNodeEvents: (on, config) => {
      allureCypress(on, config);

      return config;
    
    },
    env: {
      allureReuseAfterSpec: true
  },
    
  viewportHeight: 1000,
  viewportWidth:  1660,
  
  
}



});
