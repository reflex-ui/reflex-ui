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
import { RfxTextPropsBase, RfxTextPropsBaseOptional } from './RfxTextProps';

export const useDefaultRfxTextPropsBase = (
  props: RfxTextPropsBaseOptional,
): RfxTextPropsBase => {
  const paletteColorOnCtx = useContext(PaletteColorContext);
  const dimensionsProps = useContext(DimensionsContext);
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const palette = useContext(PaletteContext);

  const paletteColor =
    props.paletteColor || paletteColorOnCtx || palette.surface;

  return {
    ...dimensionsProps,
    interactionState: interactionStateFromCtx,
    paletteColor,
    ...props,
  };
};
