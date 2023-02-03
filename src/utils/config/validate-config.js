import chalk from "chalk";

export const validateConfig = (config) => {
  const { paths, imports, encoding, replaces } = config;

  let configIsValid = true;

  if (!(paths && paths.length)) {
    console.log(chalk.red.bold("Invalid config! Paths are missing."));
    configIsValid = false;
  }

  if (!(replaces && replaces.length)) {
    console.log(chalk.red.bold("Invalid config! replaces Array is missing."));
    configIsValid = false;
  }

  if (!encoding) {
    console.log(
      chalk.cyan.bold("Missing encoding! Will be used default one utf8.")
    );
  }

  if (!(imports && imports.length)) {
    console.log(chalk.cyan.bold("Not provided imports!"));
  }

  return configIsValid;
};

export default validateConfig;
