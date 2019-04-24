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
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { RfxTextPropsBase } from './RfxTextProps';

export const useDefaultRfxTextProps = <
  Props extends RfxTextPropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const paletteColorOnCtx = useContext(PaletteColorContext);
  const dimensionsProps = useContext(DimensionsContext);
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const palette = useContext(PaletteContext);

  const paletteColor =
    props.paletteColor || paletteColorOnCtx || palette.surface;

  const rfxTextProps: RfxTextPropsBase<Props, Theme> = {
    ...dimensionsProps,
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
