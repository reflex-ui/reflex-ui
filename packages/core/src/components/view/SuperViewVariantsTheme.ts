/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalSuperViewTheme, SuperViewTheme } from './SuperViewTheme';

export interface SuperViewVariantsTheme {
  readonly column: SuperViewTheme;
  readonly row: SuperViewTheme;
}

export type OptionalSuperViewVariantsTheme = {
  [P in keyof SuperViewVariantsTheme]?: OptionalSuperViewTheme
};
