import fs from "fs";

const readFiles = (path, encoding, replace, selectors) => {
  fs.readFile(path, encoding, (err, data) => {
    if (err) throw err;

    replace.forEach((toReplace) => {
      replaceCssSelectors(path, data, toReplace, selectors);
    });
  });
};

export default readFiles;
