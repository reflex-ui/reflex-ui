/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

// tslint:disable-next-line:max-line-length
import { MissingComponentThemeError } from '../../errors/MissingComponentThemeError';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';

export const withDefaultRfxSvgProps = (
  WrappedComponent: React.ComponentType<RfxSvgProps>,
): React.ComponentType<RfxSvgPropsOptional> =>
  reflexComponent<RfxSvgPropsOptional>({
    name: 'WithDefaultRfxSvgProps',
    wrapped: WrappedComponent,
  })(props => (
    <PaletteThemeContext.Consumer>
      {paletteTheme => (
        <ColorThemeContext.Consumer>
          {colorTheme => (
            <ComponentsThemeContext.Consumer>
              {componentsTheme => {
                let theme = props.theme;
                if (!theme) {
                  if (!componentsTheme.svg) {
                    throw new MissingComponentThemeError('<RfxSvg>');
                  }
                  theme = componentsTheme.svg.rfxSvg;
                }

                const propsWithDefaults: RfxSvgProps = {
                  colorTheme: colorTheme || ColorTheme.SecondaryNormal,
                  paletteTheme,
                  size: Size.M,
                  theme,
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
