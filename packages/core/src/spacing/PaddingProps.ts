/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../sizing/Size';

export interface PaddingProps {
  readonly padding?: Size | number;
  readonly paddingBottom?: Size | number;
  readonly paddingEnd?: Size | number;
  readonly paddingHorizontal?: Size | number;
  readonly paddingStart?: Size | number;
  readonly paddingTop?: Size | number;
  readonly paddingVertical?: Size | number;
}
