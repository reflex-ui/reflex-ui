/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyleGetter } from '../components/view/ViewStyleGetter';
import { getSizedDataValue } from '../sizing/getSizedDataValue';
import { SizedStyleGetterFactory } from '../sizing/SizedStyleGetterFactory';
import { MarginProps } from './MarginProps';

export const getSizedMarginStyle: SizedStyleGetterFactory<
  number | string,
  ViewStyleGetter<MarginProps>
> = sizedData => ({
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
      marginHorizontal: getSizedDataValue(sizedData, m),
      marginVertical: getSizedDataValue(sizedData, m),
    }
    : {}),
  ...(mH ? { marginHorizontal: getSizedDataValue(sizedData, mH) } : {}),
  ...(mV ? { marginVertical: getSizedDataValue(sizedData, mV) } : {}),
  ...(mS ? { marginStart: getSizedDataValue(sizedData, mS) } : {}),
  ...(mE ? { marginEnd: getSizedDataValue(sizedData, mE) } : {}),
  ...(mT ? { marginTop: getSizedDataValue(sizedData, mT) } : {}),
  ...(mB ? { marginBottom: getSizedDataValue(sizedData, mB) } : {}),
});
