const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env : {
    url : 'abc',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/testScripts/**.spec.js",
    ] ,
  },
 
  defaultCommandTimeout: 60000,
  
});
