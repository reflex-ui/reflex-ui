/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { ColorTheme } from '../../palette/ColorTheme';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { SimpleText } from './SimpleText';
import { OptionalTypographyProps, TypographyProps } from './TypographyProps';

// prettier-ignore
export const Headline1 = reflexComponent<OptionalTypographyProps>({
  name: 'Headline1',
})((props: OptionalTypographyProps) => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ComponentsThemeContext.Consumer>
        {(componentsTheme) => {
          const propsWithDefaults: TypographyProps = {
            colorTheme: ColorTheme.SURFACE_NORMAL,
            paletteTheme,
            theme: componentsTheme.typography.headline1,
            ...props,
          };

          return <SimpleText {...propsWithDefaults} />;
        }}
      </ComponentsThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
));
