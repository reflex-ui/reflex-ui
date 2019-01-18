/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../sizing/Size';

export interface MarginProps {
  readonly margin?: Size | number;
  readonly marginBottom?: Size | number;
  readonly marginEnd?: Size | number;
  readonly marginHorizontal?: Size | number;
  readonly marginStart?: Size | number;
  readonly marginTop?: Size | number;
  readonly marginVertical?: Size | number;
}
