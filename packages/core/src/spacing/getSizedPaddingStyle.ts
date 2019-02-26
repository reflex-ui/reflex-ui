/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyleGetter } from '../components/view/ViewStyleGetter';
import { getSizedDataValue } from '../sizing/getSizedDataValue';
import { SizedStyleGetterFactory } from '../sizing/SizedStyleGetterFactory';
import { PaddingProps } from './PaddingProps';

export const getSizedPaddingStyle: SizedStyleGetterFactory<
  number | string,
  ViewStyleGetter<PaddingProps>
> = sizedData => ({
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
