import {
  createPaletteTheme as createPaletteThemeCore,
  OptionalPaletteTheme,
  PaletteTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { purpleTealPaletteTheme } from './purpleTealPaletteTheme';

export const createPaletteTheme = (theme: OptionalPaletteTheme): PaletteTheme =>
  createPaletteThemeCore(merge(purpleTealPaletteTheme, theme));
