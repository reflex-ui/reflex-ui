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

import { getDefaultButtonContainerStyle } from '../default/container';
import { getDefaultButtonTextStyle } from '../default/text';

export const outlinedButtonContainerSizedStyle: { [key in Size]: ViewStyle } = {
  large: {
    borderWidth: 2,
    paddingHorizontal: 18,
  },
  medium: {
    borderWidth: 2,
    paddingHorizontal: 14,
  },
  none: {},
  small: {
    borderWidth: 2,
    paddingHorizontal: 14,
  },
  xlarge: {
    borderWidth: 3,
    paddingHorizontal: 24,
  },
  xsmall: {
    borderWidth: 1,
    paddingHorizontal: 6,
  },
};

export const getOutlinedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getDefaultButtonContainerStyle(props),
  ...outlinedButtonContainerSizedStyle[props.size],
  borderColor: getDefaultButtonTextStyle(props).color,
});

export const outlinedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getOutlinedButtonContainerStyle,
});
