/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { renderRfxTextComponent } from './renderRfxTextComponent';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';
import { useDefaultRfxTextProps } from './useDefaultRfxTextProps';

let Overline: React.ComponentType<RfxTextPropsOptional> = (
  props: RfxTextPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.text) {
      throw new MissingComponentThemeError('<Overline>');
    }
    theme = componentsTheme.text.overline;
  }

  const newProps: RfxTextProps = {
    ...useDefaultRfxTextProps(props),
    ...useOnLayout(props),
    theme,
  };

  return renderRfxTextComponent(newProps);
};

Overline = processComponent<RfxTextPropsOptional>(Overline, {
  name: 'Overline',
});

export { Overline };
