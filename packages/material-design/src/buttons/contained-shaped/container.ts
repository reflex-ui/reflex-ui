/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  rawInjectableButtonViewSubTheme,
  Size,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getContainedButtonContainerStyle } from '../contained/container';

export const containedShapedButtonContainerSizedStyle: {
  [key in Size]: ViewStyle
} = {
  large: { borderRadius: 20 },
  medium: { borderRadius: 18 },
  none: {},
  small: { borderRadius: 16 },
  xlarge: { borderRadius: 24 },
  xsmall: { borderRadius: 14 },
};

export const getContainedShapedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...containedShapedButtonContainerSizedStyle[props.size],
});

export const containedShapedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getContainedShapedButtonContainerStyle,
});
