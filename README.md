# tgui-core

A collection of utilities and components for the [tgui](https://github.com/tgstation/tgstation) framework.

This package was built to help the various downstream SS13 servers stay up to date with TGUI without having to keep a local version of each file.

You can view the code on [GitHub](https://github.com/tgstation/tgui-core).

## Installation

(assuming you have a tgui folder, navigate to the specific package)

```sh
cd tgui/packages/tgui
yarn add tgui-core
```

## Usage

Now, you can use them like normal TGUI components.

```tsx
import { Button } from 'tgui-core/components';

<Button>Click</Button>;
```

You can even use it in tandem with your own in house TGUI components,

```tsx
import { Button } from 'tgui-core/components';
import { Box } from '../components';
```

## License

MIT

## Contributing

Contributions are welcome. Please open an issue or a pull request. I am available on the tgstation [discord](https://discord.com/invite/EUvpBtU78X).

### Development

This project uses [pnpm](https://pnpm.io/installation) for its package manager.

To set up the repository:
`pnpm install`
