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

// tslint:disable-next-line:max-line-length
import { getAllVariantsButtonLeadingIconStyle } from '../all-variants/sideIcons';
import { getContainedButtonTextColorStyle } from './text';

export const getContainedButtonLeadingIconStyle: TextStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonLeadingIconStyle(props),
  ...getContainedButtonTextColorStyle(props),
});

export const containedButtonLeadingIconTheme: SubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawButtonTextSubTheme, {
  getStyle: getContainedButtonLeadingIconStyle,
});

export const containedButtonTrailingIconTheme: SubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = containedButtonLeadingIconTheme;
