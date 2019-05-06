/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { usePalette } from '../../color/Palette';
import { PaletteColor } from '../../color/PaletteColor';
import { PaletteColorContext } from '../../color/PaletteColorContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { RfxViewPropsBase } from './RfxViewProps';

export const useDefaultRfxViewProps = <
  Props extends RfxViewPropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const dimensionsProps = useContext(DimensionsContext);
  const { palette } = usePalette();

  const paletteColor: PaletteColor =
    props.paletteColor || paletteColorFromCtx || palette.surface;

  const rfxProps: RfxViewPropsBase<Props, Theme> = {
    ...props,
    breakpoints: dimensionsProps.breakpoints,
    dimensions: dimensionsProps.dimensions,
    paletteColor,
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
