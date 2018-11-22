import {
  ComponentsTheme,
  ComponentsThemeContext,
  PaletteTheme,
  PaletteThemeContext,
} from '@reflex-ui/core';
import {
  // createComponentsTheme,
  createPaletteTheme,
  createStaticComponentsTheme,
  purpleTealPaletteTheme,
} from '@reflex-ui/material-design';
import * as React from 'react';

const MaterialDesignTheme: ComponentsTheme = createStaticComponentsTheme();
// const MaterialDesignTheme: ComponentsTheme = createComponentsTheme();
const PurpleTealPaletteTheme: PaletteTheme = createPaletteTheme(
  purpleTealPaletteTheme,
);

export type IWithAppLogic = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

export const withAppLogic: IWithAppLogic = WrappedComponent => props => (
  <PaletteThemeContext.Provider value={PurpleTealPaletteTheme}>
    <ComponentsThemeContext.Provider value={MaterialDesignTheme}>
      <WrappedComponent {...props} />
    </ComponentsThemeContext.Provider>
  </PaletteThemeContext.Provider>
);
