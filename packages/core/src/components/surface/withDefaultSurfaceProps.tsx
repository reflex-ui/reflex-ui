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
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { SurfaceProps, SurfacePropsOptional } from './SurfaceProps';

export const withDefaultSurfaceProps = (
  WrappedComponent: React.ComponentType<SurfaceProps>,
): React.ComponentType<SurfacePropsOptional> =>
  reflexComponent<SurfacePropsOptional>({
    name: 'WithDefaultSurfaceProps',
    wrapped: WrappedComponent,
  })(props => (
    <DimensionsContext.Consumer>
      {dimensionsProps => (
        <PaletteThemeContext.Consumer>
          {paletteTheme => (
            <ComponentsThemeContext.Consumer>
              {componentsTheme => {
                const colorTheme: ColorTheme =
                  props.colorTheme || ColorTheme.SurfaceNormal;

                const propsWithDefaults: SurfaceProps = {
                  ...dimensionsProps,
                  colorTheme,
                  paletteTheme,
                  theme: componentsTheme.surface,
                  ...props,
                };

                return (
                  <ColorThemeContext.Provider value={colorTheme}>
                    <WrappedComponent {...propsWithDefaults} />
                  </ColorThemeContext.Provider>
                );
              }}
            </ComponentsThemeContext.Consumer>
          )}
        </PaletteThemeContext.Consumer>
      )}
    </DimensionsContext.Consumer>
  ));
