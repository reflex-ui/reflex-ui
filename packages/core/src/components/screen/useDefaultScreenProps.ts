/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteContext } from '../../color/PaletteContext';
import { SurfaceProps, SurfacePropsOptional } from '../surface/SurfaceProps';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';

export const useDefaultScreenProps = (
  props: SurfacePropsOptional,
  theme: SurfaceTheme,
): SurfaceProps => {
  const palette = useContext(PaletteContext);
  const paletteColor = props.paletteColor || palette.screen;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
  };
};
