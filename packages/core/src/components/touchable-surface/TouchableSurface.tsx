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
// tslint:disable-next-line:max-line-length
import { renderTouchableComponent } from '../touchable/renderTouchableComponent';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';
import { TouchableSurfaceTheme } from './TouchableSurfaceTheme';
import { TouchableSurfaceVariant } from './TouchableSurfaceVariant';
// tslint:disable-next-line:max-line-length
import { useDefaultTouchableSurfaceProps } from './useDefaultTouchableSurfaceProps';

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

const useTheme = (
  theme?: TouchableSurfaceTheme,
  variant?: TouchableSurfaceVariant,
): TouchableSurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.touchableSurface === undefined ||
    componentsTheme.touchableSurface === null
  ) {
    throw new MissingComponentThemeError('<TouchableSurface>');
  }

  return componentsTheme.touchableSurface[
    variant || TouchableSurfaceVariant.Default
  ];
};

let TouchableSurface: React.ComponentType<
  TouchableSurfacePropsOptional
> = forwardRef((props: TouchableSurfacePropsOptional, ref: Ref<View>) => {
  const variant = props.variant || TouchableSurfaceVariant.Default;
  const theme = useTheme(props.theme, variant);

  let newProps: TouchableSurfaceProps = {
    ...useDefaultTouchableSurfaceProps(props, theme),
    variant: props.variant || TouchableSurfaceVariant.Default,
  };
  newProps = { ...newProps, ...useInteraction(newProps) };
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme.touchable);

  const Touchable =
    newProps.theme.touchable && newProps.theme.touchable.component;

  /*
  const surfaceProps = extractSurfacePropsFromTouchableSurfaceProps(newProps);
  */
  const {
    children,
    ...surfaceProps
  } = extractSurfacePropsFromTouchableSurfaceProps(newProps);
  /*
  if (
    props.variant === undefined ||
    props.variant === null ||
    props.variant === TouchableSurfaceVariant.Default
  ) {
    surfaceProps = {
      ...surfaceProps,
      children,
    };
  }
  */
  const surface = (
    <Surface
      {...surfaceProps}
      {...variant === TouchableSurfaceVariant.Default && { children }}
      ref={ref}
    />
  );

  if (variant === TouchableSurfaceVariant.Default) {
    newProps = { ...newProps, children: surface };
  } else {
    const Container = (
      <View>
        {children}
        {surface}
      </View>
    );
    newProps = { ...newProps, children: Container };
  }

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
