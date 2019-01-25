/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarVariantsTheme } from './app-bars';
import { ButtonVariantsTheme } from './buttons';
import { SuperIconTheme } from './icons';
import { ListTheme } from './list';
import { SurfaceTheme } from './surface';
import { TypographyTheme } from './typography';
import { SuperViewVariantsTheme } from './views';

export interface ComponentsTheme {
  readonly appBar: AppBarVariantsTheme;
  readonly button: ButtonVariantsTheme;
  readonly icon: SuperIconTheme;
  readonly list: ListTheme;
  readonly surface: SurfaceTheme;
  readonly typography: TypographyTheme;
  readonly views: SuperViewVariantsTheme;
}

export type OptionalComponentsTheme = Partial<ComponentsTheme>;
