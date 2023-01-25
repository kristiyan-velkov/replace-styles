#!/usr/bin/env node
"use strict";
import chalk from "chalk";
import validateConfig from "./utils/config/validate-config.js";
import findStyleFiles from "./find-style-files.js";
import findConfig from "./utils/config/find-config.js";

export const replaceStyles = (config) => {
  if (config && validateConfig(config)) {
    findStyleFiles(config);
  } else {
    console.log(chalk.red.bold("Please, provide config!"));
  }
};

// export default replaceStyles;

// Example Config

// const config = {
//   paths: "src/**/*.scss",
//   selectors: ["color: "],
//   imports: [],
//   replace: [
//     {
//       from: "gfk-style.$red",
//       to: "gfk-style.$kiro",
//     },
//   ],
// };

const config = findConfig();

replaceStyles(config);
