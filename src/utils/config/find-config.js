import findup from "findup-sync";
import chalk from "chalk";
import fs from "fs";
import validateConfig from "./validate-config.js";
import findStyleFiles from "../../find-style-files.js";

const checkConfig = async (config) => {
  if (await validateConfig(config)) {
    findStyleFiles(config);
  }
};

export const findConfig = () => {
  const configFile = findup("replace-styles.config.json");

  if (configFile) {
    fs.readFile(configFile, "utf8", (err, config) => {
      if (err) throw err;
      checkConfig(JSON.parse(config));
    });
  } else {
    console.log(chalk.red.bold("replace-styles.config.json was not found!"));
  }
};

export default findConfig;
