import o from "findup-sync";
import e from "chalk";
import f from "fs";
export const findConfig = () => {
  let n = o("replace-styles.config.json"),
    r;
  if (
    (n
      ? (r = f.readFileSync(n, "utf8"))
      : console.log(e.red.bold("replace-styles.config.json was not found!")),
    r)
  )
    return JSON.parse(r);
};
export default findConfig;
