/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { InteractionStateProvider } from '../../interaction';
import { useInteraction } from '../../interaction/useInteraction';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { filterOutInteractionProps } from '../../utils/props';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
// tslint:disable-next-line:max-line-length
import { renderTouchableComponent } from '../touchable/renderTouchableComponent';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';
import { TouchableSurfaceTheme } from './TouchableSurfaceTheme';

export const extractSurfacePropsFromTouchableSurfaceProps = (
  props: TouchableSurfaceProps,
): SurfacePropsOptional => {
  const { getPatchTheme, theme, ...otherProps } = filterOutInteractionProps(
    props,
  );

  let surfaceProps = otherProps as SurfacePropsOptional;
  const surfaceTheme = props.theme.surface && props.theme.surface(props);

  if (surfaceTheme !== undefined) {
    surfaceProps = {
      ...surfaceProps,
      getPatchTheme: () => surfaceTheme,
    };
  }

  return surfaceProps;
};

const useTheme = (theme?: TouchableSurfaceTheme): TouchableSurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.touchableSurface === undefined ||
    componentsTheme.touchableSurface === null
  ) {
    throw new MissingComponentThemeError('<TouchableSurface>');
  }

  return componentsTheme.touchableSurface;
};

let TouchableSurface: React.ComponentType<
  TouchableSurfacePropsOptional
> = forwardRef((props: TouchableSurfacePropsOptional, ref: Ref<View>) => {
  const theme = useTheme(props.theme);

  let newProps: TouchableSurfaceProps = useDefaultSurfaceProps(props, theme);
  newProps = { ...newProps, ...useInteraction(newProps) };
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme.touchable);

  const Touchable =
    newProps.theme.touchable && newProps.theme.touchable.component;

  const surfaceProps = extractSurfacePropsFromTouchableSurfaceProps(newProps);
  const surface = (
    <Surface {...surfaceProps} ref={ref}>
      {newProps.children}
    </Surface>
  );
  newProps = { ...newProps, children: surface };

  return (
    <InteractionStateProvider value={newProps.interactionState}>
      {renderTouchableComponent(newProps, Touchable)}
    </InteractionStateProvider>
  );
});

TouchableSurface = processComponent<TouchableSurfacePropsOptional>(
  TouchableSurface,
  {
    name: 'TouchableSurface',
  },
);

export { TouchableSurface };
