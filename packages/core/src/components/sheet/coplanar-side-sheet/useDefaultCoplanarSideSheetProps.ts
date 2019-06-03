/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../../color/Palette';
import { useDefaultSurfaceProps } from '../../surface/useDefaultSurfaceProps';
import {
  CoplanarSideSheetProps,
  CoplanarSideSheetPropsOptional,
} from './CoplanarSideSheetProps';
import { CoplanarSideSheetTheme } from './CoplanarSideSheetTheme';
import { CoplanarSideSheetVariant } from './CoplanarSideSheetVariant';

export const useDefaultCoplanarSideSheetProps = (
  props: CoplanarSideSheetPropsOptional,
  theme: CoplanarSideSheetTheme,
): CoplanarSideSheetProps => {
  const { palette } = usePalette();
  const variant: CoplanarSideSheetVariant =
    props.variant || CoplanarSideSheetVariant.Start;
  const paletteColor = props.paletteColor || palette.surface;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
    variant,
  };
};
