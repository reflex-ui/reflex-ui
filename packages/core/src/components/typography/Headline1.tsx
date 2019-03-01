/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

// tslint:disable-next-line
import { InteractionStateContext } from '../../interaction/InteractionStateContext';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { SimpleText } from './SimpleText';
import { TypographyProps, TypographyPropsOptional } from './TypographyProps';

export const Headline1 = reflexComponent<TypographyPropsOptional>({
  name: 'Headline1',
})((props: TypographyPropsOptional) => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ColorThemeContext.Consumer>
        {colorTheme => (
          <ComponentsThemeContext.Consumer>
            {componentsTheme => (
              <InteractionStateContext.Consumer>
                {interactionState => {
                  const propsWithDefaults: TypographyProps = {
                    colorTheme:
                      props.colorTheme ||
                      colorTheme ||
                      ColorTheme.SurfaceNormal,
                    interactionState,
                    paletteTheme,
                    theme: componentsTheme.typography.headline1,
                    ...props,
                  };

                  return <SimpleText {...propsWithDefaults} />;
                }}
              </InteractionStateContext.Consumer>
            )}
          </ComponentsThemeContext.Consumer>
        )}
      </ColorThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
));
