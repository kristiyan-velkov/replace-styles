export const combineMatchers = (o, r) => {
  let t = [];
  return (
    r.forEach((r) => {
      o.forEach((o) => {
        t.push({ from: `${r}${o.from}`, to: `${r}${o.to}` });
      });
    }),
    t
  );
};
export default combineMatchers;
