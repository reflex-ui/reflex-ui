/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getSizedDataValue } from '../sizing/getSizedDataValue';
import { SizedData } from '../sizing/SizedData';
import { MarginProps } from './MarginProps';

export const getSizedMarginStyle = (sizedData: SizedData<number | string>) => ({
  margin: m,
  marginBottom: mB,
  marginEnd: mE,
  marginHorizontal: mH,
  marginStart: mS,
  marginTop: mT,
  marginVertical: mV,
}: MarginProps) => ({
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
