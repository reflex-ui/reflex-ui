/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, rawButtonTextSubTheme, SubTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { getAllVariantsButtonIconStyle } from '../all-variants/icon';

export const containedButtonIconTheme: SubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawButtonTextSubTheme, {
  getStyle: getAllVariantsButtonIconStyle,
});
