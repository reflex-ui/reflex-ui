/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';

import {
  InjectableSubTheme,
  InjectableSubThemeOptional,
} from '../subcomponents';
import { SuperViewProps } from './SuperViewProps';

export interface SuperViewTheme {
  readonly container: InjectableSubTheme<SuperViewProps, ViewProps, ViewStyle>;
}

export interface SuperViewThemeOptional {
  readonly container?: InjectableSubThemeOptional<
    SuperViewProps,
    ViewProps,
    ViewStyle
  >;
}
