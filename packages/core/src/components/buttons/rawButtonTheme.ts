/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle } from 'react-native';

// tslint:disable-next-line:max-line-length
import { getRawInjectableTextSubTheme } from '../raw/getRawInjectableTextSubTheme';
// tslint:disable-next-line:max-line-length
import { getRawInjectableTouchableSubTheme } from '../raw/getRawInjectableTouchableSubTheme';
// tslint:disable-next-line:max-line-length
import { getRawInjectableViewSubTheme } from '../raw/getRawInjectableViewSubTheme';
import { getRawSubTheme } from '../raw/getRawSubTheme';
import { ButtonProps, ButtonTheme, ButtonVariantsTheme } from './';

export const rawInjectableButtonTextSubTheme = getRawInjectableTextSubTheme<
  ButtonProps
>();
// tslint:disable-next-line:max-line-length
export const rawInjectableButtonTouchableSubTheme = getRawInjectableTouchableSubTheme<
  ButtonProps
>();
export const rawInjectableButtonViewSubTheme = getRawInjectableViewSubTheme<
  ButtonProps
>();
export const rawButtonTextSubTheme = getRawSubTheme<TextProps, TextStyle>();

export const rawButtonVariantTheme: ButtonTheme = {
  container: rawInjectableButtonViewSubTheme,
  icon: rawButtonTextSubTheme,
  iconContainer: rawInjectableButtonViewSubTheme,
  leadingIcon: rawButtonTextSubTheme,
  leadingIconContainer: rawInjectableButtonViewSubTheme,
  text: rawInjectableButtonTextSubTheme,
  // prettier-ignore
  touchable: rawInjectableButtonTouchableSubTheme,
  trailingIcon: rawButtonTextSubTheme,
  trailingIconContainer: rawInjectableButtonViewSubTheme,
};

export const rawButtonTheme: ButtonVariantsTheme = {
  contained: rawButtonVariantTheme,
  containedShaped: rawButtonVariantTheme,
  default: rawButtonVariantTheme,
  fab: rawButtonVariantTheme,
  highlighted: rawButtonVariantTheme,
  icon: rawButtonVariantTheme,
  outlined: rawButtonVariantTheme,
  outlinedShaped: rawButtonVariantTheme,
  xfab: rawButtonVariantTheme,
};
