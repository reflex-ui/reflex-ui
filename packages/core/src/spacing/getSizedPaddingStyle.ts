/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyleGetter } from '../components/view/ViewStyleGetter';
import { getSizedObjectValue } from '../sizing/getSizedObjectValue';
import { SizedStyleGetterFactory } from '../sizing/SizedStyleGetterFactory';
import { PaddingProps } from './PaddingProps';

export const getSizedPaddingStyle: SizedStyleGetterFactory<
  number | string,
  ViewStyleGetter<PaddingProps>
> = sizedObject => ({
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
      paddingHorizontal: getSizedObjectValue(sizedObject, p),
      paddingVertical: getSizedObjectValue(sizedObject, p),
    }
    : {}),
  ...(pH ? { paddingHorizontal: getSizedObjectValue(sizedObject, pH) } : {}),
  ...(pV ? { paddingVertical: getSizedObjectValue(sizedObject, pV) } : {}),
  ...(pS ? { paddingStart: getSizedObjectValue(sizedObject, pS) } : {}),
  ...(pE ? { paddingEnd: getSizedObjectValue(sizedObject, pE) } : {}),
  ...(pT ? { paddingTop: getSizedObjectValue(sizedObject, pT) } : {}),
  ...(pB ? { paddingBottom: getSizedObjectValue(sizedObject, pB) } : {}),
});
