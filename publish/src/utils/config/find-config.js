import o from "findup-sync";
import f from "chalk";
import i from "fs";
import e from "./validate-config.js";
import r from "../../find-style-files.js";
let checkConfig = async (o) => {
  (await e(o)) && r(o);
};
export const findConfig = () => {
  let e = o("replace-styles.config.json");
  e
    ? i.readFile(e, "utf8", (o, f) => {
        if (o) throw o;
        checkConfig(JSON.parse(f));
      })
    : console.log(f.red.bold("replace-styles.config.json was not found!"));
};

export default findConfig;
