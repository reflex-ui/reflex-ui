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

import { getOutlinedButtonContainerStyle } from '../outlined/container';

export const outlinedShapedButtonContainerSizedStyle: {
  [key in Size]: ViewStyle
} = {
  large: { borderRadius: 20 },
  medium: { borderRadius: 18 },
  none: {},
  small: { borderRadius: 16 },
  xlarge: { borderRadius: 24 },
  xsmall: { borderRadius: 14 },
};

export const getOutlinedShapedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getOutlinedButtonContainerStyle(props),
  ...outlinedShapedButtonContainerSizedStyle[props.size],
});

export const outlinedShapedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getOutlinedShapedButtonContainerStyle,
});
