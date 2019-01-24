/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isAndroid, isIOS } from '../../utils';
import { FontWeight } from './FontWeight';
import { FontWeightValues } from './FontWeightValues';

const androidWeight: FontWeightValues[] = [];
androidWeight[FontWeight.Light] = '300';
androidWeight[FontWeight.Regular] = '400';
androidWeight[FontWeight.Medium] = '500';
androidWeight[FontWeight.Bold] = '700';

const iosWeight: FontWeightValues[] = [];
iosWeight[FontWeight.Light] = '300';
iosWeight[FontWeight.Regular] = '400';
iosWeight[FontWeight.Medium] = '500';
iosWeight[FontWeight.Bold] = '700';

const webWeight: FontWeightValues[] = [];
webWeight[FontWeight.Light] = '300';
webWeight[FontWeight.Regular] = '400';
webWeight[FontWeight.Medium] = '500';
webWeight[FontWeight.Bold] = '700';

export const getFontWeight = (weight: FontWeight): FontWeightValues => {
  if (isAndroid) return androidWeight[weight];
  if (isIOS) return iosWeight[weight];
  return webWeight[weight];
};
