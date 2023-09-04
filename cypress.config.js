const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

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
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    // baseUrl: "http://65.1.7.25:3001/instructor/activities/courses",
    sahajUrl:"http://localhost:3000/",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});

// import {defineConfig} from 'cypress';
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   allureWriter(on, config);

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

// export default defineConfig({
//   e2e: {
//     setupNodeEvents,
//     specPattern: "cypress/e2e/features/*.feature",
//     baseUrl: "https://www.saucedemo.com",
//     chromeWebSecurity: false,
//     env: {
//       allureReuseAfterSpec: true,
//     },
//   },
// });

