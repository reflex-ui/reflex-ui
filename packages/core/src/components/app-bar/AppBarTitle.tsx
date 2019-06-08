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
import { renderRfxTextComponent } from '../text/renderRfxTextComponent';
import { RfxTextPropsOptional } from '../text/RfxTextProps';
import { RfxTextTheme } from '../text/RfxTextTheme';
import { useDefaultRfxTextProps } from '../text/useDefaultRfxTextProps';
import { AppBarVariant } from './AppBarVariant';

const useTheme = (
  theme?: RfxTextTheme,
  variant?: AppBarVariant,
): RfxTextTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.appBar === undefined || componentsTheme.appBar === null) {
    throw new MissingComponentThemeError('<AppBarTitle>');
  }

  const appBarTheme = componentsTheme.appBar[variant || AppBarVariant.Default];

  if (appBarTheme.title === undefined || appBarTheme.title === null) {
    throw new MissingComponentThemeError('<AppBarTitle>');
  }

  return appBarTheme.title;
};

let AppBarTitle: React.ComponentType<RfxTextPropsOptional> = forwardRef(
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

AppBarTitle = processComponent<RfxTextPropsOptional>(AppBarTitle, {
  name: 'AppBarTitle',
});

export { AppBarTitle };
