"use strict";
import { createRequire } from "module";
import ora from "ora";
import chalk from "chalk";

const require = createRequire(import.meta.url);

const moduleExist = (moduleName) => {
  try {
    require.resolve(moduleName);
    return true;
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND") {
      return false;
    }
  }
};

const defaultSuccessMessagesOption = {
  success: {
    color: "#008000",
    message: "Installed!",
    info: {
      color: "#00FFFF",
      message: "",
    },
    warning: {
      color: "#FFA500",
      message: "",
    },
  },
};

const defaultErrorMessagesOption = {
  error: {
    color: "#DC143C",
    text: "Not Installed!",
    info: {
      color: "#00FFFF",
      message: "",
    },
    warning: {
      color: "#FFA500",
      message: "",
    },
  },
};

const moduleExistWithMessage = (
  moduleName,
  spinnerLoadingText = "Checking modules...",
  successMessageOptions = defaultSuccessMessagesOption,
  errorMessageOptions = defaultErrorMessagesOption
) => {
  const success = chalk.hex(successMessageOptions.success?.color);
  const error = chalk.hex(successMessageOptions.error?.color);
  const spinner = ora(spinnerLoadingText).start();

  if (moduleExist(moduleName)) {
    spinner.succeed(success(successMessageOptions.success?.message));

    if (successMessageOptions.success.warning?.message) {
      const warning = chalk.hex(successMessageOptions.success.warning.color);
      spinner.warn(warning(successMessageOptions.success.warning.message));
    }

    if (successMessageOptions.success.info?.message) {
      const info = chalk.hex(successMessageOptions.success.info.color);
      spinner.info(info(successMessageOptions.success.info.message));
    }
  } else {
    spinner.fail(error(errorMessageOptions.error.message));

    if (errorMessageOptions.error.warning?.message) {
      const warning = chalk.hex(errorMessageOptions.error.warning.color);
      spinner.warn(warning(errorMessageOptions.error.warning.message));
    }

    if (errorMessageOptions.error.info?.message) {
      const info = chalk.hex(errorMessageOptions.error.info.color);
      spinner.info(info(errorMessageOptions.error.info.message));
    }
  }
  spinner.stop();
};

export default moduleExist;
export { moduleExist, moduleExistWithMessage };
