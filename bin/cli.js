#!/usr/bin/env node
"use strict";
import chalk from "chalk";
import validateConfig from "../utils/validateConfig.js";
import findStyleFiles from "../src/find-style-files.js";

export const replaceStyles = (config => {
    if(config && validateConfig(config)) {
        findStyleFiles(config);
    } else {
        console.log(chalk.red.bold("Please, provide config!"));
    }
});

export default replaceStyles;


// To be deleted!

const config = {
    paths: "src/**/*.scss",
    selectors: [
        "color: ",
        "test: "
    ],
    imports: [
        "@use '@kris/style' as kris-style;",
        "@import '@kris/style';",
        "@use '@kris/style2' as kris-style2;",
        "@import '@kris/style';"
    ],
    replace: [
        {
            "from": "blue",
            "to": "red"
        }
    ]
};

replaceStyles(config);

