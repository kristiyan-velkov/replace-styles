const extractMatchers = (selectors, replace) => {
  const matchers = [];
  selectors.forEach((selector) => {
    replace.forEach((item) => {
      matchers.push({
        from: `${selector}${item.from}`,
        to: `${selector}${item.to}`,
      });
    });
  });

  return matchers;
};

export const combineMatchers = (replaces) => {
  const combinedMatchers = [];

  replaces.forEach((replaceObj) => {
    const { selectors, replace } = replaceObj;
    combinedMatchers.push(...extractMatchers(selectors, replace));
  });

  return combinedMatchers;
};

export default combineMatchers;
