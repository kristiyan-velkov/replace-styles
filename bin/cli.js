#!/usr/bin/env node
"use strict";

import chalk from "chalk";
import glob from "glob";
import fs from "fs";
import { combineMatchers } from "../lib/helpers/combine-matchers.js";

// Glob over the files

const writeInFiles = async (file, data, matchers) => {
  const writeData = (replacedData) => {
    console.log(replacedData);
    fs.writeFile(file, replacedData, "utf8", function (err) {
      if (err) throw err;
      console.log(chalk.cyan("File was updated:", file));
    });
  };

  matchers.forEach((item) => {
    const regex = new RegExp(item.from, "gmi");
    data = data.replace(regex, item.to);
  });

  writeData(data);
};

const readFiles = (paths, encoding, replace, selectors) => {
  const matchers = combineMatchers(replace, selectors);

  glob.sync(paths, { nodir: true }).forEach((file) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) throw err;
      writeInFiles(file, data, matchers);
    });
  });
};

const scanForFiles = (config) => {
  const { paths, encoding = "utf8", replace, selectors } = config;

  const callbackFunc = (error, files) => {
    if (error) {
      throw new Error(error);
    }

    if (files && files.length > 0) {
      console.log(chalk.yellow.bold(`Found files: ${files.length}`));
      console.table([...files]);
      readFiles(paths, encoding, replace, selectors);
    } else {
      console.log(chalk.red("No file founds!"));
      console.log(chalk.cyan("Please, try to change the paths to files."));
    }
  };

  glob(paths, callbackFunc);
};

// Config

const config = {
  paths: "src/*.scss",
  selectors: [": ", "color: ", "test: "],
  replace: [
    {
      from: "red",
      to: "orange",
    },
    {
      from: "gold",
      to: "pink",
    },
  ],
};

scanForFiles(config);
