/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../sizing/Size';

export interface MarginProps {
  readonly margin?: Size | number | string;
  readonly marginBottom?: Size | number | string;
  readonly marginEnd?: Size | number | string;
  readonly marginHorizontal?: Size | number | string;
  readonly marginStart?: Size | number | string;
  readonly marginTop?: Size | number | string;
  readonly marginVertical?: Size | number | string;
}
