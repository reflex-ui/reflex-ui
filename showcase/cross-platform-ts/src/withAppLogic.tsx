/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ComponentsTheme,
  ComponentsThemeContext,
  defaultBreakpoints,
  DimensionsProvider,
  PaletteThemeContext,
} from '@reflex-ui/core';
import {
  blue500Yellow600PaletteTheme,
  // createAnimatedComponentsTheme,
  createComponentsTheme,
  // deepPurple500TealA700PaletteTheme,
} from '@reflex-ui/material-design';
import * as React from 'react';

const mdComponentsTheme: ComponentsTheme = createComponentsTheme();
// const mdComponentsTheme: ComponentsTheme = createAnimatedComponentsTheme();

const withAppLogic = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> => {
  const WithAppLogic: React.ComponentType<P> = (props: P): JSX.Element => (
    <DimensionsProvider breakpoints={defaultBreakpoints}>
      <PaletteThemeContext.Provider value={blue500Yellow600PaletteTheme}>
        <ComponentsThemeContext.Provider value={mdComponentsTheme}>
          <WrappedComponent {...props} />
        </ComponentsThemeContext.Provider>
      </PaletteThemeContext.Provider>
    </DimensionsProvider>
  );

  WithAppLogic.displayName = `WithAppLogic(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;
  return WithAppLogic;
};

export { withAppLogic };
