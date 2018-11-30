/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, ViewProps } from 'react-native';

import { OptionalPrimitiveTheme, PrimitiveTheme } from '../PrimitiveTheme';
import {
  OptionalSizedSubTheme,
  OptionalSubTheme,
  SizedSubTheme,
  SubTheme,
} from '../subcomponents';
import { OptionalViewTheme, ViewTheme } from '../views';
import { SuperIconProps } from './SuperIconProps';

export interface SuperIconTheme {
  readonly container: SubTheme<SuperIconProps, ViewProps> &
    SizedSubTheme<ViewTheme<SuperIconProps>>;
  readonly icon: SizedSubTheme<PrimitiveTheme<SuperIconProps, TextProps>>;
}

export interface OptionalSuperIconTheme {
  readonly container?: OptionalSubTheme<SuperIconProps, ViewProps> &
    OptionalSizedSubTheme<OptionalViewTheme<SuperIconProps>>;
  readonly icon?: OptionalSizedSubTheme<
    OptionalPrimitiveTheme<SuperIconProps, TextProps>
  >;
}
