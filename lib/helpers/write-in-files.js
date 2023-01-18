"use strict";

import chalk from "chalk";
import fs from "fs";

const writeData = (file, replacedData) => {
  fs.writeFile(file, replacedData, "utf8", function (err) {
    if (err) throw err;
    console.log(chalk.cyan("File was updated:", file));
  });
};

const applyChanges = (data, imports, matchers) => {
  let fileWasChanged;
  if (imports && imports.length) {
    imports.forEach((item) => {
      if (!data.includes(item)) {
        data = `${item}\n${data}`;
        fileWasChanged = true;
      }
    });
  }

  matchers.forEach((item) => {
    const regex = new RegExp(item.from, "gmi");
    if (data.includes(item.from)) {
      data = data.replace(regex, item.to);
      fileWasChanged = true;
    }
  });

  return { data, fileWasChanged };
};

export const writeInFiles = (file, data, matchers, imports) => {
  let result = applyChanges(data, imports, matchers);

  if (result.fileWasChanged) {
    writeData(file, result.data);
  } else {
    console.log(chalk.red(`${file} => Not changes found!`));
  }
};

export default writeInFiles;
