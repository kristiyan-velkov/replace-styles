"use strict";

import chalk from "chalk";
import fs from "fs";

const writeData = (file, replacedData) => {
  fs.writeFile(file, replacedData, "utf8", function (err) {
    if (err) throw err;
  });
};

const applyChanges = async (data, imports, matchers) => {
  let fileWasChanged;
  if (imports && imports.length) {
    imports = imports.join("\r\n");
    data = `${imports}\n\n${data}`;
    fileWasChanged = true;
  }

  matchers.forEach((item) => {
    if (data.includes(item.from)) {
      data = data.replaceAll(item.from, item.to);
      fileWasChanged = true;
    }
  });

  return { data, fileWasChanged };
};

const extractImportsFromFile = async (data, imports) => {
  let fileImports = data
    .replace(/(?:\r\n|\r|\n)/g, "")
    .split(";")
    .filter((item) => item.startsWith("@import") || item.startsWith("@use"));

  if (fileImports && fileImports.length) {
    fileImports = fileImports.map((item) => `${item};`);

    fileImports.forEach((item) => {
      data = data.replace(item, " ").trim();
    });

    imports = imports.concat(fileImports);
    imports = [...new Set(imports)];
    imports = imports.sort(
      (a, b) => a.includes("@import") - b.includes("@import")
    );
  }

  return { data, imports };
};

export const writeInFiles = async (file, data, matchers, imports) => {
  let modified = await extractImportsFromFile(data, imports);

  let result = await applyChanges(modified.data, modified.imports, matchers);

  if (result.fileWasChanged) {
    writeData(file, result.data);
  } else {
    console.log(chalk.red(`${file} => Not changes were found!`));
  }
};

export default writeInFiles;
