/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  SizedData,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import {
  getAllVariantsButtonContainerProps,
  getAllVariantsButtonContainerStyle,
} from '../all-variants/container';

export const containedButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    height: 24,
    minWidth: 40,
    paddingHorizontal: 6,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    height: 28,
    minWidth: 52,
    paddingHorizontal: 8,
  },
  small: {
    height: 32,
    minWidth: 56,
    paddingHorizontal: 12,
  },
  medium: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 16,
  },
  large: {
    height: 40,
    minWidth: 72,
    paddingHorizontal: 20,
  },
  xlarge: {
    height: 48,
    minWidth: 80,
    paddingHorizontal: 24,
  },
  xxlarge: {
    height: 64,
    minWidth: 96,
    paddingHorizontal: 40,
  },
};

export const getContainedButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getAllVariantsButtonContainerStyle(props),
  ...(props.size && containedButtonContainerSizedStyle[props.size]),
});

export const getContainedButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getContainedButtonContainerStyle,
});
