"use strict";
import chalk from "chalk";
import validateConfig from "./utils/validateConfig.js";
import findStyleFiles from "./find-style-files.js";
import { findConfig } from "./utils/config/find-config.js";


export const replaceStyles = (config) => {
  if (config && validateConfig(config)) {
    findStyleFiles(config);
  } else {
    console.log(chalk.red.bold("Please, provide config!"));
  }
};


export default replaceStyles;
export {findConfig}
