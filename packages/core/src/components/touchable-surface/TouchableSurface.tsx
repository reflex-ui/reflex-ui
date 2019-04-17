/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref, useContext } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { InteractionStateContext } from '../../interaction';
import { useInteraction } from '../../interaction/useInteraction';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { filterOutInteractionProps } from '../../utils/props';
import { ComponentsTheme } from '../ComponentsTheme';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
// tslint:disable-next-line:max-line-length
import { useDefaultSurfacePropsBase } from '../surface/useDefaultSurfacePropsBase';
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

const getTheme = (
  props: TouchableSurfacePropsOptional,
  componentsTheme: ComponentsTheme,
): TouchableSurfaceTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
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
  const componentsTheme = useContext(ComponentsThemeContext);
  const theme = getTheme(props, componentsTheme);

  let newProps: TouchableSurfaceProps = {
    ...useDefaultSurfacePropsBase(props),
    theme,
  };
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
    <InteractionStateContext.Provider value={newProps.interactionState}>
      {renderTouchableComponent(newProps, Touchable)}
    </InteractionStateContext.Provider>
  );
});

TouchableSurface = processComponent<TouchableSurfacePropsOptional>(
  TouchableSurface,
  {
    name: 'TouchableSurface',
  },
);

export { TouchableSurface };
