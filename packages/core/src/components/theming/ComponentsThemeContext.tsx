import * as React from 'react';
import { ComponentsTheme } from './ComponentsTheme';
import { rawComponentsTheme } from './rawComponentsTheme';

export const ComponentsThemeContext = React.createContext<ComponentsTheme>(
  rawComponentsTheme,
);
