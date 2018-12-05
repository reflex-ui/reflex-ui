/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ComponentsTheme,
  ComponentsThemeContext,
  PaletteThemeContext,
} from '@reflex-ui/core';
import {
  createAnimatedComponentsTheme,
  // createComponentsTheme,
  purpleTealPaletteTheme,
} from '@reflex-ui/material-design';
import * as React from 'react';

// const mdComponentsTheme: ComponentsTheme = createComponentsTheme();
const mdComponentsTheme: ComponentsTheme = createAnimatedComponentsTheme();

const withAppLogic = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> => {
  const WithAppLogic: React.ComponentType<P> = (props: P): JSX.Element => (
    <PaletteThemeContext.Provider value={purpleTealPaletteTheme}>
      <ComponentsThemeContext.Provider value={mdComponentsTheme}>
        <WrappedComponent {...props} />
      </ComponentsThemeContext.Provider>
    </PaletteThemeContext.Provider>
  );

  WithAppLogic.displayName = `WithAppLogic(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;
  return WithAppLogic;
};

export { withAppLogic };
