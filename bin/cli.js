#!/usr/bin/env node
"use strict";

import chalk from "chalk";
import glob from "glob";
import fs from "fs";
import combineMatchers from "../lib/helpers/combine-matchers.js";
import writeInFiles from "../lib/helpers/write-in-files.js";
import checkConfig from "../lib/helpers/checkConfig.js";

const readFiles = async (paths, imports, encoding, replace, selectors) => {
  const matchers = combineMatchers(replace, selectors);

  glob.sync(paths, { nodir: true }).forEach((file) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) throw err;
      writeInFiles(file, data, matchers, imports);
    });
  });
};

const replaceStyleInFiles = (config) => {
  if (checkConfig(config)) {
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
  }
};

const config = {
  paths: "src/**/*.{sass,scss,css}",
  selectors: ["color: ", "test: "],
  imports: ["@use '@kris/style' as kris-style;", "@import '@kris/style';"],
  replace: [
    {
      from: "red",
      to: "blue",
    },
    {
      from: "gold",
      to: "pink",
    },
  ],
};

replaceStyleInFiles(config);
