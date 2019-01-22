/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getThemedColor,
  OptionalInjectableSubTheme,
  OptionalSuperIconTheme,
  rawSuperIconTheme,
  Size,
  SuperIconProps,
  SuperIconTheme,
  TextStyleGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import {
  Platform,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { sizedSpacing } from '../spacing/sizedSpacing';

export const superIconIconSizedStyle: { [key in Size]: TextStyle } = {
  xxsmall: { fontSize: 12 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { fontSize: 16 },
  small: { fontSize: 20 },
  medium: { fontSize: 24 },
  large: { fontSize: 32 },
  xlarge: { fontSize: 48 },
  xxlarge: { fontSize: 64 },
};

export const getSuperIconIconStyle: TextStyleGetter<
  SuperIconProps
> = props => ({
  ...superIconIconSizedStyle[props.size],
  color: props.color ? props.color : getThemedColor(props),
  ...Platform.select<TextStyle>({
    web: {
      userSelect: 'none',
    },
  }),
});

export const superIconIconTheme: OptionalInjectableSubTheme<
  SuperIconProps,
  TextProps,
  TextStyle
> = {
  getStyle: getSuperIconIconStyle,
};

export const getSuperIconContainerStyle: ViewStyleGetter<
  SuperIconProps
> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
});

export const superIconContainerTheme: OptionalInjectableSubTheme<
  SuperIconProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getSuperIconContainerStyle,
};

export const optionalSuperIconTheme: OptionalSuperIconTheme = {
  container: superIconContainerTheme,
  icon: superIconIconTheme,
};

export const iconTheme: SuperIconTheme = merge<
  {},
  SuperIconTheme,
  OptionalSuperIconTheme
>({}, rawSuperIconTheme, optionalSuperIconTheme);
