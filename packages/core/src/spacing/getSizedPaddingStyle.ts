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
}: PaddingProps) => ({
  // prettier-ignore
  ...(p
    ? {
      paddingHorizontal: getSizedDataValue(sizedData, p),
      paddingVertical: getSizedDataValue(sizedData, p),
    }
    : {}),
  ...(pH ? { paddingHorizontal: getSizedDataValue(sizedData, pH) } : {}),
  ...(pV ? { paddingVertical: getSizedDataValue(sizedData, pV) } : {}),
  ...(pS ? { paddingStart: getSizedDataValue(sizedData, pS) } : {}),
  ...(pE ? { paddingEnd: getSizedDataValue(sizedData, pE) } : {}),
  ...(pT ? { paddingTop: getSizedDataValue(sizedData, pT) } : {}),
  ...(pB ? { paddingBottom: getSizedDataValue(sizedData, pB) } : {}),
});
