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
  TextStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

// tslint:disable-next-line:max-line-length
import { getAllVariantsButtonLeadingIconStyle } from '../all-variants/sideIcons';
import { getDefaultButtonTextColorStyle } from './text';

export const getDefaultButtonLeadingIconStyle: TextStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonLeadingIconStyle(props),
  ...getDefaultButtonTextColorStyle(props),
});

export const defaultButtonLeadingIconTheme: InjectableSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawInjectableButtonTextSubTheme, {
  getStyle: getDefaultButtonLeadingIconStyle,
});

export const defaultButtonTrailingIconTheme: InjectableSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = defaultButtonLeadingIconTheme;
