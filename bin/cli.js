#!/usr/bin/env node
"use strict";

import chalk from "chalk";
import glob from "glob";
import fs from "fs";
import scanForFiles from "../lib/helpers/scan-for-files.js";

// Replace selectors

const replaceCssSelectors = async (path, data, toReplace, selectors) => {
  selectors.forEach((selector) => {
    const matcher = `${selector}${toReplace.from};`;
    if (data.includes(matcher)) {
      // const regex = new RegExp(`\b(\:${matcher}\)b`, 'gmi');
      const regex = new RegExp(`${matcher}`, "gmi");
      const replacedResult = data.replace(regex, `${selector}${toReplace.to};`);

      fs.writeFile(path, replacedResult, "utf8", function (err) {
        if (err) throw err;
      });
    } else {
      console.log(chalk.red("No matches!"));
    }
  });
};

// Read file

const replaceInFile = (path, encoding, replace, selectors) => {
  fs.readFile(path, encoding, (err, data) => {
    if (err) throw err;

    replace.forEach((toReplace) => {
      replaceCssSelectors(path, data, toReplace, selectors);
    });
  });
};

// Glob over the files

const getStyleFiles = (config) => {
  const { pathToFiles, encoding, replace, selectors } = config;

  const result = scanForFiles(pathToFiles);

  // glob.sync(pathToFiles, { nodir: true }).forEach(file  => {
  //     replaceInFile(file, encoding || 'utf8', replace, selectors);
  // });
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

getStyleFiles(config);
