#!/usr/bin/env node
"use strict";

import chalk from "chalk";
import glob from "glob";
import fs from "fs";

// Glob over the files

const replaceCssSelectors = async (file, data, toReplace, selectors) => {
  selectors.forEach((selector) => {
    const matcher = `${selector}${toReplace.from};`;
    if (data.includes(matcher)) {
      // const regex = new RegExp(`\b(\:${matcher}\)b`, 'gmi');
      const regex = new RegExp(`${matcher}`, "gmi");
      const replacedResult = data.replace(regex, `${selector}${toReplace.to};`);

      fs.writeFile(file, replacedResult, "utf8", function (err) {
        if (err) throw err;
        console.log(chalk.cyan("File was updated:", file));
      });
    } else {
      console.log(chalk.red("No matches!"));
    }
  });
};

const writeInfile = (pathToFiles, encoding, replace, selectors) => {
  glob.sync(pathToFiles, { nodir: true }).forEach((file) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) throw err;
      replace.forEach((toReplace) => {
        replaceCssSelectors(file, data, toReplace, selectors);
      });
    });
  });
};

const scanForFiles = (config) => {
  const { pathToFiles, encoding = "utf8", replace, selectors } = config;

  const callbackFunc = (error, files) => {
    if (error) {
      throw new Error(error);
    }

    if (files && files.length > 0) {
      console.log(chalk.yellow.bold(`Found files: ${files.length}`));
      console.table([...files]);
      writeInfile(pathToFiles, encoding, replace, selectors);
    } else {
      console.log(chalk.red("No file founds!"));
      console.log(chalk.cyan("Please, try to change the path to files."));
    }
  };

  glob(pathToFiles, callbackFunc);
};

// Config

const config = {
  pathToFiles: "src/**/*.{sass,scss,css}",
  selectors: [": "],
  replace: [
    {
      from: "red",
      to: "blue",
    },
  ],
};

scanForFiles(config);
