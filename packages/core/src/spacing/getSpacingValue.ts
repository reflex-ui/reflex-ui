/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isSizeEnumValue } from '../sizing/isSizeEnumValue';
import { Size } from '../sizing/Size';
import { SizedSpacing } from './SizedSpacing';

export const getSpacingValue = (
  sizedSpacing: SizedSpacing,
  size: Size | number | string,
) => (isSizeEnumValue(size as string) ? sizedSpacing[size as Size] : size);
