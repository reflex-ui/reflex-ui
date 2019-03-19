/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextStyle } from 'react-native';

import { BuiltInSimpleComponentTheme } from '../SimpleComponentTheme';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';

export type RfxTextTheme = BuiltInSimpleComponentTheme<
  RfxTextProps,
  RfxTextPropsOptional,
  TextStyle
>;
