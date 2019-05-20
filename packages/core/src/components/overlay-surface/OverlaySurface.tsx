/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View, ViewProps } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { getPropsFromTheme } from '../getPropsFromTheme';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { renderViewComponent } from '../view/renderViewComponent';
import { useShouldProvideColor } from '../view/useShouldProvideColor';
import {
  OverlaySurfaceProps,
  OverlaySurfacePropsOptional,
} from './OverlaySurfaceProps';
import { OverlaySurfaceTheme } from './OverlaySurfaceTheme';
import { useDefaultOverlaySurfaceProps } from './useDefaultOverlaySurfaceProps';

const useTheme = (theme?: OverlaySurfaceTheme): OverlaySurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.overlaySurface === undefined ||
    componentsTheme.overlaySurface === null
  ) {
    throw new MissingComponentThemeError('<OverlaySurface>');
  }

  return componentsTheme.overlaySurface;
};

let OverlaySurface: React.ComponentType<
  OverlaySurfacePropsOptional
> = forwardRef((props: OverlaySurfacePropsOptional, ref: Ref<View>) => {
  const theme = useTheme(props.theme);

  let newProps: OverlaySurfaceProps = useDefaultOverlaySurfaceProps(
    props,
    theme,
  );
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme.surface);

  let { children } = newProps;
  newProps = { ...newProps, children: undefined };

  const shouldProvideColor = useShouldProvideColor(newProps.paletteColor);
  const renderedSurface = renderRfxViewComponent({
    props: newProps,
    ref,
    shouldProvideColor,
    theme: theme.surface,
  });

  children = (
    <React.Fragment>
      {children}
      {renderedSurface}
    </React.Fragment>
  );

  const viewProps: React.PropsWithChildren<ViewProps> = {
    ...getPropsFromTheme(newProps, theme.container),
    children,
    style: getStyleFromTheme(newProps, theme.container),
  };

  const Component =
    theme.container &&
    theme.container.getComponent &&
    theme.container.getComponent(newProps);
  return renderViewComponent({ props: newProps, viewProps, Component });
});

OverlaySurface = processComponent<OverlaySurfacePropsOptional>(OverlaySurface, {
  name: 'OverlaySurface',
});

export { OverlaySurface };
