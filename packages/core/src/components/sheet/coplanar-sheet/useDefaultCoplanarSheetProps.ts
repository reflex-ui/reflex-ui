/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../../color/Palette';
import { useDefaultSurfaceProps } from '../../surface/useDefaultSurfaceProps';
import {
  CoplanarSheetProps,
  CoplanarSheetPropsOptional,
} from './CoplanarSheetProps';
import { CoplanarSheetTheme } from './CoplanarSheetTheme';
import { CoplanarSheetVariant } from './CoplanarSheetVariant';

export const useDefaultCoplanarSheetProps = (
  props: CoplanarSheetPropsOptional,
  theme: CoplanarSheetTheme,
): CoplanarSheetProps => {
  const { palette } = usePalette();
  const variant: CoplanarSheetVariant =
    props.variant || CoplanarSheetVariant.Start;
  const paletteColor = props.paletteColor || palette.surface;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
    variant,
  };
};
