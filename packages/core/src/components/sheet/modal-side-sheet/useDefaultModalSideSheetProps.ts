/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../../color/Palette';
import { useDefaultSurfaceProps } from '../../surface/useDefaultSurfaceProps';
import {
  ModalSideSheetProps,
  ModalSideSheetPropsOptional,
} from './ModalSideSheetProps';
import { ModalSideSheetTheme } from './ModalSideSheetTheme';
import { ModalSideSheetVariant } from './ModalSideSheetVariant';

export const useDefaultModalSideSheetProps = (
  props: ModalSideSheetPropsOptional,
  theme: ModalSideSheetTheme,
): ModalSideSheetProps => {
  const { palette } = usePalette();
  const variant: ModalSideSheetVariant =
    props.variant || ModalSideSheetVariant.Start;
  const paletteColor = props.paletteColor || palette.surface;

  return {
    ...useDefaultSurfaceProps(props, theme),
    paletteColor,
    variant,
  };
};
