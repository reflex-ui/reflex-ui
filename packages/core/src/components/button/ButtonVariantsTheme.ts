/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from './ButtonTheme';

export interface ButtonVariantsTheme {
  readonly contained: ButtonTheme;
  readonly containedShaped: ButtonTheme;
  readonly default: ButtonTheme;
  readonly fab: ButtonTheme;
  readonly highlighted: ButtonTheme;
  readonly icon: ButtonTheme;
  readonly outlined: ButtonTheme;
  readonly outlinedShaped: ButtonTheme;
  readonly xfab: ButtonTheme;
}
