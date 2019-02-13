/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  isSizeEnumValue,
  OptionalInjectableSubTheme,
  OptionalSuperIconTheme,
  rawSuperIconTheme,
  Size,
  SuperIconProps,
  SuperIconTheme,
  SvgPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getSizingStyle } from '../../sizing/getSizingStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';
import { getDefaultTypographyColorStyle } from '../typography/theme';

export const superIconIconSizedProps: { [key in Size]: SvgProps } = {
  xxsmall: { height: 12, width: 12 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { height: 16, width: 16 },
  small: { height: 20, width: 20 },
  medium: { height: 24, width: 24 },
  large: { height: 32, width: 32 },
  xlarge: { height: 48, width: 48 },
  xxlarge: { height: 64, width: 64 },
};

export const getSvgIconSize = (props: SuperIconProps) => ({
  ...(isSizeEnumValue(props.size as string)
    ? superIconIconSizedProps[props.size]
    : { height: props.size, width: props.size }),
  ...(props.height ? { height: props.height } : {}),
  ...(props.width ? { width: props.width } : {}),
});

export const getSuperIconIconProps: SvgPropsGetter<SuperIconProps> = props => ({
  ...getSvgIconSize(props),
  fill: props.color ? props.color : getDefaultTypographyColorStyle(props).color,
  viewBox: '0 0 24 24',
});

export const superIconIconTheme: OptionalInjectableSubTheme<
  SuperIconProps,
  SvgProps,
  ViewStyle
> = {
  getProps: getSuperIconIconProps,
};

export const getSuperIconContainerStyle: ViewStyleGetter<
  SuperIconProps
> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
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
