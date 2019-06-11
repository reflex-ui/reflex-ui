/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../../errors';
import { useOnLayout } from '../../../responsiveness/useOnLayout';
import { useOpenCloseTransition } from '../../../transition';
import { useComponentsTheme } from '../../ComponentsTheme';
import { processComponent } from '../../processComponent';
import { processComponentProps } from '../../processComponentProps';
import { Surface } from '../../surface/Surface';
import { SurfacePropsOptional } from '../../surface/SurfaceProps';
import {
  CoplanarSideSheetProps,
  CoplanarSideSheetPropsOptional,
} from './CoplanarSideSheetProps';
import { CoplanarSideSheetTheme } from './CoplanarSideSheetTheme';
import { CoplanarSideSheetVariant } from './CoplanarSideSheetVariant';
// tslint:disable-next-line:max-line-length
import { useDefaultCoplanarSideSheetProps } from './useDefaultCoplanarSideSheetProps';

export const extractSurfacePropsFromCoplanarSideSheetProps = (
  props: CoplanarSideSheetProps,
): SurfacePropsOptional => {
  const { getPatchTheme, theme, variant, ...otherProps } = props;

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
  theme?: CoplanarSideSheetTheme,
  variant: CoplanarSideSheetVariant = CoplanarSideSheetVariant.Start,
): CoplanarSideSheetTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.coplanarSideSheet === undefined ||
    componentsTheme.coplanarSideSheet === null
  ) {
    throw new MissingComponentThemeError('<CoplanarSideSheet>');
  }

  return componentsTheme.coplanarSideSheet[variant];
};

let CoplanarSideSheet: React.ComponentType<
  CoplanarSideSheetPropsOptional
> = forwardRef((props: CoplanarSideSheetPropsOptional, ref: Ref<View>) => {
  let newProps: CoplanarSideSheetProps = useDefaultCoplanarSideSheetProps(
    props,
    useTheme(props.theme, props.variant),
  );
  newProps = { ...newProps, ...useOnLayout(newProps) };
  /*
   * We put useOpenCloseTransition() after processComponentProps()
   * because we want props provided via ComponentTheme.getProps()
   * to be passed to useOpenCloseTransition(), specially
   * isOpenCloseTransitionAnimated, which gives themes full control
   * over how components should behave.
   */
  newProps = processComponentProps(newProps);
  newProps = { ...newProps, ...useOpenCloseTransition(newProps) };
  /**/

  return (
    <Surface
      {...extractSurfacePropsFromCoplanarSideSheetProps(newProps)}
      ref={ref}
    >
      {newProps.children}
    </Surface>
  );
});

CoplanarSideSheet = processComponent<CoplanarSideSheetPropsOptional>(
  CoplanarSideSheet,
  {
    name: 'CoplanarSideSheet',
  },
);

export { CoplanarSideSheet };
