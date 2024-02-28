const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 1200,
  e2e: {
    /*  baseUrl: "https://foodiehub.com.my/", */
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
