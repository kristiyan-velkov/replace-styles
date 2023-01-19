<a href="https://www.linkedin.com/in/kristiyan-velkov-763130b3/" target="_blank">
    <img src="src\assets\images\morewell-logo.png" alt="Morewell logo" title="Morewell" align="right" />
</a>

# replace-styles

[![Follow me](https://img.shields.io/badge/sponsors-99+-orange.svg)](https://github.com/christiyan14) [![Sponsors](https://img.shields.io/badge/Follow-120-blue?logo=github&style=social.svg)](https://github.com/christiyan14) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) [![Node Version](https://img.shields.io/badge/node-%3E%3D%2014.0.4-brightgreen.svg)](https://nodejs.org/en/)

<img src="src\assets\images\logo.png"  alt="replace-styles"/>

**The Esiest way to replace in many style files some properties.
Find all styles in the project and replace the style properties in those files.**.

## Table of contents

- [Installation 🦾](#installation)
- [How to Use? 💻](#how-to-use)
- [Examples 🚀](#examples)
- [Developer Support 🔗 ](#developer-support)
- [Support my work ❤️ ](#support-my-work)

---

## Installation

- Via npm:

```code
npm install replace-style --save-dev

```

- Via yarn:

```code
yarn add replace-style -D

```

## How to use?

#### API

| Method                     | Usage                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **moduleExists()**         | Еasy to use a method that will return a boolean value after checking the module/ npm package.                                             |
| **moduleExistsWithText()** | Will return a boolean value if the module/ package exists. Also will provide a nice terminal message which can be customized as you like. |
| **setTextColors()**        | Sets default text colors for success, error, warn, and info messages. **Used only with moduleExistsWithText() method.**                   |

1. **moduleExists() method**

- Accepts string and returns a boolean value.

```js
import { moduleExists } from "replace-style";

if (moduleExists("some-npm-package-name")) {
  //=> true
} else {
  //=> false
}
```

2. **moduleExistsWithText() method**

   - **Info:** Easy to use fully customizable method for checking if the module/npm package exists. Coming with default terminal response. The message in the console (color, text ) can be changed to whatever value you want.

| Properties | Desrciption                     | Return value |
| ---------- | ------------------------------- | ------------ |
| moduleName | module, npm package name        | boolean      |
| options    | Custamizable terminal response. | object       |

```js
import { moduleExistsWithText } from "replace-style";

moduleExistsWithText("some-npm-package-name");
```

<img src="src\assets\images\1.png"  alt="replace-style"/>

- with options

```js
import { moduleExistsWithText } from "replace-style";

moduleExistsWithText("some-npm-package-name", {
  success: {
    text: "Module exists!",
    warn: {
      text: "Don't forget to support my work!",
    },
    info: {
      text: `Information
      name: replace-style
      author: Krisityan Velkov`,
    },
  },
});
```

<img src="src\assets\images\2.png"  alt="replace-style"/>

## Examples:

Full lists of examples how to use **replace-style** whit all supported options:

- [Readme file](https://github.com/christiyan14/replace-style/blob/main/examples/Examples.md)

- [JS file](https://github.com/christiyan14/replace-style/blob/main/examples/example.js)

## Developer Support:

- If you saw some issue/bug 🐛 related to the specific release version.
- If you want some new feature or change to be added/implemented. 😊

Please, contact the creator of the **replace-style**, so he will be able to fix or improve it:

**Kristiyan Velkov**

**Email:** christiyanweb@gmail.com

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/christiyan14)

## Support my work

If you like my work and want to support me to work hard, please donate via:

| <a href="https://revolut.me/kristiyanvelkov" title="Link to Revolut">Revolut</a>                                                                                              | <a href="https://www.buymeacoffee.com/kristiyanVelkov" title="Link to Buy me a coffee">Buy me a coffee</a>                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://revolut.me/kristiyanvelkov" target="_blank"><img src="/src/assets/images/kristiyan.velkov-revolut.png" width="200px"  alt="Krisityan Velkov - Revolut"/></a> | <a href="https://www.buymeacoffee.com/kristiyanVelkov" style="background:red,height='500px'"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kristiyanVelkov&button_colour=000000&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=FFDD00" width="200px"/></a> |

Thanks a bunch for supporting me! It means a LOT 😍

---

Copyright ©️2023. All rights reserved.
