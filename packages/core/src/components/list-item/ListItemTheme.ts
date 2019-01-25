/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';

import {
  InjectableSubTheme,
  OptionalInjectableSubTheme,
} from '../subcomponents';
import { ListItemProps } from './ListItemProps';

export interface ListItemTheme {
  readonly container: InjectableSubTheme<ListItemProps, ViewProps, ViewStyle>;
}

export interface OptionalListItemTheme {
  readonly container?: OptionalInjectableSubTheme<
    ListItemProps,
    ViewProps,
    ViewStyle
  >;
}
