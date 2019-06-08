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
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useShouldProvideColor } from '../view/useShouldProvideColor';
import { useDefaultListItemProps } from './useDefaultListItemProps';

const useTheme = (theme?: SurfaceTheme): SurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.listItem === undefined ||
    componentsTheme.listItem === null
  ) {
    throw new MissingComponentThemeError('<ListItem>');
  }

  return componentsTheme.listItem;
};

let ListItem: React.ComponentType<SurfacePropsOptional> = forwardRef(
  (props: SurfacePropsOptional, ref: Ref<View>) => {
    let newProps = useDefaultListItemProps(props, useTheme(props.theme));
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

ListItem = processComponent<SurfacePropsOptional>(ListItem, {
  name: 'ListItem',
});

export { ListItem };
