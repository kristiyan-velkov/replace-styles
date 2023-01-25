import findup from "findup-sync";
import chalk from "chalk";
import fs from "fs";

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
