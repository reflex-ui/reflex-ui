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
  DimensionsHandler,
  PaletteProvider,
} from '@reflex-ui/core';
import {
  blue500Yellow600Palette,
  createAnimatedComponentsTheme,
  // createComponentsTheme,
  // deepPurple500TealA700Palette,
} from '@reflex-ui/core-md';
import * as React from 'react';

// const mdComponentsTheme: ComponentsTheme = createComponentsTheme();
const mdComponentsTheme: ComponentsTheme = createAnimatedComponentsTheme();

const withAppLogic = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> => {
  const WithAppLogic: React.ComponentType<P> = (props: P): JSX.Element => (
    <DimensionsHandler breakpoints={defaultBreakpoints}>
      <PaletteProvider value={blue500Yellow600Palette}>
        <ComponentsThemeContext.Provider value={mdComponentsTheme}>
          <WrappedComponent {...props} />
        </ComponentsThemeContext.Provider>
      </PaletteProvider>
    </DimensionsHandler>
  );

  WithAppLogic.displayName = `WithAppLogic(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;
  return WithAppLogic;
};

export { withAppLogic };
