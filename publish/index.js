#!/usr/bin/env node
"use strict";
import e from "chalk";
import o from "./utils/config/validate-config.js";
import i from "./find-style-files.js";
import r from "./utils/config/find-config.js";
export const replaceStyles = (r) => {
  r && o(r) ? i(r) : console.log(e.red.bold("Please, provide config!"));
};
replaceStyles.findConfig = r;
export default replaceStyles;
