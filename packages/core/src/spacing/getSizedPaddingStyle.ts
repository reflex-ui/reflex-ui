/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getSpacingValue } from './getSpacingValue';
import { PaddingProps } from './PaddingProps';
import { SizedSpacingStyleGetter } from './SizedSpacingStyleGetter';

export const getSizedPaddingStyle: SizedSpacingStyleGetter<
  PaddingProps
> = sizedSpacing => ({
  padding: p,
  paddingBottom: pB,
  paddingEnd: pE,
  paddingHorizontal: pH,
  paddingStart: pS,
  paddingTop: pT,
  paddingVertical: pV,
}) => ({
  // prettier-ignore
  ...(p
    ? {
      paddingHorizontal: getSpacingValue(sizedSpacing, p),
      paddingVertical: getSpacingValue(sizedSpacing, p),
    }
    : {}),
  ...(pH ? { paddingHorizontal: getSpacingValue(sizedSpacing, pH) } : {}),
  ...(pV ? { paddingVertical: getSpacingValue(sizedSpacing, pV) } : {}),
  ...(pS ? { paddingStart: getSpacingValue(sizedSpacing, pS) } : {}),
  ...(pE ? { paddingEnd: getSpacingValue(sizedSpacing, pE) } : {}),
  ...(pT ? { paddingTop: getSpacingValue(sizedSpacing, pT) } : {}),
  ...(pB ? { paddingBottom: getSpacingValue(sizedSpacing, pB) } : {}),
});
