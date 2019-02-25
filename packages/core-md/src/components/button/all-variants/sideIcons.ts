/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalSubTheme,
  Size,
  SvgPropsGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getAllVariantsButtonIconProps } from './icon';

export const allVariantsButtonLeadingIconSizedProps: {
  [key in Size]: SvgProps
} = {
  xxsmall: { height: 14, width: 14 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { height: 15, width: 15 },
  small: { height: 16, width: 16 },
  medium: { height: 18, width: 18 },
  large: { height: 20, width: 20 },
  xlarge: { height: 24, width: 24 },
  xxlarge: { height: 32, width: 32 },
};

export const getAllVariantsButtonLeadingIconProps: SvgPropsGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonIconProps(props),
  ...allVariantsButtonLeadingIconSizedProps[props.size],
});

// tslint:disable-next-line:max-line-length
export const getAllVariantsButtonTrailingIconProps = getAllVariantsButtonLeadingIconProps;

export const allVariantsButtonLeadingIconTheme: OptionalSubTheme<
  ButtonProps,
  SvgProps,
  ViewStyle
> = {
  getProps: getAllVariantsButtonLeadingIconProps,
};

export const allVariantsButtonTrailingIconTheme: OptionalSubTheme<
  ButtonProps,
  SvgProps,
  ViewStyle
> = allVariantsButtonLeadingIconTheme;
