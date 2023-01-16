import { moduleExists, moduleExistsWithText, setTextColors } from "js-module-exists";

if(moduleExists("js-module-exists")) {
    console.log(true);
}


setTextColors({
    success: '#fff',
})

moduleExistsWithText("js-module-exists");



// moduleExistsWithText("js-module-exists", {
//   success: {
//     text: "Module exists!",
//     warn: {
//       text: "Don't forget to support my work!",
//     },
//     info: {
//       text: `Information
//       name: js-module-exists
//       author: Krisityan Velkov`,
//     },
//   },
// });
