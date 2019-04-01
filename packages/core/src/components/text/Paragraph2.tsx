/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { renderRfxTextComponent } from './renderRfxTextComponent';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';
import { useDefaultRfxTextProps } from './useDefaultRfxTextProps';

let Paragraph2: React.ComponentType<RfxTextPropsOptional> = (
  props: RfxTextPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.text) {
      throw new MissingComponentThemeError('<Paragraph2>');
    }
    theme = componentsTheme.text.paragraph2;
  }

  const newProps: RfxTextProps = {
    ...useDefaultRfxTextProps(props),
    theme,
  };

  return renderRfxTextComponent(newProps);
};

Paragraph2 = processComponent<RfxTextPropsOptional>(Paragraph2, {
  name: 'Paragraph2',
});

export { Paragraph2 };
