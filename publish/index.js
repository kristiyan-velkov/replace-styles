"use strict";
import chalk from "chalk";
import validateConfig from "./utils/validateConfig.js";
import findStyleFiles from "./find-style-files.js";

export const replaceStyles = (config) => {
  if (config && validateConfig(config)) {
    findStyleFiles(config);
  } else {
    console.log(chalk.red.bold("Please, provide config!"));
  }
};

const config = {
  paths: "../src/**/*.scss",
  selectors: ["color: "],
  imports: ["@use '@kris/style' as kris-style;"],
  replace: [
    {
      from: "blue",
      to: "red",
    },
  ],
};

replaceStyles(config);

export default replaceStyles;
