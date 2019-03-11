/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import {
  InjectableSubTheme,
  InjectableSubThemeOptional,
  SubTheme,
  SubThemeOptional,
} from '../subcomponents';
import { RfxSvgProps } from './RfxSvgProps';

export interface RfxSvgTheme {
  readonly container: InjectableSubTheme<RfxSvgProps, ViewProps, ViewStyle>;
  readonly svg: SubTheme<RfxSvgProps, SvgProps, ViewStyle>;
}

export interface RfxSvgThemeOptional {
  readonly container?: InjectableSubThemeOptional<
    RfxSvgProps,
    ViewProps,
    ViewStyle
  >;
  readonly svg?: SubThemeOptional<RfxSvgProps, SvgProps, ViewStyle>;
}
