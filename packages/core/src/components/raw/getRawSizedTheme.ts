/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveTheme } from '../PrimitiveTheme';
import { SizedSubTheme } from '../subcomponents/SizedSubTheme';
import { getRawPrimitiveTheme } from './getRawPrimitiveTheme';

export const getRawSizedTheme = <
  ComponentProps,
  PrimitiveProps
>(): SizedSubTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>> => ({
  allSizes: getRawPrimitiveTheme<PrimitiveProps>(),
  large: getRawPrimitiveTheme<PrimitiveProps>(),
  medium: getRawPrimitiveTheme<PrimitiveProps>(),
  none: getRawPrimitiveTheme<PrimitiveProps>(),
  small: getRawPrimitiveTheme<PrimitiveProps>(),
  xlarge: getRawPrimitiveTheme<PrimitiveProps>(),
  xsmall: getRawPrimitiveTheme<PrimitiveProps>(),
});
