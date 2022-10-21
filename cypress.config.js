const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qrk8e4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://conexaoqa.herokuapp.com'
  },
});
