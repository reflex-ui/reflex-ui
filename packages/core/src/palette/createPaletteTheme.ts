import merge from 'lodash/merge';

import { OptionalPaletteTheme, PaletteTheme } from './PaletteTheme';
import { purpleTealPaletteTheme } from './purpleTealPaletteTheme';

export const createPaletteTheme = (theme: OptionalPaletteTheme): PaletteTheme =>
  merge({}, purpleTealPaletteTheme, theme);
