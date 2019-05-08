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
    throw new MissingComponentThemeError('<Headline5>');
  }

  return componentsTheme.text.headline5;
};

let Headline5: React.ComponentType<RfxTextPropsOptional> = forwardRef(
  (props: RfxTextPropsOptional, ref: Ref<Text>) => {
    const theme = useTheme(props.theme);
    const newProps: RfxTextProps = {
      ...useDefaultRfxTextProps(props, theme),
      ...useOnLayout(props),
    };

    return renderRfxTextComponent(newProps, ref);
  },
);

Headline5 = processComponent<RfxTextPropsOptional>(Headline5, {
  name: 'Headline5',
});

export { Headline5 };
