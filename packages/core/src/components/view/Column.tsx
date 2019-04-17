/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref, useContext } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentsTheme } from '../ComponentsTheme';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderRfxViewComponent } from './renderRfxViewComponent';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';
import { RfxViewTheme } from './RfxViewTheme';
import { useDefaultRfxViewPropsBase } from './useDefaultRfxViewPropsBase';
import { useShouldProvideColor } from './useShouldProvideColor';

const getTheme = (
  props: RfxViewPropsOptional,
  componentsTheme: ComponentsTheme,
): RfxViewTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
  if (componentsTheme.views === undefined || componentsTheme.views === null) {
    throw new MissingComponentThemeError('<Column>');
  }
  return componentsTheme.views.column;
};

let Column: React.ComponentType<RfxViewPropsOptional> = forwardRef(
  (props: RfxViewPropsOptional, ref: Ref<View>) => {
    const componentsTheme = useContext(ComponentsThemeContext);
    const theme = getTheme(props, componentsTheme);

    let newProps: RfxViewProps = {
      ...useDefaultRfxViewPropsBase(props),
      theme,
    };
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    const shouldProvideColor = useShouldProvideColor(props);
    return renderRfxViewComponent({ props: newProps, shouldProvideColor, ref });
  },
);

Column = processComponent<RfxViewPropsOptional>(Column, {
  name: 'Column',
});

export { Column };
