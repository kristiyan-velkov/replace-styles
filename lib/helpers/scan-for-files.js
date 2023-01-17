"use strict";

import glob from "glob";
import chalk from "chalk";

export const scanForFiles = (pathToFiles) => {
  glob(pathToFiles, (error, files) => {
    if (error) {
      throw new Error(error);
    }

    if (files && files.length > 0) {
      console.log(chalk.yellow.bold(`Found files: ${files.length}`));
      console.table([...files]);
    } else {
      console.log(chalk.red("No file founds!"));
      console.log(chalk.cyan("Please, try to change the path to files."));
    }
  });
};

export default scanForFiles;
