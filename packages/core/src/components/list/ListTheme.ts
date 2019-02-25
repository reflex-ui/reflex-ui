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
import { ListProps } from './ListProps';

export interface ListTheme {
  readonly container: InjectableSubTheme<ListProps, ViewProps, ViewStyle>;
}

export interface ListThemeOptional {
  readonly container?: InjectableSubThemeOptional<
    ListProps,
    ViewProps,
    ViewStyle
  >;
}
