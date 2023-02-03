"use strict";
import r from "glob";
import e from "./utils/combine-matchers.js";
import i from "./write-in-files.js";
import o from "fs";
let readFiles = async (t, s, m, f) => {
  let l = e(f);
  r.sync(t, { nodir: !0 }).forEach((r) => {
    o.readFile(r, m, (e, o) => {
      if (e) throw e;
      i(r, o, l, s);
    });
  });
};
export default readFiles;
