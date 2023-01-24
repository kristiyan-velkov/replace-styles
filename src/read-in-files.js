"use strict";

import glob from "glob";
import combineMatchers from "./utils/combine-matchers.js";
import writeInFiles from "./write-in-files.js";
import fs from "fs";

const readFiles = async (paths, imports, encoding, replace, selectors) => {
  const matchers = combineMatchers(replace, selectors);

  glob.sync(paths, { nodir: true }).forEach((file) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) throw err;
      writeInFiles(file, data, matchers, imports);
    });
  });
};

export default readFiles;
