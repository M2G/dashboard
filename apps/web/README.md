# Canal+ React & Vite starter

## React & Vite starter

There it is ! A little starter for your [React App](https://github.com/facebook/create-react-app) bootstrapped with Create React App and generated for [ViteJS](https://vitejs.dev/) bundler and so much more…

## Folder hierarchy

```markdown
.
├── .storybook # storybook config
├── index.html # main html
├── jsconfig.json # js config complement to ts
├── package.json # project config
├── pnpm-lock.yaml # package-lock for pnpm
├── postcss.config.cjs # tailwind postcss
├── prettier.config.cjs # prettier config complement
├── public # static folder
├── src # main folder
│ ├── @types # ts global types
│ ├── assets # integrated medias ressources (svg, icons...)
│ ├── components # stateless components
│ │ ├── atoms # buttons, icons...
│ │ ├── layouts # box, container(html)
│ │ ├── molecules # lists, field...
│ │ └── organisms # sections, headers...
│ ├── containers # stateful components
│ ├── contexts # context api
│ ├── hooks # custom hooks
│ ├── i18n # internationalization
│ │ ├── config.ts
│ │ └── locales
│ │ ├── en
│ │ └── fr
│ ├── main.tsx # main entry for the react app
│ ├── routes # pages
│ │ ├── error-page.tsx
│ │ └── root.tsx
│ ├── stories # storybook documentation
│ │ ├── Introduction.mdx
│ │ └── components.stories.tsx
│ ├── styles # tailwind init & css reset for all browsers
│ │ └── index.css
│ └── vite-env.d.ts # vite types
├── tailwind.config.cjs # tailwind config
├── tsconfig.json # ts config
├── tsconfig.node.json
└── vite.config.ts # vite config
```

## **Available Scripts**

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

The page will reload when you make changes.You may also see any lint errors in the console.

### `pnpm build`

Launches the test runner in the interactive watch mode.See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm preview`

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `pnpm storybook`

Starts the development server so you can view all the developed components in the Storybook UI.

### `pnpm build:storybook`

Generates a static version of your Storybook documentation, which you can deploy to a web server or use in other documentation tools.

It allows you to create a standalone version of your component library, which can be useful for sharing your work with other developers or integrating it into other projects.

## Introduction

This starter was made to provide a fast and productive development environment for building modern web applications with a great user interface. Vite can handle the bundling and optimization of the React application, while React provides a solid foundation for building reusable components and managing the application state.

## Basics

### [ViteJS](https://vitejs.dev/)

Vite is a build tool and dev server that aims to provide fast and efficient development experience for modern web projects. It supports various front-end frameworks including ReactJS, Vue.js, and Angular.

### [ReactJS](https://beta.reactjs.org/)

ReactJS, is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the application state using a unidirectional data flow.

## Concepts

### Design systems

Design systems can be used to facilitate collaboration between designers and developers, ensure a cohesive and consistent user experience across different products and platforms, and streamline the design and development process by providing reusable and well-documented UI components.

A design system, on the other hand, is a set of guidelines and standards that ensure consistency and coherence across a product or organization. It includes not only the visual design but also the underlying patterns, components, and interactions that make up a product's user experience. A design system can be created using the atomic design methodology or other approaches, and it provides a centralized and scalable approach to design and development.

**[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)**

Atomic design is a methodology for designing and building user interfaces in a systematic and structured way. It was created by Brad Frost and it breaks down a design system into five distinct levels of abstraction. Each level builds on the previous one, creating a hierarchical system of reusable components that can be combined to create more complex and comprehensive UI designs.

Atoms are the smallest and most basic building blocks of the UI, such as buttons, inputs, or icons. Molecules are made up of two or more atoms combined together, like a search bar or a form field. Organisms are collections of molecules and/or atoms that form a more complex and recognizable UI element, like a header or a footer. Templates define the overall structure and layout of a page, while pages represent the final implementation of a design, using all of the previous levels.

In our case, with ReactJS, we will use Atoms, Molecules, Organisms and a particular category such as Layouts that will handle how each components should position with each others.

### Context API

Just like redux, Context API is a feature in React that allows for global state management without the need for prop drilling. It enables components to share data and functions without having to pass them down through every level of the component tree.

Context API is a native concept since React v16, it works by creating a context object that contains the data and functions that you want to share across your application. This context object is then passed down to any components that need access to it through a special component called a Provider.

First, we provided an example of a MainContext in the folder contexts of the starter. Then to use it, encapsulate the application by the Provider (like in main.js), and finally, Consume the data with a hook useContext() provided by React.

## Stack

### [Storybook](https://storybook.js.org/)

Storybook is a tool for UI development and documentation.

It’s a powerful tool for building UI component documentation, where you can visually see and interact with your components in isolation. It allows you to showcase the different states and variations of your components, and to see how they behave under different conditions.

You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

The storybook is independent of any stack, you can use it with React/Vue/Svelte or even Stencil components. It's not mandatory in any project but it can be a good starter to use while the backend is still under construction.

Today you can even make unit tests directly in the storybook, but the example will be made in another update of this starter.

### [TailwindCSS](https://tailwindcss.com/docs/utility-first)

Tailwind is a popular utility-first CSS framework that provides a set of pre-defined CSS classes that can be used to style and layout HTML elements.

Overall, it can be a powerful tool for backend developers who want to create well-styled and responsive UIs without having to spend a lot of time on CSS. Its pre-defined classes and flexible nature can help to speed up development and ensure consistency in the styling of UI elements throughout a project.

### [i18next](https://www.i18next.com/overview/getting-started)

[https://www.i18next.com/principles/namespaces](https://www.i18next.com/principles/namespaces)

### [React router](https://reactrouter.com/en/main/start/overview)

In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with `fetch` to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

## Utilities

### [PNPM](https://pnpm.io/)

To install pnpm, you just have to use NPM with: `npm install -g pnpm` to install it globally.

PNPM is a package manager for JavaScript projects that is gaining popularity in the development community. Here are some reasons why developers might choose to use PNPM instead of NPM or Yarn:

1. Faster installation and updates: PNPM uses a shared package store, which means that it can avoid duplicating packages and can install and update dependencies faster than NPM or Yarn.
2. Smaller package size: Because PNPM uses a shared package store, it can reduce the overall size of the node_modules folder by avoiding duplicate packages. This can be especially helpful for projects with a large number of dependencies.
3. Better security: PNPM includes built-in security features that can help to prevent malicious packages from being installed in a project. This can help to ensure the integrity and security of the project.
4. Compatibility: PNPM is fully compatible with NPM and Yarn, so developers can switch to PNPM without having to make significant changes to their existing projects.

Overall, PNPM can be a powerful tool for developers who want to speed up their development workflow, reduce package sizes, and improve the security of their projects. Its compatibility with NPM and Yarn also makes it an easy choice for developers who want to switch to a new package manager without disrupting their existing projects.

### [NVM](https://github.com/nvm-sh/nvm)

`nvm` allows you to quickly install and switch to different versions of node via the command line. The current version of NodeJS used for this project is v16.9.1

### [ESLint](https://eslint.org/docs/latest/use/getting-started)

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.

### [Prettier](https://prettier.io/docs/en/index.html)

Prettier enforces a consistent code style (i.e. code formatting that won’t affect the AST) across your entire codebase because it disregards the original styling\* by parsing it away and re-printing the parsed AST with its own rules that take the maximum line length into account, wrapping code when necessary.

### [SVGr](https://react-svgr.com/docs/getting-started)

SVGR is an universal tool to transform SVG into React components, it takes a raw SVG and transforms it into a ready-to-use React component.

Some features of SVGr:

- Optimizing using SVGO
- Wrapping JSX into a React Component
- Converting Babel AST into code
- Formatting code using Prettier

This complex pipeline makes SVGR a reliable, safe and extendable tool.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Incoming updates and improvements

- [ ] Add unit tests in components (maybe with storybook)
- [ ] Step up the i18next part.
- [ ] Document React SWC.
