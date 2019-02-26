/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyleGetter } from '../components/view/ViewStyleGetter';
import { getSizedObjectValue } from '../sizing/getSizedObjectValue';
import { SizedStyleGetterFactory } from '../sizing/SizedStyleGetterFactory';
import { MarginProps } from './MarginProps';

export const getSizedMarginStyle: SizedStyleGetterFactory<
  number | string,
  ViewStyleGetter<MarginProps>
> = sizedObject => ({
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
      marginHorizontal: getSizedObjectValue(sizedObject, m),
      marginVertical: getSizedObjectValue(sizedObject, m),
    }
    : {}),
  ...(mH ? { marginHorizontal: getSizedObjectValue(sizedObject, mH) } : {}),
  ...(mV ? { marginVertical: getSizedObjectValue(sizedObject, mV) } : {}),
  ...(mS ? { marginStart: getSizedObjectValue(sizedObject, mS) } : {}),
  ...(mE ? { marginEnd: getSizedObjectValue(sizedObject, mE) } : {}),
  ...(mT ? { marginTop: getSizedObjectValue(sizedObject, mT) } : {}),
  ...(mB ? { marginBottom: getSizedObjectValue(sizedObject, mB) } : {}),
});
