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
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useShouldProvideColor } from '../view/useShouldProvideColor';

const getTheme = (
  props: SurfacePropsOptional,
  componentsTheme: ComponentsTheme,
): SurfaceTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
  if (componentsTheme.list === undefined || componentsTheme.list === null) {
    throw new MissingComponentThemeError('<List>');
  }
  return componentsTheme.list;
};

let List: React.ComponentType<SurfacePropsOptional> = forwardRef(
  (props: SurfacePropsOptional, ref: Ref<View>) => {
    const componentsTheme = useContext(ComponentsThemeContext);
    const theme = getTheme(props, componentsTheme);

    let newProps: SurfaceProps = useDefaultSurfaceProps(props, theme);

    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    const shouldProvideColor = useShouldProvideColor(newProps.paletteColor);
    return renderRfxViewComponent({ props: newProps, shouldProvideColor, ref });
  },
);

List = processComponent<SurfacePropsOptional>(List, {
  name: 'List',
});

export { List };
