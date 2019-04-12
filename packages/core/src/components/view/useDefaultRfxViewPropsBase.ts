/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteColorContext } from '../../color/PaletteColorContext';
import { PaletteContext } from '../../color/PaletteContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { RfxViewPropsBase, RfxViewPropsBaseOptional } from './RfxViewProps';

export const useDefaultRfxViewPropsBase = (
  props: RfxViewPropsBaseOptional,
): RfxViewPropsBase => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const dimensionsProps = useContext(DimensionsContext);
  const palette = useContext(PaletteContext);

  const paletteColor =
    props.paletteColor || paletteColorFromCtx || palette.surface;

  return {
    ...props,
    ...dimensionsProps,
    paletteColor,
  };
};
