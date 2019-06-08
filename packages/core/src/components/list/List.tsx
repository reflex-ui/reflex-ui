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
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useShouldProvideColor } from '../view/useShouldProvideColor';

const useTheme = (theme?: SurfaceTheme): SurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.list === undefined || componentsTheme.list === null) {
    throw new MissingComponentThemeError('<List>');
  }

  return componentsTheme.list;
};

let List: React.ComponentType<SurfacePropsOptional> = forwardRef(
  (props: SurfacePropsOptional, ref: Ref<View>) => {
    let newProps = useDefaultSurfaceProps(props, useTheme(props.theme));
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme.view);

    const { theme } = newProps;
    const Component =
      theme.view &&
      theme.view.getComponent &&
      theme.view.getComponent(newProps);
    const shouldProvideColor = useShouldProvideColor(newProps.paletteColor);

    return renderRfxViewComponent({
      Component,
      props: newProps,
      ref,
      shouldProvideColor,
    });
  },
);

List = processComponent<SurfacePropsOptional>(List, {
  name: 'List',
});

export { List };
