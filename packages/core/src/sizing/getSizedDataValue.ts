/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isSizeEnumValue } from '../sizing/isSizeEnumValue';
import { Size } from './Size';
import { SizedData } from './SizedData';

export const getSizedDataValue = <Data extends SizedData<Value>, Value>(
  sizedObject: Data,
  size: Value,
) =>
  typeof size === 'string' && isSizeEnumValue(size)
    ? sizedObject[size as Size]
    : size;
