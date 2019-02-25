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
// tslint:disable-next-line:max-line-length
import { withResponsivenessProps } from '../../responsiveness/withResponsivenessProps';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { SimpleSuperView } from './SimpleSuperView';
import { SuperViewProps, SuperViewPropsOptional } from './SuperViewProps';

export const Column = withResponsivenessProps(
  reflexComponent<SuperViewPropsOptional>({
    name: 'Column',
  })((props: SuperViewPropsOptional) => (
    <DimensionsContext.Consumer>
      {dimensionsProps => (
        <ColorThemeContext.Consumer>
          {ctxColorTheme => (
            <PaletteThemeContext.Consumer>
              {paletteTheme => (
                <ComponentsThemeContext.Consumer>
                  {componentsTheme => {
                    const colorTheme: ColorTheme =
                      props.colorTheme ||
                      ctxColorTheme ||
                      ColorTheme.SurfaceNormal;

                    const propsWithDefaults: SuperViewProps = {
                      ...dimensionsProps,
                      colorTheme,
                      paletteTheme,
                      theme: componentsTheme.views.column,
                      ...props,
                    };

                    return (
                      <ColorThemeContext.Provider value={colorTheme}>
                        <SimpleSuperView {...propsWithDefaults} />
                      </ColorThemeContext.Provider>
                    );
                  }}
                </ComponentsThemeContext.Consumer>
              )}
            </PaletteThemeContext.Consumer>
          )}
        </ColorThemeContext.Consumer>
      )}
    </DimensionsContext.Consumer>
  )),
);
