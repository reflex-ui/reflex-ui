/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useOpenCloseTransition } from '../../transition';
import { filterOutTouchableWithoutFeedbackProps } from '../../utils/props';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
// tslint:disable-next-line:max-line-length
import { renderTouchableComponent } from '../touchable/renderTouchableComponent';
import { BackdropProps, BackdropPropsOptional } from './BackdropProps';
import { BackdropTheme } from './BackdropTheme';
import { useDefaultBackdropProps } from './useDefaultBackdropProps';

export const extractSurfacePropsFromBackdropProps = (
  props: BackdropProps,
): SurfacePropsOptional => {
  const {
    getPatchTheme,
    theme,
    ...otherProps
  } = filterOutTouchableWithoutFeedbackProps(props);

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

const useTheme = (theme?: BackdropTheme): BackdropTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.backdrop === undefined ||
    componentsTheme.backdrop === null
  ) {
    throw new MissingComponentThemeError('<Backdrop>');
  }

  return componentsTheme.backdrop;
};

let Backdrop: React.ComponentType<BackdropPropsOptional> = forwardRef(
  (props: BackdropPropsOptional, ref: Ref<View>) => {
    let newProps = useDefaultBackdropProps(props, useTheme(props.theme));
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = { ...newProps, ...useOpenCloseTransition(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme.touchable);

    const { theme } = newProps;
    const Touchable =
      theme.touchable &&
      theme.touchable.getComponent &&
      theme.touchable.getComponent(newProps);

    const surfaceProps = extractSurfacePropsFromBackdropProps(newProps);
    const surface = (
      <Surface ref={ref} {...surfaceProps} shouldProvideColor={false}>
        {newProps.children}
      </Surface>
    );
    newProps = { ...newProps, children: surface };

    return renderTouchableComponent(newProps, Touchable);
  },
);

Backdrop = processComponent<BackdropPropsOptional>(Backdrop, {
  name: 'Backdrop',
});

export { Backdrop };
