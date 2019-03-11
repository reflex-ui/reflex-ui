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
import { RfxViewProps } from './RfxViewProps';

export interface RfxViewTheme {
  readonly container: InjectableSubTheme<RfxViewProps, ViewProps, ViewStyle>;
}

export interface RfxViewThemeOptional {
  readonly container?: InjectableSubThemeOptional<
    RfxViewProps,
    ViewProps,
    ViewStyle
  >;
}
