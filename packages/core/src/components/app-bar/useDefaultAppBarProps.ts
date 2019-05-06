/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../color/Palette';
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
import { AppBarProps, AppBarPropsOptional } from './AppBarProps';
import { AppBarTheme } from './AppBarTheme';
import { AppBarVariant } from './AppBarVariant';

export const useDefaultAppBarProps = (
  props: AppBarPropsOptional,
  theme: AppBarTheme,
): AppBarProps => {
  const { palette } = usePalette();
  const variant: AppBarVariant = props.variant || AppBarVariant.Default;
  const paletteColor = props.paletteColor || palette.primary;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
    variant,
  };
};
