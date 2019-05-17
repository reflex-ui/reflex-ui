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
import { renderRfxTextComponent } from '../text/renderRfxTextComponent';
import { RfxTextProps, RfxTextPropsOptional } from '../text/RfxTextProps';
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
    const theme = useTheme(props.theme);

    const newProps: RfxTextProps = {
      ...useDefaultRfxTextProps(props, theme),
      ...useOnLayout(props),
    };

    return renderRfxTextComponent(newProps, ref);
  },
);

AppBarTitle = processComponent<RfxTextPropsOptional>(AppBarTitle, {
  name: 'AppBarTitle',
});

export { AppBarTitle };
