<a href="https://www.linkedin.com/in/kristiyan-velkov-763130b3/" target="_blank">
    <img src="https://github.com/christiyan14/replace-styles/blob/main/src/assets/images/morewell-logo.png" alt="Morewell logo" title="Morewell" align="right" />
</a>

# replace-styles

[![Follow me](https://img.shields.io/badge/sponsors-99+-orange.svg)](https://github.com/christiyan14) [![Sponsors](https://img.shields.io/badge/Follow-120-blue?logo=github&style=social.svg)](https://github.com/christiyan14) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) [![Node Version](https://img.shields.io/badge/node-%3E%3D%2014.0.4-brightgreen.svg)](https://nodejs.org/en/)

<img src="https://github.com/christiyan14/replace-styles/blob/main/src/assets/images/logo.png"  alt="replace-styles"/>

**The easiest way to replace style properties in many style files and @import or @include all needed sass dependencies!**

Perfect tool if you want to replace multiple css properties with just a second, what is needed is just to provide config with your selectors, imports, replaces and the **replace-styles** will do the work for you!

---

**Why to use the replace-styles:**

- Easy way to replace multiple css properties in any of founded files.
- Will replace each css properties which is match the replace array.
- Easy to specify path to your files via glob.
  Example "src/\*_/_.{scss,sass}" which will select all files in src/ folder and nested ones with ends with .scss or .sass;
- You can provide multiple selectors for search in files.
- Will keep the older @imports and @includes and will combine with your new provided in config following the best practice.
- Provide nice message with how many files found and list output of them.
- Provide nice output with files which were change.
- Easy to make a configuration.

## Table of contents

- [Installation 🦾](#installation)
- [How to Use? 💻](#how-to-use)
- [Examples 🚀](#examples)
- [Developer Support 🔗 ](#developer-support)
- [Support my work ❤️ ](#support-my-work)

---

## Installation

- Via yarn:

```code
yarn add replace-styles -D

```

- Via npm:

```code
npm install replace-styles --save-dev

```

## How to use?

#### Full setup

```js
import replaceStyles from "replace-styles";

const config = {
  paths: "src/**/*.{scss,sass}",
  selectors: ["color: "],
  imports: ["@use '@my/style' as style;", "@import '@test/style';"],
  replaces: [
    {
      selectors: ["color: "],
      replace: [
        {
          from: "red",
          to: "style.$red",
        },
      ],
    },
  ],
};

replaceStyles(config);
```

#### API

| Method              | Usage                                                                        |
| ------------------- | ---------------------------------------------------------------------------- |
| **replaceStyles()** | Provide config and will replace everything based on specification in config. |
| **config**          | Object.                                                                      |

#### **Example config:**

```js
const config = {
  paths: "src/**/*.{scss,sass}",
  imports: ["@use '@my/style' as style;"],
  replaces: [
    {
      selectors: ["color: ", "background-color: "],
      replace: [
        {
          from: "#bde5bd",
          to: "style.$green",
        },
        {
          from: "#ffffff",
          to: "style.$white",
        },
        {
          from: "blue",
          to: "#0000FF",
        },
      ],
    },
    {
      selectors: ["padding: ", "margin: "],
      replace: [
        {
          from: "5px",
          to: "style.$small-size",
        },
      ],
    },
  ],
};
```

| Config property | Type                        | Description                                                                                                                                               |
| --------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **paths**       | Array - []                  | Path to files which will be replaces. Support glob selector.                                                                                              |
| **imports**     | Array - []                  | Add @imports or @use to the top of each selected file. Will conbine existing ones with new ones to follow the order via first @use and then all @imports. |
| **replaces**    | Array of objects - object[] | Array of objects {selectors: ['string'], replace:[{from:, to:}]}. Will replace evetything which match the selector in files **from** -> **to** property.  |
| **encoding?**   | string                      | Encoding of the files. By default will be 'utf8'                                                                                                          |

Replaces array structure:

```js
replaces: [
  {
    selectors: ["string of selectors"],
    replace: [
      {
        from: "string to find to replace",
        to: "string to replace",
      },
    ],
  },
];
```

## Examples:

**example 1:**

1. Find files in src folder wich end with .scss;
2. Replace all red colors with blue ones.

**Setup for example 1**:

```js
import replaceStyles from "replace-styles";

const config = {
  paths: "src/**/*.scss}",
  imports: [""],
  replaces: [
    {
      selectors: [': '],
      replace: [
        from: "red",
        to: "blue",
      ]
    }
  ]
};

replaceStyles(config);
```

<img src="https://github.com/christiyan14/replace-styles/blob/main/src/assets/images/before-after.png"  alt="replace-styles"/>

---

**Example 2:**

1. Find files in src folder which end with .scss;
2. Select all css properties.
3. Add '@use '@test/style' as style;' of the top of the file.
4. Replace all red colors with style.$red sass variable.

**Setup for example two**:

```js
import replaceStyles from "replace-styles";

const config = {
  paths: "src/**/*.scss}",
  imports: ["@use '@test/style' as style;"],
  replaces: [
    {
      selectors: [': '],
      replace: [
        from: "red",
        to: "style.$red",
      ]
    }
  ]
};

replaceStyles(config);
```

<img src="https://github.com/christiyan14/replace-styles/blob/main/src/assets/images/before-after-wiht-includes.png"  alt="replace-styles"/>

---

## Developer Support:

- If you saw some issue/bug 🐛 related to the specific release version.
- If you want some new feature or change to be added/implemented. 😊

Please, contact the creator of the **replace-styles**, so he will be able to fix or improve it:

**Kristiyan Velkov**

**Email:** christiyanweb@gmail.com

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/christiyan14)

## Support my work

If you like my work and want to support me to work hard, please donate via:

| <a href="https://revolut.me/kristiyanvelkov" title="Link to Revolut">Revolut</a>                                                                                                                                                      | <a href="https://www.buymeacoffee.com/kristiyanVelkov" title="Link to Buy me a coffee">Buy me a coffee</a>                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://revolut.me/kristiyanvelkov" target="_blank"><img src="https://github.com/christiyan14/replace-styles/blob/main/src/assets/images/kristiyan.velkov-revolut.png" width="200px"  alt="Krisityan Velkov - Revolut"/></a> | <a href="https://www.buymeacoffee.com/kristiyanVelkov" style="background:red,height='500px'"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kristiyanVelkov&button_colour=000000&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=FFDD00" width="200px"/></a> |

Thanks a bunch for supporting me! It means a LOT 😍

---

Copyright ©️2023. All rights reserved.
