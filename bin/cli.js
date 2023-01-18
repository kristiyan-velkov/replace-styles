#!/usr/bin/env node
"use strict";

import chalk from "chalk";
import glob from "glob";
import fs from "fs";
import { combineMatchers } from "../lib/helpers/combine-matchers.js";

// Glob over the files

const writeInFiles = async (file, data, matchers, imports) => {
  let findChanges;

  const writeData = (replacedData) => {
    fs.writeFile(file, replacedData, "utf8", function (err) {
      if (err) throw err;
      console.log(chalk.cyan("File was updated:", file));
    });
  };

  if (imports.length) {
    imports.forEach((item) => {
      if (!data.includes(item)) {
        data = `${item}\n${data}`;
        findChanges = true;
      }
    });
  }

  matchers.forEach((item) => {
    const regex = new RegExp(item.from, "gmi");
    if (data.includes(item.from)) {
      data = data.replace(regex, item.to);
      findChanges = true;
    } else {
      // console.log(chalk.red(`${item.from} was not found in file => ${file}`));
    }
  });

  if (findChanges) {
    writeData(data);
  } else {
    console.log(chalk.red(`${file} => Not changes found!`));
  }
};

const readFiles = async (paths, imports, encoding, replace, selectors) => {
  const matchers = combineMatchers(replace, selectors);

  glob.sync(paths, { nodir: true }).forEach((file) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) throw err;
      writeInFiles(file, data, matchers, imports);
    });
  });
};

const scanForFiles = (config) => {
  const { paths, imports, encoding = "utf8", replace, selectors } = config;

  const callbackFunc = (error, files) => {
    if (error) {
      throw new Error(error);
    }

    if (files && files.length > 0) {
      console.log(chalk.yellow.bold(`Found files: ${files.length}`));
      console.table([...files]);
      readFiles(paths, imports, encoding, replace, selectors);
    } else {
      console.log(chalk.red("No file founds!"));
      console.log(chalk.cyan("Please, try to change the paths to files."));
    }
  };

  glob(paths, callbackFunc);
};

// Config

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

scanForFiles(config);
