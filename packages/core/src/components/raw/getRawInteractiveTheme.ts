/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveTheme } from '../PrimitiveTheme';
import { InteractiveSubTheme } from '../subcomponents/InteractiveSubTheme';
import { getRawPrimitiveTheme } from './getRawPrimitiveTheme';

export const getRawInteractiveTheme = <
  ComponentProps,
  PrimitiveProps
>(): InteractiveSubTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>> => ({
  allStates: getRawPrimitiveTheme<PrimitiveProps>(),
  disabled: getRawPrimitiveTheme<PrimitiveProps>(),
  enabled: getRawPrimitiveTheme<PrimitiveProps>(),
  focused: getRawPrimitiveTheme<PrimitiveProps>(),
  hovered: getRawPrimitiveTheme<PrimitiveProps>(),
  pressed: getRawPrimitiveTheme<PrimitiveProps>(),
});
