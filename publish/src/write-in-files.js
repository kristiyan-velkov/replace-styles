"use strict";
import t from "chalk";
import e from "fs";
let writeData = (r, a) => {
    e.writeFile(r, a, "utf8", function (e) {
      if (e) throw e;
    });
  },
  applyChanges = async (t, e, r) => {
    let a;
    return (
      e &&
        e.length &&
        ((t = `${(e = e.join("\r\n"))}

${t}`),
        (a = !0)),
      r.forEach((e) => {
        let r = RegExp(e.from, "gmi");
        t.includes(e.from) && ((t = t.replace(r, e.to)), (a = !0));
      }),
      { data: t, fileWasChanged: a }
    );
  },
  extractImportsFromFile = async (t, e) => {
    let r = t
      .replace(/(?:\r\n|\r|\n)/g, "")
      .split(";")
      .filter((t) => t.startsWith("@import") || t.startsWith("@use"));
    return (
      r &&
        r.length &&
        ((r = r.map((t) => `${t};`)).forEach((e) => {
          t = t.replace(e, " ").trim();
        }),
        (e = e.concat(r)),
        (e = (e = [...new Set(e)]).sort(
          (t, e) => t.includes("@import") - e.includes("@import")
        ))),
      { data: t, imports: e }
    );
  };
export const writeInFiles = async (e, r, a, i) => {
  let n = await extractImportsFromFile(r, i),
    o = await applyChanges(n.data, n.imports, a);
  o.fileWasChanged
    ? writeData(e, o.data)
    : console.log(t.red(`${e} => Not changes were found!`));
};
export default writeInFiles;
