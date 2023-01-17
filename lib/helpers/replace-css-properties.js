import fs from "fs";
import chalk from "chalk";

export const replaceCssProperties = (path, data, toReplace, selectors) => {
  selectors.forEach((selector) => {
    const matcher = `${selector}${toReplace.from};`;
    if (data.includes(matcher)) {
      const regex = new RegExp(`${matcher}`, "gmi");
      const replacedResult = data.replace(regex, `${selector}${toReplace.to};`);

      fs.writeFile(path, replacedResult, "utf8", function (err) {
        if (err) {
          throw new Error(err);
        } else {
          console.log("Replaced!");
        }
      });
    } else {
      console.log(chalk.red("No matches!"));
    }
  });
};

export default replaceCssProperties;
