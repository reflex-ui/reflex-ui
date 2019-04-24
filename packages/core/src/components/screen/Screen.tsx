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
import { SurfaceProps, SurfacePropsOptional } from '../surface/SurfaceProps';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useShouldProvideColor } from '../view/useShouldProvideColor';
import { useDefaultScreenProps } from './useDefaultScreenProps';

const getTheme = (
  props: SurfacePropsOptional,
  componentsTheme: ComponentsTheme,
): SurfaceTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
  if (componentsTheme.screen === undefined || componentsTheme.screen === null) {
    throw new MissingComponentThemeError('<Screen>');
  }
  return componentsTheme.screen;
};

let Screen: React.ComponentType<SurfacePropsOptional> = forwardRef(
  (props: SurfacePropsOptional, ref: Ref<View>) => {
    const componentsTheme = useContext(ComponentsThemeContext);
    const theme = getTheme(props, componentsTheme);

    let newProps: SurfaceProps = useDefaultScreenProps(props, theme);

    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    const shouldProvideColor = useShouldProvideColor(newProps.paletteColor);
    return renderRfxViewComponent({ props: newProps, shouldProvideColor, ref });
  },
);

Screen = processComponent<SurfacePropsOptional>(Screen, {
  name: 'Screen',
});

export { Screen };
