import l from "chalk";
export const validateConfig = (o) => {
  let { paths: e, imports: i, encoding: n, replaces: t } = o,
    d = !0;
  return (
    (e && e.length) ||
      (console.log(l.red.bold("Invalid config! Paths are missing.")), (d = !1)),
    (t && t.length) ||
      (console.log(l.red.bold("Invalid config! replaces Array is missing.")),
      (d = !1)),
    n ||
      console.log(
        l.cyan.bold("Missing encoding! Will be used default one utf8.")
      ),
    (i && i.length) || console.log(l.cyan.bold("Not provided imports!")),
    d
  );
};
export default validateConfig;
