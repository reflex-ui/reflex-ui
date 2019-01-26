/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../sizing/Size';

export interface PaddingProps {
  readonly padding?: Size | number | string;
  readonly paddingBottom?: Size | number | string;
  readonly paddingEnd?: Size | number | string;
  readonly paddingHorizontal?: Size | number | string;
  readonly paddingStart?: Size | number | string;
  readonly paddingTop?: Size | number | string;
  readonly paddingVertical?: Size | number | string;
}
