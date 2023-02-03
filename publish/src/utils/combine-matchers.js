let extractMatchers = (t, e) => {
  let r = [];
  return (
    t.forEach((t) => {
      e.forEach((e) => {
        r.push({ from: `${t}${e.from}`, to: `${t}${e.to}` });
      });
    }),
    r
  );
};
export const combineMatchers = (t) => {
  let e = [];
  return (
    t.forEach((t) => {
      let { selectors: r, replace: c } = t;
      e.push(...extractMatchers(r, c));
    }),
    e
  );
};
export default combineMatchers;
