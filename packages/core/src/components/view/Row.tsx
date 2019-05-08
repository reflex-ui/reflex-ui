/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderRfxViewComponent } from './renderRfxViewComponent';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';
import { RfxViewTheme } from './RfxViewTheme';
import { useDefaultRfxViewProps } from './useDefaultRfxViewProps';
import { useShouldProvideColor } from './useShouldProvideColor';

const useTheme = (theme?: RfxViewTheme): RfxViewTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.views === undefined || componentsTheme.views === null) {
    throw new MissingComponentThemeError('<Row>');
  }

  return componentsTheme.views.row;
};

let Row: React.ComponentType<RfxViewPropsOptional> = forwardRef(
  (props: RfxViewPropsOptional, ref: Ref<View>) => {
    const theme = useTheme(props.theme);

    let newProps: RfxViewProps = useDefaultRfxViewProps(props, theme);
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    const shouldProvideColor = useShouldProvideColor(props.paletteColor);
    return renderRfxViewComponent({ props: newProps, shouldProvideColor, ref });
  },
);

Row = processComponent<RfxViewPropsOptional>(Row, {
  name: 'Row',
});

export { Row };
