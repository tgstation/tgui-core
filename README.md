# tgui-core

A collection of utilities and components for the [tgui](https://github.com/tgstation/tgstation) framework.

This package was built to help the various downstream SS13 servers stay up to date with TGUI without having to keep a local version of each file.

You can view the code on [GitHub](https://github.com/tgstation/tgui-core).

## Installation

(assuming you have a tgui folder, navigate to the specific package)

```sh
cd tgui/packages/{package name}
yarn add tgui-core
```

## Using the components

Now, you can use them like normal TGUI components.

```tsx
import { Button } from "tgui-core/components";

<Button>Click</Button>;
```

You can even use it in tandem with your own in house TGUI components,

```tsx
import { Button } from "tgui-core/components";
import { Box } from "../components";
```

## Using the styles

You have two options for importing styles:

### 1. Importing All Styles

To import all styles at once, add the following line to your main Sass file:

```scss
@use "~tgui-core/styles";
```

### 2. Importing Individual Styles

To import individual styles, add any of the exported styles to your main Sass file:

```scss
@use "~tgui-core/styles/components/Button";
@use "~tgui-core/styles/components/Dialog";
@use "~tgui-core/styles/components/NoticeBox";
```

## License

MIT

## Contributing

Contributions are welcome. Please open an issue or a pull request. I am available on the tgstation [discord](https://discord.com/invite/EUvpBtU78X).

### Releasing a new version

To automagically release a new version of the tgui-core package, simply create a [new release](https://github.com/tgstation/tgui-core/releases/new) with the tag set to the new version you want to publish. Set the tag to be the commit you want to base the version off of (likely the latest, being the default).

The release workflow will take care of setting the `package.json` version, building, generating a release changelog, and publishing to npm.

### Development

This project uses [pnpm](https://pnpm.io/installation) for its package manager.

To set up the repository:
`pnpm install`
