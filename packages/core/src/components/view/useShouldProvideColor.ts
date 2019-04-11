/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteColorContext } from '../../color/PaletteColorContext';
import { RfxViewPropsBaseOptional } from './RfxViewProps';

export const useShouldProvideColor = (
  props: RfxViewPropsBaseOptional,
): boolean => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const { paletteColor } = props;
  return (
    paletteColor !== undefined &&
    paletteColor !== null &&
    paletteColor !== paletteColorFromCtx
  );
};
