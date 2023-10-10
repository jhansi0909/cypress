const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;

// }
}

module.exports = defineConfig({
  // viewportWidth: 1280,
  // viewportHeight: 800,
  // defaultCommandTimeout: 10000,
  // reporter: "mochawesome",
  // reporterOptions: {
  //   reportDir: "cypress/results",
  //   overwrite: false,
  //   html: false,
  //   json: true,
  //   charts: true,
  //   reportPageTitle: "COWReport",
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  // },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    sahajTtpUrl: "http://localhost:3000/",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
