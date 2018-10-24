import { PaletteTheme, Theme } from '@reflex-ui/core';
import { buttonTheme } from './buttons';
import { iconTheme } from './icons';
import { typographyTheme } from './typography';

export const createTheme = (palette: PaletteTheme): Theme => ({
  components: {
    button: buttonTheme,
    icon: iconTheme,
    typography: typographyTheme,
  },
  palette,
});
