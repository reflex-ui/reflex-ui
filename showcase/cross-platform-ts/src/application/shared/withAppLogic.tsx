import {
  ComponentsTheme,
  ComponentsThemeContext,
  PaletteThemeContext,
} from '@reflex-ui/core';
import {
  // createComponentsTheme,
  createStaticComponentsTheme,
  purpleTealPaletteTheme,
} from '@reflex-ui/material-design';
import * as React from 'react';

const MaterialDesignTheme: ComponentsTheme = createStaticComponentsTheme();
// const MaterialDesignTheme: ComponentsTheme = createComponentsTheme();

export type IWithAppLogic = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

export const withAppLogic: IWithAppLogic = WrappedComponent => props => (
  <PaletteThemeContext.Provider value={purpleTealPaletteTheme}>
    <ComponentsThemeContext.Provider value={MaterialDesignTheme}>
      <WrappedComponent {...props} />
    </ComponentsThemeContext.Provider>
  </PaletteThemeContext.Provider>
);
