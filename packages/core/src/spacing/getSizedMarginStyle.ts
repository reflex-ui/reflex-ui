/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../sizing/Size';
import { MarginProps } from './MarginProps';
import { SizedSpacing } from './SizedSpacing';
import { SizedSpacingStyleGetter } from './SizedSpacingStyleGetter';

const getMarginValue = (sizedSpacing: SizedSpacing, size: Size | number) =>
  Number.isFinite(size as number) ? size : sizedSpacing[size as Size];

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
      marginHorizontal: getMarginValue(sizedSpacing, m),
      marginVertical: getMarginValue(sizedSpacing, m),
    }
    : {}),
  ...(mH ? { marginHorizontal: getMarginValue(sizedSpacing, mH) } : {}),
  ...(mV ? { marginVertical: getMarginValue(sizedSpacing, mV) } : {}),
  ...(mS ? { marginStart: getMarginValue(sizedSpacing, mS) } : {}),
  ...(mE ? { marginEnd: getMarginValue(sizedSpacing, mE) } : {}),
  ...(mT ? { marginTop: getMarginValue(sizedSpacing, mT) } : {}),
  ...(mB ? { marginBottom: getMarginValue(sizedSpacing, mB) } : {}),
});
