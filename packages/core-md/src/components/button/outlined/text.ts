/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubThemeOptional,
  rawInjectableButtonTextSubTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { getAllVariantsButtonTextStyle } from '../all-variants/text';

export const outlinedButtonTextTheme: InjectableSubThemeOptional<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawInjectableButtonTextSubTheme, {
  getStyle: getAllVariantsButtonTextStyle,
});
