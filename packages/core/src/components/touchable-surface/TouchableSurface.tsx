/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { InteractionStateContext } from '../../interaction';
import { useInteraction } from '../../interaction/useInteraction';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { filterOutInteractionProps } from '../../utils/props';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeAndStyleProps } from '../handleThemeAndStyleProps';
import { processComponent } from '../processComponent';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
// tslint:disable-next-line:max-line-length
import { renderTouchableComponent } from '../touchable/renderTouchableComponent';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';
// tslint:disable-next-line
import { useDefaultTouchableSurfaceProps } from './useDefaultTouchableSurfaceProps';

export const extractSurfacePropsFromTouchableSurfaceProps = (
  props: TouchableSurfaceProps,
): SurfacePropsOptional => {
  const { getPatchTheme, theme, ...otherProps } = filterOutInteractionProps(
    props,
  );

  let surfaceProps = otherProps as SurfacePropsOptional;
  surfaceProps = {
    ...surfaceProps,
    interactionState: props.interactionState,
  };
  const surfaceTheme = props.theme.surface && props.theme.surface(props);

  if (surfaceTheme !== undefined) {
    surfaceProps = {
      ...surfaceProps,
      getPatchTheme: () => surfaceTheme,
    };
  }

  return surfaceProps;
};

let TouchableSurface: React.ComponentType<TouchableSurfacePropsOptional> = (
  props: TouchableSurfacePropsOptional,
) => {
  let newProps = useDefaultTouchableSurfaceProps(props);
  newProps = { ...newProps, ...useInteraction(newProps) };
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleThemeAndStyleProps(newProps, newProps.theme.touchable);

  const Touchable =
    newProps.theme.touchable && newProps.theme.touchable.component;

  const surfaceProps = extractSurfacePropsFromTouchableSurfaceProps(newProps);
  const surface = <Surface {...surfaceProps}>{newProps.children}</Surface>;
  newProps = { ...newProps, children: surface };

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      <InteractionStateContext.Provider value={newProps.interactionState}>
        {renderTouchableComponent(newProps, Touchable)}
      </InteractionStateContext.Provider>
    </ColorThemeContext.Provider>
  );
};

TouchableSurface = processComponent<TouchableSurfacePropsOptional>(
  TouchableSurface,
  {
    name: 'TouchableSurface',
  },
);

export { TouchableSurface };
