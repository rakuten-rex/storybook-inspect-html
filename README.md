# ReX React UI Component: storybook-inspect-html

This project is part of ReX Design System and it can be used to create UI Components compatible with:

React, HTML/CSS and Vue.js  

# How to install

<img src="project-scripts/webpack/markdown/logos/npm.svg" height="16" />

```
npm install @rakuten-rex/storybook-inspect-html@1.2.1 --save
```

<img src="project-scripts/webpack/markdown/logos/yarn.svg" height="16" />

```
yarn add @rakuten-rex/storybook-inspect-html@1.2.1
```

# Getting started

## Storybook Live examples

For a complete guide of properties for React and HTML classes please visit our Storybook page:  

[<img src="project-scripts/webpack/markdown/logos/storybook.svg" height="16" />](https://rakuten-rex.github.io/storybook-inspect-html/)   

https://rakuten-rex.github.io/storybook-inspect-html/   


**Storybook features**
- [x] Stories by component types
- [x] HTML raw output
- [x] JSX output
- [x] Stories source code
- [x] Knobs with multiple options



### Storybook integration

#### Register

Add this line at the end of the content of `.storybook/addons.js`.   

```js
import '@rakuten-rex/storybook-inspect-html/register';
```

#### Story

Import the addon in the story file you want to use.   
Add it as the first decorator due to the addon requires a clean input to render the HTML, the output is clean as well.

Example: 

Using `MyComponent.stories.jsx`:

```js
import { withInspectHtml } from '@rakuten-rex/storybook-inspect-html';

const stories = storiesOf('MyComponent', module);
stories.addDecorator(withInspectHtml); // <-- First decorator
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);
...
```

## Documentation, source code and distribution

|| Site  | URL |
|-------------| ------------- | ------------- |
|<img src="project-scripts/webpack/markdown/logos/github-icon.svg" height="16" />| Github (Source Code) | https://github.com/rakuten-rex |
|<img src="project-scripts/webpack/markdown/logos/npm.svg" height="16" />| NPM (Package distribution)  | https://www.npmjs.com/org/rakuten-rex  |
|<img src="project-scripts/webpack/markdown/logos/zh_logo.svg" height="16" />| ZeroHeight (Documentation)  | https://zeroheight.com/390c074f3 |

## Project Stack

| Front-end | Tools |
|-------------|-------------|
| <img src="project-scripts/webpack/markdown/logos/html-5.svg" height="16" /> HTML5 <img src="project-scripts/webpack/markdown/logos/css-3.svg" height="16" /> CSS3 & Sass  <img src="project-scripts/webpack/markdown/logos/javascript.svg" height="16" /> JavaScript ES6 <img src="project-scripts/webpack/markdown/logos/react.svg" height="16" /> React | <img src="project-scripts/webpack/markdown/logos/webpack.svg" height="16" /> webpack <img src="project-scripts/webpack/markdown/logos/storybook-icon.svg" height="16" /> Storybook <img src="project-scripts/webpack/markdown/logos/babel.svg" height="16" /> Babel <img src="project-scripts/webpack/markdown/logos/eslint.svg" height="16" /> ESLint <img src="project-scripts/webpack/markdown/logos/prettier.svg" height="16" /> Prettier |

## Features

| Styles features |  JavaScript features |
|-------------|-------------|
| Theme support via CSS variables |  React components splitted by type |
| Static CSS styles available for HTML/VueJS/AngularJS | Universal Module Definition support |
| Sass mixins for custom builds |
| Reset CSS styles already bundled by HTML tags |
| Removed duplicated CSS props |
| CSS classes prefix `rex-` |

## Browser Support

| PC | Mobile 
|-------------|-------------|
| <img src="project-scripts/webpack/markdown/browsers/chrome.svg" height="14" /> Chrome 49+ | <img src="project-scripts/webpack/markdown/browsers/apple.svg" height="14" /> iOS 9+ (Safari 9.3+, Chrome 78+) |
| <img src="project-scripts/webpack/markdown/browsers/safari.svg" height="14" /> Safari 9.1+ | <img src="project-scripts/webpack/markdown/browsers/android-icon.svg" height="14" /> Android 6+ (Chrome 78+, Android Browser 76+) |
| <img src="project-scripts/webpack/markdown/browsers/firefox.svg" height="14" /> Firefox 31+ | |
| <img src="project-scripts/webpack/markdown/browsers/microsoft-edge.svg" height="14" /> MS Edge 15+ | |
| <img src="project-scripts/webpack/markdown/browsers/internetexplorer.svg" height="14" /> IE 11+ | |



# Development environment
## How to initialize the project for a new repository

```
npm run setup
```

## How to add a new ReX Component to the project

```
npm run generate:rex-component
```

## How to start the project

The development environment is based on Storybook, for more info visit https://storybook.js.org/ .   

```
npm start
```

## How to build

The build task will generate a NPM package ready to be published and also a static version of Storybook, one folder for NPM `./npm/@rakuten-rex/storybook-inspect-html` and other one for Github pages `./docs`.   

```
npm run build
```

## How to check build version

By using Node http-server, you can check the static version of Storybook with production settings and builds.

```
npm run serve
```

## How to publish to NPM
### Build the project

```
npm run build
```

### Publish to NPM

Build the project first and then publish it to NPM.  

```
npm run publish:component
```

Once the process finish, take a look to the NPM site:   

https://www.npmjs.com/package/@rakuten-rex/storybook-inspect-html


# Javascript and React related documents

Take a look to this nice documentation pages to be more familiar with React and modern Javascript:

## Official site
https://reactjs.org/docs/getting-started.html   

## Google Web Fundamentals (the whole site is a must to read)
https://developers.google.com/web/fundamentals/

## Webpack as magic bundler
https://webpack.js.org/

## Composing Software series (how to understand Funcional Programming)
https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea   

## Common React patterns
https://reactpatterns.com   

## Understanding Storybook with nice images
https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07   

## Some guidelines for clean code
https://americanexpress.io/clean-code-dirty-code/
