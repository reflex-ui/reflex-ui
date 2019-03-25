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
import { renderRfxText } from './RfxText';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';
import { useDefaultRfxTextProps } from './useDefaultRfxTextProps';

let AppBarTitle: React.ComponentType<RfxTextPropsOptional> = (
  props: RfxTextPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.text) {
      throw new MissingComponentThemeError('<AppBarTitle>');
    }
    theme = componentsTheme.text.appBarTitle;
  }

  const newProps: RfxTextProps = {
    ...useDefaultRfxTextProps(props),
    theme,
  };

  return renderRfxText(newProps);
};

AppBarTitle = processComponent<RfxTextPropsOptional>(AppBarTitle, {
  name: 'AppBarTitle',
});

export { AppBarTitle };
