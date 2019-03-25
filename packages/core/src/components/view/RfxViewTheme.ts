/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';

import { BuiltInSimpleComponentTheme } from '../SimpleComponentTheme';
import { RfxViewProps } from './RfxViewProps';

export type RfxViewTheme = BuiltInSimpleComponentTheme<
  RfxViewProps,
  ViewProps,
  ViewStyle
>;
