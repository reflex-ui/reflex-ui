/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { FlexSvgProps, OptionalFlexSvgProps } from './FlexSvgProps';

export const withDefaultSvgIconProps = (
  WrappedComponent: React.ComponentType<FlexSvgProps>,
): React.ComponentType<OptionalFlexSvgProps> =>
  reflexComponent<OptionalFlexSvgProps>({
    name: 'WithDefaultSvgIconProps',
    wrapped: WrappedComponent,
  })(props => (
    <PaletteThemeContext.Consumer>
      {paletteTheme => (
        <ColorThemeContext.Consumer>
          {colorTheme => (
            <ComponentsThemeContext.Consumer>
              {componentsTheme => {
                const propsWithDefaults: FlexSvgProps = {
                  colorTheme: colorTheme || ColorTheme.SecondaryNormal,
                  paletteTheme,
                  size: Size.M,
                  theme: componentsTheme.svg.svgIcon,
                  ...props,
                };

                return <WrappedComponent {...propsWithDefaults} />;
              }}
            </ComponentsThemeContext.Consumer>
          )}
        </ColorThemeContext.Consumer>
      )}
    </PaletteThemeContext.Consumer>
  ));
