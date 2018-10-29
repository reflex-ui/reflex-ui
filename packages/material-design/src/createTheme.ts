import {
  createTheme as createThemeCore,
  OptionalTheme,
  Theme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { buttonTheme } from './buttons/buttonTheme';
import { iconTheme } from './icons/iconTheme';
import { purpleTealPaletteTheme } from './palette/purpleTealPaletteTheme';
import { typographyTheme } from './typography/typographyTheme';

const materialDesignTheme: OptionalTheme = {
  components: {
    button: buttonTheme,
    icon: iconTheme,
    typography: typographyTheme,
  },
  palette: purpleTealPaletteTheme,
};

export const createTheme = (theme: OptionalTheme): Theme =>
  createThemeCore(merge(materialDesignTheme, theme));
