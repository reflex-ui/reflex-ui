/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

export interface MaterialPaletteColorItem {
  readonly color: PaletteColor;
  readonly name: string;
  readonly tone?: string;
}
