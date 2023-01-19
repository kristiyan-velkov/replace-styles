import findup from "findup-sync";
import chalk from "chalk";
import fs from "fs";
import checkConfig from "./checkConfig.js";
import findStyleFiles from "../files/find-style-files.js";

const validateConfig = async (config) => {
  if (await checkConfig(config)) {
    findStyleFiles(config);
  }
};

const getConfig = () => {
  const configFile = findup("replace-styles.config.json");

  if (configFile) {
    fs.readFile(configFile, "utf8", (err, config) => {
      if (err) throw err;
      validateConfig(JSON.parse(config));
    });
  } else {
    console.log(chalk.red.bold("replace-styles.config.json was not found!"));
  }
};

export default getConfig;
