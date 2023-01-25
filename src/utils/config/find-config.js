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
  let config;
  if (configFile) {
    config = fs.readFileSync(configFile, "utf8");
  } else {
    console.log(chalk.red.bold("replace-styles.config.json was not found!"));
  }

  if (config) return JSON.parse(config);
};

export default findConfig;
