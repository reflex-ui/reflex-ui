/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { usePalette } from '../../color/Palette';
import { usePaletteColor } from '../../color/PaletteColor';
import { InteractionStateContext } from '../../interaction';
import { useResponsiveness } from '../../responsiveness/Responsiveness';
import { RfxTextPropsBase } from './RfxTextProps';

export const useDefaultRfxTextProps = <
  Props extends RfxTextPropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const { breakpoints, dimensions } = useResponsiveness();
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const { palette } = usePalette();
  const paletteColorCtxValue = usePaletteColor();
  let paletteColor = paletteColorCtxValue && paletteColorCtxValue.paletteColor;

  paletteColor = props.paletteColor || paletteColor || palette.surface;

  const rfxTextProps: RfxTextPropsBase<Props, Theme> = {
    breakpoints,
    dimensions,
    interactionState: interactionStateFromCtx,
    paletteColor,
    theme,
    ...props,
  };

  /*
   * This error is really strange. If the above do not throws any errors,
   * then the below shouldn't either. Besides, the lack of information on
   * why it's not assignable makes really hard to understand why that'd wrong.
   */
  // @ts-ignore Type 'RfxTextPropsBase<Props, Theme>'
  // is not assignable to type 'Props'.ts(2322)
  return rfxTextProps;
};
