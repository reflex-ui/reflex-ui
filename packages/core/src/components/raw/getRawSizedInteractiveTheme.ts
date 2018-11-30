/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveTheme } from '../PrimitiveTheme';
import { InteractiveSubTheme } from '../subcomponents/InteractiveSubTheme';
import { SizedSubTheme } from '../subcomponents/SizedSubTheme';
import { getRawInteractiveTheme } from './getRawInteractiveTheme';

export const getRawSizedInteractiveTheme = <
  ComponentProps,
  PrimitiveProps
>(): SizedSubTheme<
  InteractiveSubTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>>
> => ({
  allSizes: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  large: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  medium: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  none: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  small: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  xlarge: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  xsmall: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
});
