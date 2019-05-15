/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../color/Palette';
import { usePaletteColor } from '../../color/PaletteColor';
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
import { AvatarProps, AvatarPropsOptional } from './AvatarProps';
import { AvatarTheme } from './AvatarTheme';

export const useDefaultAvatarProps = (
  props: AvatarPropsOptional,
  theme: AvatarTheme,
): AvatarProps => {
  const { palette } = usePalette();
  const paletteColorCtxValue = usePaletteColor();
  let paletteColor = paletteColorCtxValue && paletteColorCtxValue.paletteColor;
  paletteColor = props.paletteColor || paletteColor || palette.primary;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
  };
};
