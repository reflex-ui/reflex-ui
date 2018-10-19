import * as React from 'react';
import { rawTheme } from './rawTheme';
import { Theme } from './Theme';

export const ThemeContext = React.createContext<Theme>(rawTheme);
