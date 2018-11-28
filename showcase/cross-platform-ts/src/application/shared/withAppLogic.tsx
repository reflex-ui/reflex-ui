import {
  ComponentsTheme,
  ComponentsThemeContext,
  PaletteThemeContext,
} from '@reflex-ui/core';
import {
  // createAnimatedComponentsTheme,
  createComponentsTheme,
  purpleTealPaletteTheme,
} from '@reflex-ui/material-design';
import * as React from 'react';

const MaterialDesignTheme: ComponentsTheme = createComponentsTheme();
// const MaterialDesignTheme: ComponentsTheme = createAnimatedComponentsTheme();

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
