"use strict";
import e from "chalk";
import o from "./src/utils/config/validate-config.js";
import i from "./src/find-style-files.js";
import r from "../src/utils/config/find-config.js";
export const replaceStyles = (r) => {
  r && o(r) ? i(r) : console.log(e.red.bold("Please, provide config!"));
};
replaceStyles.findConfig = r;
export default replaceStyles;
