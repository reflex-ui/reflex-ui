/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SizedMarginStyleGetter } from './SizedMarginStyleGetter';

export const getSizedMarginStyle: SizedMarginStyleGetter = sizedStyle => ({
  margin: m,
  marginBottom: mB,
  marginEnd: mE,
  marginHorizontal: mH,
  marginStart: mS,
  marginTop: mT,
  marginVertical: mV,
}) => ({
  ...(m ? sizedStyle[m] : {}),
  ...(mH ? { marginHorizontal: sizedStyle[mH].marginHorizontal } : {}),
  ...(mV ? { marginVertical: sizedStyle[mV].marginVertical } : {}),
  ...(mS ? { marginStart: sizedStyle[mS].marginHorizontal } : {}),
  ...(mE ? { marginEnd: sizedStyle[mE].marginHorizontal } : {}),
  ...(mT ? { marginTop: sizedStyle[mT].marginVertical } : {}),
  ...(mB ? { marginBottom: sizedStyle[mB].marginVertical } : {}),
});
