/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../../color/Palette';
import { useDefaultSurfaceProps } from '../../surface/useDefaultSurfaceProps';
import { ModalSheetProps, ModalSheetPropsOptional } from './ModalSheetProps';
import { ModalSheetTheme } from './ModalSheetTheme';
import { ModalSheetVariant } from './ModalSheetVariant';

export const useDefaultModalSheetProps = (
  props: ModalSheetPropsOptional,
  theme: ModalSheetTheme,
): ModalSheetProps => {
  const { palette } = usePalette();
  const variant: ModalSheetVariant = props.variant || ModalSheetVariant.Start;
  const paletteColor = props.paletteColor || palette.surface;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
    variant,
  };
};
