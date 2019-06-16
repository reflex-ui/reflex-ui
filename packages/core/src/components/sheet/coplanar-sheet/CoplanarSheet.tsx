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
  CoplanarSheetProps,
  CoplanarSheetPropsOptional,
} from './CoplanarSheetProps';
import { CoplanarSheetTheme } from './CoplanarSheetTheme';
import { CoplanarSheetVariant } from './CoplanarSheetVariant';
import { useDefaultCoplanarSheetProps } from './useDefaultCoplanarSheetProps';

export const extractSurfacePropsFromCoplanarSheetProps = (
  props: CoplanarSheetProps,
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
  theme?: CoplanarSheetTheme,
  variant: CoplanarSheetVariant = CoplanarSheetVariant.Start,
): CoplanarSheetTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.coplanarSheet === undefined ||
    componentsTheme.coplanarSheet === null
  ) {
    throw new MissingComponentThemeError('<CoplanarSheet>');
  }

  return componentsTheme.coplanarSheet[variant];
};

let CoplanarSheet: React.ComponentType<CoplanarSheetPropsOptional> = forwardRef(
  (props: CoplanarSheetPropsOptional, ref: Ref<View>) => {
    let newProps: CoplanarSheetProps = useDefaultCoplanarSheetProps(
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
        {...extractSurfacePropsFromCoplanarSheetProps(newProps)}
        ref={ref}
      >
        {newProps.children}
      </Surface>
    );
  },
);

CoplanarSheet = processComponent<CoplanarSheetPropsOptional>(CoplanarSheet, {
  name: 'CoplanarSheet',
});

export { CoplanarSheet };
