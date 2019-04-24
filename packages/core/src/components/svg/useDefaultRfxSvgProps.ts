/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteColorContext } from '../../color/PaletteColorContext';
import { PaletteContext } from '../../color/PaletteContext';
import { InteractionStateContext } from '../../interaction';
import { Size } from '../../sizing/Size';
import { RfxSvgPropsBase } from './RfxSvgProps';

export const useDefaultRfxSvgProps = <
  Props extends RfxSvgPropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const palette = useContext(PaletteContext);

  const interactionState = props.interactionState || interactionStateFromCtx;

  const paletteColor =
    props.paletteColor || paletteColorFromCtx || palette.surface;

  const rfxSvgProps: RfxSvgPropsBase<Props, Theme> = {
    ...props,
    interactionState,
    paletteColor,
    size: props.size || Size.M,
    theme,
  };

  /*
   * This error is really strange. If the above do not throws any errors,
   * then the below shouldn't either. Besides, the lack of information on
   * why it's not assignable makes really hard to understand why that'd wrong.
   */
  // @ts-ignore Type 'RfxSvgPropsBase<Props, Theme>'
  // is not assignable to type 'Props'.ts(2322)
  return rfxSvgProps;
};
