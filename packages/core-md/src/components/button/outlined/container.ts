/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  getOnColor,
  SizedData,
  SurfacePropsBase,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getDefaultButtonContainerStyle } from '../default/container';

export const outlinedButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    borderWidth: 1,
    paddingHorizontal: 4,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderWidth: 1,
    paddingHorizontal: 6,
  },
  small: {
    borderWidth: 2,
    paddingHorizontal: 14,
  },
  medium: {
    borderWidth: 2,
    paddingHorizontal: 14,
  },
  large: {
    borderWidth: 2,
    paddingHorizontal: 20,
  },
  xlarge: {
    borderWidth: 3,
    paddingHorizontal: 24,
  },
  xxlarge: {
    borderWidth: 3,
    paddingHorizontal: 32,
  },
};

export const getOutlinedButtonContainerStyle: ViewStyleGetter<
  SurfacePropsBase
> = props => ({
  ...getDefaultButtonContainerStyle(props),
  ...(props.size && outlinedButtonContainerSizedStyle[props.size]),
  borderColor: getOnColor(props),
});

export const getOutlinedButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getOutlinedButtonContainerStyle,
});
