/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getSizedDataValue } from '../sizing/getSizedDataValue';
import { SizedData } from '../sizing/SizedData';
import { PaddingProps } from './PaddingProps';

export const getSizedPaddingStyle = (
  sizedData: SizedData<number | string>,
) => ({
  padding: p,
  paddingBottom: pB,
  paddingEnd: pE,
  paddingHorizontal: pH,
  paddingStart: pS,
  paddingTop: pT,
  paddingVertical: pV,
}: PaddingProps): PaddingProps => ({
  ...(p !== undefined && p !== null
    ? {
        paddingHorizontal: getSizedDataValue(sizedData, p),
        paddingVertical: getSizedDataValue(sizedData, p),
      }
    : {}),
  ...(pH !== undefined && pH !== null
    ? { paddingHorizontal: getSizedDataValue(sizedData, pH) }
    : {}),
  ...(pV !== undefined && pV !== null
    ? { paddingVertical: getSizedDataValue(sizedData, pV) }
    : {}),
  ...(pS !== undefined && pS !== null
    ? { paddingStart: getSizedDataValue(sizedData, pS) }
    : {}),
  ...(pE !== undefined && pE !== null
    ? { paddingEnd: getSizedDataValue(sizedData, pE) }
    : {}),
  ...(pT !== undefined && pT !== null
    ? { paddingTop: getSizedDataValue(sizedData, pT) }
    : {}),
  ...(pB !== undefined && pB !== null
    ? { paddingBottom: getSizedDataValue(sizedData, pB) }
    : {}),
});
