"use strict";
import r from "glob";
import e from "./utils/combine-matchers.js";
import i from "./write-in-files.js";
import o from "fs";
let readFiles = async (t, s, m, f, l) => {
  let a = e(f, l);
  r.sync(t, { nodir: !0 }).forEach((r) => {
    o.readFile(r, m, (e, o) => {
      if (e) throw e;
      i(r, o, a, s);
    });
  });
};
export default readFiles;
