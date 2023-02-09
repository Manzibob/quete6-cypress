const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    MAILSLURP_API_KEY:
      "0a6b44fbbfd803d8656760666a1309caf58e92da291184e3bf5131db60015d2b",
  },
  e2e: {
    // setupNodeEvents(on, config) {
      // implement node event listeners here
      defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
    
  },
});
