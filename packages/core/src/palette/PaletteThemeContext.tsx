import * as React from 'react';
import { PaletteTheme } from './PaletteTheme';
import { purpleTealPaletteTheme } from './purpleTealPaletteTheme';

export const PaletteThemeContext = React.createContext<PaletteTheme>(
  purpleTealPaletteTheme,
);
