import { Theme, ThemeContext } from '@reflex-ui/core';
import {
  createTheme,
  purpleTealPaletteTheme,
} from '@reflex-ui/material-design';
import * as React from 'react';
/*
const PurpleTealTheme: Theme = createStaticTheme({
  palette: purpleTealPaletteTheme,
});
*/
const PurpleTealTheme: Theme = createTheme({ palette: purpleTealPaletteTheme });

export type IWithAppLogic = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

export const withAppLogic: IWithAppLogic = WrappedComponent => props => (
  <ThemeContext.Provider value={PurpleTealTheme}>
    <WrappedComponent {...props} />
  </ThemeContext.Provider>
);
