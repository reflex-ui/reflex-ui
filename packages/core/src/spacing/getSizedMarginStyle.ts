/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getSpacingValue } from './getSpacingValue';
import { MarginProps } from './MarginProps';
import { SizedSpacingStyleGetter } from './SizedSpacingStyleGetter';

export const getSizedMarginStyle: SizedSpacingStyleGetter<
  MarginProps
> = sizedSpacing => ({
  margin: m,
  marginBottom: mB,
  marginEnd: mE,
  marginHorizontal: mH,
  marginStart: mS,
  marginTop: mT,
  marginVertical: mV,
}) => ({
  // prettier-ignore
  ...(m
    ? {
      marginHorizontal: getSpacingValue(sizedSpacing, m),
      marginVertical: getSpacingValue(sizedSpacing, m),
    }
    : {}),
  ...(mH ? { marginHorizontal: getSpacingValue(sizedSpacing, mH) } : {}),
  ...(mV ? { marginVertical: getSpacingValue(sizedSpacing, mV) } : {}),
  ...(mS ? { marginStart: getSpacingValue(sizedSpacing, mS) } : {}),
  ...(mE ? { marginEnd: getSpacingValue(sizedSpacing, mE) } : {}),
  ...(mT ? { marginTop: getSpacingValue(sizedSpacing, mT) } : {}),
  ...(mB ? { marginBottom: getSpacingValue(sizedSpacing, mB) } : {}),
});
