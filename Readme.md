# Tailed-ui

![Build](https://img.shields.io/github/actions/workflow/status/alex289/tailed-ui/release.yml?style=flat-square)
![License](https://img.shields.io/github/license/alex289/tailed-ui?style=flat-square)

### Installation

Install the package with your favorite package manager:

```
npm install tailed-ui

yarn add tailed-ui

pnpm install tailed-ui
```

### Usage

#### Stylesheet

First, you'll need to import the `index.css` CSS file distributed by the package. This should be done at the root of your project (in `index.js` or `App.tsx` of your React app) and will look like:

```tsx
import 'tailed-ui/styles.css';
```

If you use Tailwindcss you can also add the tailed-ui to the contents of the tailwind configuration:

```tsx
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tailed-ui/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
```

#### Components

Usage of components (after the library installed as a dependency into another project) will look like:

```TSX
import { Button } from "tailed-ui";

const App = () => (
  <>
    <h1>Hello I'm consuming the component library</h1>
    <Button>Hello World!</Button>
  </>
);

export default App;
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc. I've hosted this library at: https://tailed-ui.vercel.app
