/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getThemedOnColor,
  InjectableSubTheme,
  RfxSvgProps,
  RfxSvgTheme,
  SizedData,
  SvgPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getSizingStyle } from '../../sizing/getSizingStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

export const rfxSvgSvgSizedProps: SizedData<SvgProps> = {
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

export const getSvgColorProps: SvgPropsGetter<RfxSvgProps> = props => {
  const themedColor = getThemedOnColor(props);
  const fill = props.fill ? props.fill : themedColor;
  const color = props.color ? props.color : fill;

  return { color, fill };
};

export const getRfxSvgSvgProps: SvgPropsGetter<RfxSvgProps> = props => ({
  ...rfxSvgSvgSizedProps[props.size],
  ...getSvgColorProps(props),
});

export const rfxSvgSvgTheme: InjectableSubTheme<
  RfxSvgProps,
  SvgProps,
  ViewStyle
> = {
  getProps: getRfxSvgSvgProps,
};

export const getRfxSvgContainerStyle: ViewStyleGetter<RfxSvgProps> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
});

export const rfxSvgContainerTheme: InjectableSubTheme<
  RfxSvgProps,
  SvgProps,
  ViewStyle
> = {
  getStyle: getRfxSvgContainerStyle,
};

export const rfxSvgTheme: RfxSvgTheme = {
  container: rfxSvgContainerTheme,
  svg: rfxSvgSvgTheme,
};
