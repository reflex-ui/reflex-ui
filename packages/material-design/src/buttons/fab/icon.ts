/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  rawInjectableButtonTextSubTheme,
  Size,
  TextStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { getAllVariantsButtonIconStyle } from '../all-variants/icon';
import { getContainedButtonTextColorStyle } from '../contained/text';

export const getFabButtonIconStyle: TextStyleGetter<ButtonProps> = props => ({
  ...getAllVariantsButtonIconStyle(props),
  ...getContainedButtonTextColorStyle(props),
  ...(props.size === Size.S ? { fontSize: 24 } : {}),
});

export const fabButtonIconTheme: InjectableSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawInjectableButtonTextSubTheme, {
  getStyle: getFabButtonIconStyle,
});
