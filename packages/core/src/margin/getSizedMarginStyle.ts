/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
      marginHorizontal: sizedSpacing[m],
      marginVertical: sizedSpacing[m],
    }
    : {}),
  ...(mH ? { marginHorizontal: sizedSpacing[mH] } : {}),
  ...(mV ? { marginVertical: sizedSpacing[mV] } : {}),
  ...(mS ? { marginStart: sizedSpacing[mS] } : {}),
  ...(mE ? { marginEnd: sizedSpacing[mE] } : {}),
  ...(mT ? { marginTop: sizedSpacing[mT] } : {}),
  ...(mB ? { marginBottom: sizedSpacing[mB] } : {}),
});
