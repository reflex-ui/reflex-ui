import * as React from 'react';
import { ComponentsTheme } from './ComponentsTheme';
import { rawComponentsTheme } from './raw/rawComponentsTheme';

export const ComponentsThemeContext = React.createContext<ComponentsTheme>(
  rawComponentsTheme,
);
