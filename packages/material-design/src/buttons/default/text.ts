/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  getThemedColor,
  InjectableSubTheme,
  // InteractivityType,
  isWeb,
  rawInjectableButtonTextSubTheme,
  TextStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { getAllVariantsButtonTextStyle } from '../all-variants/text';

export const getDefaultButtonTextColorStyle: TextStyleGetter<ButtonProps> = ({
  colorTheme,
  interactivityState,
  invertColor,
  paletteTheme,
}) => ({
  color: getThemedColor({
    colorTheme,
    contained: false,
    interactivityState,
    invertColor,
    onColor: true,
    paletteTheme,
  }),
});

export const getDefaultButtonTextStyle: TextStyleGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  ...getAllVariantsButtonTextStyle(props),
  ...getDefaultButtonTextColorStyle(props),
  marginTop: isWeb ? -3 : 0,
});

export const defaultButtonTextTheme: InjectableSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawInjectableButtonTextSubTheme, {
  getStyle: getDefaultButtonTextStyle,
});
