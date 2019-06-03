/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../color/Palette';
import { useResponsiveness } from '../../responsiveness/Responsiveness';
import { ModalProps, ModalPropsOptional } from './ModalProps';
import { ModalTheme } from './ModalTheme';

export const useDefaultModalProps = (
  props: ModalPropsOptional,
  theme: ModalTheme,
): ModalProps => {
  const { breakpoints, dimensions } = useResponsiveness();
  const { palette } = usePalette();
  const paletteColor = props.paletteColor || palette.backdrop;
  const displayBackdrop = props.displayBackdrop === false ? false : true;

  return {
    ...props,
    breakpoints,
    dimensions,
    displayBackdrop,
    paletteColor,
    theme,
  };
};
