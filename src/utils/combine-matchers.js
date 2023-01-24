export const combineMatchers = (replace, selectors) => {
  const combinedMatchers = [];

  selectors.forEach((selector) => {
    replace.forEach((item) => {
      combinedMatchers.push({
        from: `${selector}${item.from}`,
        to: `${selector}${item.to}`,
      });
    });
  });

  return combinedMatchers;
};

export default combineMatchers;
