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
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { ListItemProps, ListItemPropsOptional } from './ListItemProps';

export const withDefaultListItemProps = (
  WrappedComponent: React.ComponentType<ListItemProps>,
): React.ComponentType<ListItemPropsOptional> =>
  reflexComponent<ListItemPropsOptional>({
    name: 'WithDefaultListItemProps',
    wrapped: WrappedComponent,
  })(props => (
    <DimensionsContext.Consumer>
      {dimensionsProps => (
        <PaletteThemeContext.Consumer>
          {paletteTheme => (
            <ColorThemeContext.Consumer>
              {colorTheme => (
                <ComponentsThemeContext.Consumer>
                  {componentsTheme => {
                    const propsWithDefaults: ListItemProps = {
                      ...dimensionsProps,
                      colorTheme:
                        props.colorTheme ||
                        colorTheme ||
                        ColorTheme.SurfaceNormal,
                      paletteTheme,
                      size: Size.M,
                      theme: componentsTheme.listItem,
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
            </ColorThemeContext.Consumer>
          )}
        </PaletteThemeContext.Consumer>
      )}
    </DimensionsContext.Consumer>
  ));
