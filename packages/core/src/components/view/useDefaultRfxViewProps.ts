/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../color/Palette';
import { usePaletteColor } from '../../color/PaletteColor';
import { useResponsiveness } from '../../responsiveness/Responsiveness';
import { RfxViewPropsBase } from './RfxViewProps';

export const useDefaultRfxViewProps = <
  Props extends RfxViewPropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const { breakpoints, dimensions } = useResponsiveness();
  const { palette } = usePalette();
  const paletteColorCtxValue = usePaletteColor();
  let paletteColor = paletteColorCtxValue && paletteColorCtxValue.paletteColor;
  paletteColor = props.paletteColor || paletteColor || palette.surface;

  const isOpen = props.isOpen === false ? false : true;
  const shouldProvideColor = props.shouldProvideColor === false ? false : true;

  const rfxProps: RfxViewPropsBase<Props, Theme> = {
    ...props,
    breakpoints,
    dimensions,
    isOpen,
    paletteColor,
    shouldProvideColor,
    theme,
  };

  /*
   * This error is really strange. If the above do not throws any errors,
   * then the below shouldn't either. Besides, the lack of information on
   * why it's not assignable makes really hard to understand why that'd wrong.
   */
  // @ts-ignore Type 'RfxViewPropsBase<Props, Theme>'
  // is not assignable to type 'Props'.ts(2322)
  return rfxProps;
};
