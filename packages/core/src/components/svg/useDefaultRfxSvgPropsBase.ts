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
import { RfxSvgPropsBase, RfxSvgPropsBaseOptional } from './RfxSvgProps';

export const useDefaultRfxSvgPropsBase = (
  props: RfxSvgPropsBaseOptional,
): RfxSvgPropsBase => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const palette = useContext(PaletteContext);

  const interactionState = props.interactionState || interactionStateFromCtx;

  const paletteColor =
    props.paletteColor || paletteColorFromCtx || palette.surface;

  return {
    ...props,
    interactionState,
    paletteColor,
    size: props.size || Size.M,
  };
};
