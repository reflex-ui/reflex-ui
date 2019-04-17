/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref, useContext } from 'react';
import { Text } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentsTheme } from '../ComponentsTheme';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { renderRfxTextComponent } from './renderRfxTextComponent';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';
import { RfxTextTheme } from './RfxTextTheme';
import { useDefaultRfxTextPropsBase } from './useDefaultRfxTextPropsBase';

const getTheme = (
  props: RfxTextPropsOptional,
  componentsTheme: ComponentsTheme,
): RfxTextTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
  if (componentsTheme.text === undefined || componentsTheme.text === null) {
    throw new MissingComponentThemeError('<Headline6>');
  }
  return componentsTheme.text.headline6;
};

let Headline6: React.ComponentType<RfxTextPropsOptional> = forwardRef(
  (props: RfxTextPropsOptional, ref: Ref<Text>) => {
    const componentsTheme = useContext(ComponentsThemeContext);
    const theme = getTheme(props, componentsTheme);

    const newProps: RfxTextProps = {
      ...useDefaultRfxTextPropsBase(props),
      ...useOnLayout(props),
      theme,
    };

    return renderRfxTextComponent(newProps, ref);
  },
);

Headline6 = processComponent<RfxTextPropsOptional>(Headline6, {
  name: 'Headline6',
});

export { Headline6 };
