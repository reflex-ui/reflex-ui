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
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { SimpleText } from './SimpleText';
import { OptionalTypographyProps, TypographyProps } from './TypographyProps';

// prettier-ignore
export const AppBarTitle = reflexComponent<OptionalTypographyProps>({
  name: 'AppBarTitle',
})((props: OptionalTypographyProps) => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ColorThemeContext.Consumer>
        {colorTheme => (
          <ComponentsThemeContext.Consumer>
            {(componentsTheme) => {
              const propsWithDefaults: TypographyProps = {
                colorTheme: props.colorTheme || colorTheme ||
                  ColorTheme.SURFACE_NORMAL,
                paletteTheme,
                theme: componentsTheme.typography.appBarTitle,
                ...props,
              };

              return <SimpleText {...propsWithDefaults} />;
            }}
          </ComponentsThemeContext.Consumer>
        )}
      </ColorThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
));
