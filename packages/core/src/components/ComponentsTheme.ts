/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonVariantsTheme, OptionalButtonVariantsTheme } from './buttons';
import { OptionalSuperIconTheme, SuperIconTheme } from './icons';
import { OptionalTypographyTheme, TypographyTheme } from './typography';

export interface ComponentsTheme {
  readonly button: ButtonVariantsTheme;
  readonly icon: SuperIconTheme;
  readonly typography: TypographyTheme;
}

export interface OptionalComponentsTheme {
  readonly button?: OptionalButtonVariantsTheme;
  readonly icon?: OptionalSuperIconTheme;
  readonly typography?: OptionalTypographyTheme;
}
