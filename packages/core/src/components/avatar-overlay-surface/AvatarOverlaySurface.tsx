/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useComponentsTheme } from '../ComponentsTheme';
import { OverlaySurface } from '../overlay-surface/OverlaySurface';
// tslint:disable-next-line:max-line-length
import { OverlaySurfacePropsOptional } from '../overlay-surface/OverlaySurfaceProps';
import { OverlaySurfaceTheme } from '../overlay-surface/OverlaySurfaceTheme';
import { processComponent } from '../processComponent';

const useTheme = (theme?: OverlaySurfaceTheme): OverlaySurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.avatarOverlaySurface === undefined ||
    componentsTheme.avatarOverlaySurface === null
  ) {
    throw new MissingComponentThemeError('<AvatarOverlaySurface>');
  }

  return componentsTheme.avatarOverlaySurface;
};

let AvatarOverlaySurface: React.ComponentType<
  OverlaySurfacePropsOptional
> = forwardRef((props: OverlaySurfacePropsOptional, ref: Ref<View>) => {
  const newProps = { ...props, theme: useTheme(props.theme) };
  return <OverlaySurface ref={ref} {...newProps} />;
});

AvatarOverlaySurface = processComponent<OverlaySurfacePropsOptional>(
  AvatarOverlaySurface,
  {
    name: 'AvatarOverlaySurface',
  },
);

export { AvatarOverlaySurface };
