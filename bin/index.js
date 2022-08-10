#!/usr/bin/env node
"use strict";

import chalk from "chalk";
import ora from "ora";
import { moduleExist, moduleExistWithMessage } from "./module-exist.js";

moduleExistWithMessage("ora22", "Test", {
  success: {
    color: "#008000",
    message: "Installed!",
  },
});
