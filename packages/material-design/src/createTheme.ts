import { PaletteTheme, Theme } from '@reflex-ui/core';
import { buttonTheme } from './buttons';
import { typographyTheme } from './typography';

export const createTheme = (palette: PaletteTheme): Theme => ({
  components: {
    button: buttonTheme,
    typography: typographyTheme,
  },
  palette,
});
