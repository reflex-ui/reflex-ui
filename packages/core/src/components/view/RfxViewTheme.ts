/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyle } from 'react-native';

import { BuiltInSimpleComponentTheme } from '../SimpleComponentTheme';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';

export type RfxViewTheme = BuiltInSimpleComponentTheme<
  RfxViewProps,
  RfxViewPropsOptional,
  ViewStyle
>;
