/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { InteractionType } from '../../interaction';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';

export const withDefaultTouchableSurfaceProps = (
  WrappedComponent: React.ComponentType<TouchableSurfaceProps>,
): React.ComponentType<TouchableSurfacePropsOptional> =>
  reflexComponent<TouchableSurfacePropsOptional>({
    name: 'WithDefaultTouchableSurfaceProps',
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
                    const propsWithDefaults: TouchableSurfaceProps = {
                      ...dimensionsProps,
                      colorTheme: colorTheme || ColorTheme.SurfaceNormal,
                      interactionState: {
                        type: InteractionType.Enabled,
                      },
                      paletteTheme,
                      theme: componentsTheme.touchableSurface,
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
