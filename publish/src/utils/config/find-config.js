import o from "findup-sync";
import f from "chalk";
import r from "fs";
export const findConfig = (n) => {
  let t = o(n),
    i;
  if (
    (t
      ? (i = r.readFileSync(t, "utf8"))
      : console.log(f.red.bold(`${n} was not found!`)),
    i)
  )
    return JSON.parse(i);
};
export default findConfig;
