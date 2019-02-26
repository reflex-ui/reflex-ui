/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isSizeEnumValue } from './isSizeEnumValue';
import { Size } from './Size';
import { SizedStyleGetterFactory } from './SizedStyleGetterFactory';
import { SizeObject } from './SizeObject';
import { SizeObjectGetter } from './SizeObjectGetter';

export const getSizedSizeObject: SizedStyleGetterFactory<
  SizeObject,
  SizeObjectGetter
> = sizedObject => ({ height, size, width }) => ({
  ...(typeof size === 'string' && isSizeEnumValue(size)
    ? sizedObject[size as Size]
    : { height: size, width: size }),
  ...(height ? { height } : {}),
  ...(width ? { width } : {}),
});
