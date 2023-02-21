# Playground

![playground-logo](/img/media.svg)

`Playground` is a rehype plugin and React component that allows you to create rich and interactive code examples for your documentation or web application.

## Motivation

`Playground` was created to make it easier for developers to create and share interactive code examples in their documentation or web application. Traditional code snippets can be difficult to read and understand, especially for beginners, and often lack the context needed to fully comprehend the code.

`Playground` solves this problem by providing an interactive environment for code examples that allows users to edit, run, and explore the code in real-time. Users can experiment with different inputs and outputs, see the results of their changes, and even copy the code to use in their own projects.

`Playground` also provides error handling and device-specific formatting options, making it a versatile and reliable tool for developers of all skill levels.

By using `Playground`, developers can create more engaging and interactive documentation and web applications, which can improve the learning experience for their users and ultimately lead to better adoption and retention of their products and services.

## Features

The `Playground` component provides the following features:

- Rule: Separates the example code from the rendered output.
- Show code: Allows the user to toggle the visibility of the example code.
- Copy code: Allows the user to copy the example code to their clipboard.
- Mobile, tablet, and desktop options: Provides options for displaying the example code and output in different formats depending on the device size.
- Error handling: Provides error handling for the example code and displays any errors that occur during code execution.

## Installation

To use `Playground`, you first need to install it as a dependency in your project:

```bash
npm install rehype-playground
```

## Usage

### Next.js

To use `Playground` with Next.js, you'll need to add a `next.config.mjs` file to the root of your project with the following content:

```js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [require("@playground/rehype")],
  },
});

module.exports = withMDX();
```

This will configure Next.js to use Playground with MDX files in your project.

### Remix

To use `Playground` with Remix, you'll need to add a `mix.config.js` file to the root of your project with the following content:

```js
const mixMDX = require("@remix-run/mdx");
const rehypePlugins = [require("@playground/rehype")];

module.exports = mixMDX.default({
  rehypePlugins,
});
```

This will configure Remix to use `Playground` with MDX files in your project.

### Astro

To use Playground with Astro, you'll need to add a `astro.config.mjs` file to the root of your project with the following content:

```js
import { createPlugin } from "astro";
import rehype from "rehype";
import rehypePrism from "@mapbox/rehype-prism";
import playground from "@playground/rehype";

export default {
  plugins: [
    createPlugin({
      name: "rehype",
      plugins: [playground, [rehypePrism, { ignoreMissing: true }], rehype()],
    }),
  ],
};
```

This will configure Astro to use `Playground` with MDX files in your project.

### Gatsby

To use `Playground` with Gatsby, you'll need to add a `gatsby-config.js` file to the root of your project with the following content:

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-vscode",
            options: {
              theme: "Dark+ (default dark)",
              extensions: ["theme-darcula"],
              inlineCode: {
                marker: ">",
              },
            },
          },
        ],
        remarkPlugins: [require("remark-slug")],
        rehypePlugins: [require("@playground/rehype")],
      },
    },
  ],
};
```

This will configure Gatsby to use `Playground` with MDX files in your project.

### Using in MDX files

```mdx
import Playground from 'rehype-playground';

import Button '...'

# Button

The `Button` component is a simple button that can be used in your application.

<Playground>
  <Button>Click me</Button>
</Playground>
```

![playground](/img/dark.png)

## Compatibility

`Playground` is designed to work with MDX files and can be used in many React frameworks, including Next, Remix, Astro, and Gatsby. However, please note that `Playground` only works with ESM modules, and you may need to use the .mjs file extension in some configurations.

License
`Playground` is released under the MIT License. See LICENSE for more information.
