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

export const iconButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    borderRadius: 14,
    height: 28,
    minWidth: 28,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderRadius: 16,
    height: 32,
    minWidth: 32,
  },
  small: {
    borderRadius: 20,
    height: 40,
    minWidth: 40,
  },
  medium: {
    borderRadius: 24,
    height: 48,
    minWidth: 48,
  },
  large: {
    borderRadius: 28,
    height: 56,
    minWidth: 56,
  },
  xlarge: {
    borderRadius: 36,
    height: 72,
    minWidth: 72,
  },
  xxlarge: {
    borderRadius: 44,
    height: 88,
    minWidth: 88,
  },
};

export const getIconButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getAllVariantsButtonContainerStyle(props),
  ...(props.size && iconButtonContainerSizedStyle[props.size]),
});

export const getIconButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getIconButtonContainerStyle,
});
