import findup from "findup-sync";
import chalk from "chalk";
import fs from "fs";

export const findConfig = (configName) => {
  const configFile = findup(configName);
  let config;
  if (configFile) {
    config = fs.readFileSync(configFile, "utf8");
  } else {
    console.log(chalk.red.bold(`${configName} was not found!`));
  }

  if (config) return JSON.parse(config);
};

export default findConfig;
