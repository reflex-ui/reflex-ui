/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../color/Palette';
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
import { BackdropProps, BackdropPropsOptional } from './BackdropProps';
import { BackdropTheme } from './BackdropTheme';

export const useDefaultBackdropProps = (
  props: BackdropPropsOptional,
  theme: BackdropTheme,
): BackdropProps => {
  const { palette } = usePalette();
  const paletteColor = props.paletteColor || palette.backdrop;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
  };
};
