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
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { ListProps, ListPropsOptional } from './ListProps';

export const withDefaultListProps = (
  WrappedComponent: React.ComponentType<ListProps>,
): React.ComponentType<ListPropsOptional> =>
  reflexComponent<ListPropsOptional>({
    name: 'WithDefaultListProps',
    wrapped: WrappedComponent,
  })(props => (
    <DimensionsContext.Consumer>
      {dimensionsProps => (
        <PaletteThemeContext.Consumer>
          {paletteTheme => (
            <ComponentsThemeContext.Consumer>
              {componentsTheme => {
                let theme = props.theme;
                if (!theme) {
                  if (!componentsTheme.list) {
                    throw new MissingComponentThemeError('<List>');
                  }
                  theme = componentsTheme.list;
                }

                const colorTheme: ColorTheme =
                  props.colorTheme || ColorTheme.SurfaceNormal;

                const propsWithDefaults: ListProps = {
                  ...dimensionsProps,
                  colorTheme,
                  contained: true,
                  paletteTheme,
                  theme,
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
