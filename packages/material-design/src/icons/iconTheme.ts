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
  SizedMarginStyle,
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

export const iconSizedMarginStyle: SizedMarginStyle = {
  [Size.L]: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  [Size.M]: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  [Size.NONE]: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  [Size.S]: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  [Size.XL]: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  [Size.XS]: {
    marginHorizontal: 2,
    marginVertical: 2,
  },
};

export const superIconIconSizedStyle: { [key in Size]: TextStyle } = {
  large: { fontSize: 32 },
  medium: { fontSize: 24 },
  none: {},
  small: { fontSize: 16 },
  xlarge: { fontSize: 48 },
  xsmall: { fontSize: 12 },
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
  ...getSizedMarginStyle(iconSizedMarginStyle)(props),
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
