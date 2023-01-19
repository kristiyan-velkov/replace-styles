"use strict";

import chalk from "chalk";
import glob from "glob";
import readFiles from "./read-in-files.js";

const findStyleFiles = (config) => {
  const { paths, imports, encoding = "utf8", replace, selectors } = config;
  glob(paths, (error, files) => {
    if (error) {
      throw new Error(error);
    }
    if (files && files.length > 0) {
      console.log(chalk.yellow.bold(`Found files: ${files.length}`));
      console.table([...files]);
      readFiles(paths, imports, encoding, replace, selectors);
    } else {
      console.log(chalk.red("No file founds!"));
    }
  });
};

export default findStyleFiles;
