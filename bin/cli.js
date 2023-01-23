#!/usr/bin/env node
"use strict";
import chalk from "chalk";
import validateConfig from "../utils/validateConfig.js";
import findStyleFiles from "../src/find-style-files.js";

export const replaceStyles = (config) => {
  if (config && validateConfig(config)) {
    findStyleFiles(config);
  } else {
    console.log(chalk.red.bold("Please, provide config!"));
  }
};

export default replaceStyles;

// To be deleted!

const config = {
  paths: "src/**/*.scss",
  selectors: ["color: "],
  imports: [],
  replace: [
    {
      from: "red",
      to: "blue",
    },
  ],
};

replaceStyles(config);
