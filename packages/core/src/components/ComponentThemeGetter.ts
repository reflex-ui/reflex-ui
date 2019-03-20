/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../utils-ts/Function1';

export type ComponentThemeGetter<ComponentProps, ComponentTheme> = Function1<
  ComponentProps,
  ComponentTheme
>;
