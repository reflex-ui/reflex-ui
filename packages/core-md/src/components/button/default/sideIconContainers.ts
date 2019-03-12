/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';

import {
  getAllVariantsButtonLeadingIconContainerStyle,
  getAllVariantsButtonTrailingIconContainerStyle,
} from '../all-variants/sideIconContainers';

export const getDefaultButtonLeadingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonLeadingIconContainerStyle(props),
  marginStart: 0,
});

export const defaultButtonLeadingIconContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getDefaultButtonLeadingIconContainerStyle,
};

export const getDefaultButtonTrailingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonTrailingIconContainerStyle(props),
  marginEnd: 0,
});

export const defaultButtonTrailingIconContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getDefaultButtonTrailingIconContainerStyle,
};
