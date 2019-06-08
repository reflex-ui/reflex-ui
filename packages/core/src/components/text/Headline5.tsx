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
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderRfxTextComponent } from './renderRfxTextComponent';
import { RfxTextPropsOptional } from './RfxTextProps';
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
    let newProps = useDefaultRfxTextProps(props, useTheme(props.theme));
    newProps = { ...newProps, ...useOnLayout(props) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme.text);

    const { theme } = newProps;
    const Component =
      theme.text &&
      theme.text.getComponent &&
      theme.text.getComponent(newProps);
    return renderRfxTextComponent(newProps, ref, Component);
  },
);

Headline5 = processComponent<RfxTextPropsOptional>(Headline5, {
  name: 'Headline5',
});

export { Headline5 };
