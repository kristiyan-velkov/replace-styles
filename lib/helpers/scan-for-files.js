"use strict";

import glob from "glob";

export const scanForFiles = (pathToFiles, callbackFunc) => {
  glob(pathToFiles, callbackFunc);
};

export default scanForFiles;
