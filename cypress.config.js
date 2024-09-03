const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',
    baseUrl : 'https://beta.workmotion.com',
    experimentalStudio: true,
    defaultCommandTimeout: 120000
  },
  viewportHeight: 1000,
  viewportWidth:  1660
  
});
