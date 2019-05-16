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
}: MarginProps): MarginProps => ({
  ...(m !== undefined && m !== null
    ? {
        marginHorizontal: getSizedDataValue(sizedData, m),
        marginVertical: getSizedDataValue(sizedData, m),
      }
    : {}),
  ...(mH !== undefined && mH !== null
    ? { marginHorizontal: getSizedDataValue(sizedData, mH) }
    : {}),
  ...(mV !== undefined && mV !== null
    ? { marginVertical: getSizedDataValue(sizedData, mV) }
    : {}),
  ...(mS !== undefined && mS !== null
    ? { marginStart: getSizedDataValue(sizedData, mS) }
    : {}),
  ...(mE !== undefined && mE !== null
    ? { marginEnd: getSizedDataValue(sizedData, mE) }
    : {}),
  ...(mT !== undefined && mT !== null
    ? { marginTop: getSizedDataValue(sizedData, mT) }
    : {}),
  ...(mB !== undefined && mB !== null
    ? { marginBottom: getSizedDataValue(sizedData, mB) }
    : {}),
});
