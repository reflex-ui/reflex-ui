/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor, usePaletteColor } from '../../color/PaletteColor';

export const useShouldProvideColor = (paletteColor?: PaletteColor): boolean => {
  const paletteColorCtxValue = usePaletteColor();
  const paletteColorFromCtx =
    paletteColorCtxValue && paletteColorCtxValue.paletteColor;
  return (
    paletteColor !== undefined &&
    paletteColor !== null &&
    paletteColor !== paletteColorFromCtx
  );
};
