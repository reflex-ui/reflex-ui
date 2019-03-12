/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

// tslint:disable-next-line
import { MissingComponentThemeError } from '../../errors/MissingComponentThemeError';
// tslint:disable-next-line
import { InteractionStateContext } from '../../interaction/InteractionStateContext';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { RfxText } from './RfxText';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';

export const Paragraph1 = reflexComponent<RfxTextPropsOptional>({
  name: 'Paragraph1',
})((props: RfxTextPropsOptional) => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ColorThemeContext.Consumer>
        {colorTheme => (
          <ComponentsThemeContext.Consumer>
            {componentsTheme => (
              <InteractionStateContext.Consumer>
                {interactionState => {
                  let theme = props.theme;
                  if (!theme) {
                    if (!componentsTheme.text) {
                      throw new MissingComponentThemeError('<Paragraph1>');
                    }
                    theme = componentsTheme.text.paragraph1;
                  }

                  const propsWithDefaults: RfxTextProps = {
                    colorTheme:
                      props.colorTheme ||
                      colorTheme ||
                      ColorTheme.SurfaceNormal,
                    interactionState,
                    paletteTheme,
                    theme,
                    ...props,
                  };

                  return <RfxText {...propsWithDefaults} />;
                }}
              </InteractionStateContext.Consumer>
            )}
          </ComponentsThemeContext.Consumer>
        )}
      </ColorThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
));
