import { create } from '@storybook/theming/create';
import './preview.scss';

export default create({
  base: 'dark',
  brandTitle: 'TGUI-core',
  brandUrl: 'https://github.com/tgstation/tgui-core',

  appBg: 'hsl(0, 0%, 14%)',
  appContentBg: 'hsl(0, 0%, 14%)',
  appPreviewBg: 'hsl(0, 0%, 14%)',
});