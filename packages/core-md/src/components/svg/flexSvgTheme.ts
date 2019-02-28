/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  FlexSvgProps,
  FlexSvgTheme,
  FlexSvgThemeOptional,
  getSizedMarginStyle,
  getThemedOnColor,
  InjectableSubThemeOptional,
  rawFlexSvgTheme,
  SizedData,
  SvgPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getSizingStyle } from '../../sizing/getSizingStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

export const flexSvgSvgSizedProps: SizedData<SvgProps> = {
  xxsmall: { height: 50, width: 50 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { height: 100, width: 100 },
  small: { height: 150, width: 150 },
  medium: { height: 200, width: 200 },
  large: { height: 250, width: 250 },
  xlarge: { height: 300, width: 300 },
  xxlarge: { height: 400, width: 400 },
};

export const getSvgColorProps: SvgPropsGetter<FlexSvgProps> = props => {
  const themedColor = getThemedOnColor(props);
  const fill = props.fill ? props.fill : themedColor;
  const color = props.color ? props.color : fill;

  return { color, fill };
};

export const getFlexSvgSvgProps: SvgPropsGetter<FlexSvgProps> = props => ({
  ...flexSvgSvgSizedProps[props.size],
  ...getSvgColorProps(props),
});

export const flexSvgSvgTheme: InjectableSubThemeOptional<
  FlexSvgProps,
  SvgProps,
  ViewStyle
> = {
  getProps: getFlexSvgSvgProps,
};

export const getFlexSvgContainerStyle: ViewStyleGetter<
  FlexSvgProps
> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
});

export const flexSvgContainerTheme: InjectableSubThemeOptional<
  FlexSvgProps,
  SvgProps,
  ViewStyle
> = {
  getStyle: getFlexSvgContainerStyle,
};

export const optionalFlexSvgTheme: FlexSvgThemeOptional = {
  container: flexSvgContainerTheme,
  svg: flexSvgSvgTheme,
};

export const flexSvgTheme: FlexSvgTheme = merge<
  {},
  FlexSvgTheme,
  FlexSvgThemeOptional
>({}, rawFlexSvgTheme, optionalFlexSvgTheme);
