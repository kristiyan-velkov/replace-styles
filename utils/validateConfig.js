import chalk from "chalk";

export const validateConfig = (config) => {
  const { paths, imports, encoding, replace, selectors } = config;

  let configIsValid = true;

  if (!(paths && paths.length)) {
    console.log(chalk.red.bold("Invalid config! Paths are missing."));
    configIsValid = false;
  }

  if (!(replace && replace.length)) {
    console.log(chalk.red.bold("Invalid config! Replace Array is missing."));
    configIsValid = false;
  }

  if (!(selectors && selectors.length)) {
    console.log(chalk.red.bold("Invalid config! Selectors Array is missing."));
    configIsValid = false;
  }

  if (!encoding) {
    console.log(
      chalk.cyan.bold("Missing encoding! Will be used default one utf8.")
    );
  }

  if (!(imports && imports.length)) {
    console.log(chalk.cyan.bold("Missing imports!"));
  }

  return configIsValid;
};

export default validateConfig;
