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

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getContainedButtonContainerStyle } from '../contained/container';

export const containedShapedButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: { borderRadius: 12 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { borderRadius: 14 },
  small: { borderRadius: 16 },
  medium: { borderRadius: 18 },
  large: { borderRadius: 20 },
  xlarge: { borderRadius: 24 },
  xxlarge: { borderRadius: 32 },
};

export const getContainedShapedButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...(props.size && containedShapedButtonContainerSizedStyle[props.size]),
});

export const getContainedShapedButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getContainedShapedButtonContainerStyle,
});
