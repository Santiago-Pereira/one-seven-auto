const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://foodiehub.com.my/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
