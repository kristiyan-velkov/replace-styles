"use strict";
import l from "chalk";
import e from "glob";
import o from "./read-in-files.js";
let findStyleFiles = (t) => {
  let {
    paths: i,
    imports: f,
    encoding: r = "utf8",
    replace: d,
    selectors: s,
  } = t;
  e(i, (e, t) => {
    if (e) throw Error(e);
    t && t.length > 0
      ? (console.log(l.yellow.bold(`Found files: ${t.length}`)),
        console.table([...t]),
        o(i, f, r, d, s))
      : console.log(l.red("No file founds!"));
  });
};
export default findStyleFiles;
