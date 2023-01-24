import l from "chalk";
export const validateConfig = (o) => {
  let { paths: e, imports: i, encoding: n, replace: d, selectors: g } = o,
    t = !0;
  return (
    (e && e.length) ||
      (console.log(l.red.bold("Invalid config! Paths are missing.")), (t = !1)),
    (d && d.length) ||
      (console.log(l.red.bold("Invalid config! Replace Array is missing.")),
      (t = !1)),
    (g && g.length) ||
      (console.log(l.red.bold("Invalid config! Selectors Array is missing.")),
      (t = !1)),
    n ||
      console.log(
        l.cyan.bold("Missing encoding! Will be used default one utf8.")
      ),
    (i && i.length) || console.log(l.cyan.bold("Not provided imports!")),
    t
  );
};
export default validateConfig;
