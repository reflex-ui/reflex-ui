/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  rawButtonTextSubTheme,
  SubTheme,
  TextStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import {
  allVariantsButtonIconSizedStyle,
  getAllVariantsButtonIconStyle,
} from '../all-variants/icon';
import { getDefaultButtonTextColorStyle } from '../default/text';

export const getIconButtonIconStyle: TextStyleGetter<ButtonProps> = props => ({
  ...getAllVariantsButtonIconStyle(props),
  ...getDefaultButtonTextColorStyle(props),
  ...allVariantsButtonIconSizedStyle[props.size],
});

export const iconButtonIconTheme: SubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawButtonTextSubTheme, {
  getStyle: getIconButtonIconStyle,
});
