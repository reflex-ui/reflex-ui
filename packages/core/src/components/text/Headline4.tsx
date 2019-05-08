/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from 'react';
import { Text } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { renderRfxTextComponent } from './renderRfxTextComponent';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';
import { RfxTextTheme } from './RfxTextTheme';
import { useDefaultRfxTextProps } from './useDefaultRfxTextProps';

const useTheme = (theme?: RfxTextTheme): RfxTextTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.text === undefined || componentsTheme.text === null) {
    throw new MissingComponentThemeError('<Headline4>');
  }

  return componentsTheme.text.headline4;
};

let Headline4: React.ComponentType<RfxTextPropsOptional> = forwardRef(
  (props: RfxTextPropsOptional, ref: Ref<Text>) => {
    const theme = useTheme(props.theme);
    const newProps: RfxTextProps = {
      ...useDefaultRfxTextProps(props, theme),
      ...useOnLayout(props),
    };

    return renderRfxTextComponent(newProps, ref);
  },
);

Headline4 = processComponent<RfxTextPropsOptional>(Headline4, {
  name: 'Headline4',
});

export { Headline4 };
