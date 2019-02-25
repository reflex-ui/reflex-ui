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
import { SurfaceProps } from './SurfaceProps';

export interface SurfaceTheme {
  readonly container: InjectableSubTheme<SurfaceProps, ViewProps, ViewStyle>;
}

export interface SurfaceThemeOptional {
  readonly container?: InjectableSubThemeOptional<
    SurfaceProps,
    ViewProps,
    ViewStyle
  >;
}
