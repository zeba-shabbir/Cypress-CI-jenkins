const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2,  // Retry twice in CI
      openMode: 0,
    },
    "chromeWebSecurity": false,
    "pageLoadTimeout" : 100000, 
    
 "numTestsKeptInMemory": 5, // Reduce the number of tests stored in memory
 experimentalMemoryManagement: true ,
   "defaultCommandTimeout": 100000,

    // "config"   : {
    //   // ...
    //   externals: {
    //       puppeteer: 'require("puppeteer-extra")',
    //       RecaptchaPlugin : 'require("puppeteer-extra-plugin-recaptcha")'
    //       // ...
    //   },
    // },

    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      // Cypress.config('viewportWidth', 1000)
      // Cypress.config('viewportHeight', 1024)
    },
    
  },
  
});
