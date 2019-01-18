/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { ColorTheme, PaletteThemeContext } from '../../palette';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { OptionalSuperIconProps, SuperIconProps } from './SuperIconProps';

// prettier-ignore
export const withDefaultSuperIconProps = (
  WrappedComponent: React.ComponentType<SuperIconProps>,
): React.ComponentType<OptionalSuperIconProps> => reflexComponent<
OptionalSuperIconProps
>({ name: 'WithDefaultSuperIconProps', wrapped: WrappedComponent })(props => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ComponentsThemeContext.Consumer>
        {(componentsTheme) => {
          const propsWithDefaults: SuperIconProps = {
            colorTheme: ColorTheme.SECONDARY_NORMAL,
            paletteTheme,
            size: Size.M,
            theme: componentsTheme.icon,
            ...props,
          };

          return <WrappedComponent {...propsWithDefaults} />;
        }}
      </ComponentsThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
));
