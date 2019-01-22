/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../sizing/Size';
import { SizedSpacing } from './SizedSpacing';

export const getSpacingValue = (
  sizedSpacing: SizedSpacing,
  size: Size | number,
) => (Number.isFinite(size as number) ? size : sizedSpacing[size as Size]);
