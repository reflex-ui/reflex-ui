/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteColor } from '../../color/PaletteColor';
import { PaletteColorContext } from '../../color/PaletteColorContext';

export const useShouldProvideColor = (paletteColor?: PaletteColor): boolean => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  return (
    paletteColor !== undefined &&
    paletteColor !== null &&
    paletteColor !== paletteColorFromCtx
  );
};
