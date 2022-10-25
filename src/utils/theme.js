import { createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'light',
  theme: {
    shadows: {
      custom: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    },
  },
});

export default theme;
