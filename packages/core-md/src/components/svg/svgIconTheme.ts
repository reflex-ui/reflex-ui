/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
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
import { getSvgColorProps } from './rfxSvgTheme';

export const svgIconSvgSizedProps: SizedData<SvgProps> = {
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
  xlarge: { height: 40, width: 40 },
  xxlarge: { height: 48, width: 48 },
};

export const getSvgIconSvgProps: SvgPropsGetter<RfxSvgProps> = props => ({
  ...svgIconSvgSizedProps[props.size],
  ...getSvgColorProps(props),
});

export const svgIconSvgTheme: InjectableSubTheme<
  RfxSvgProps,
  SvgProps,
  ViewStyle
> = {
  getProps: getSvgIconSvgProps,
};

export const getSvgIconContainerStyle: ViewStyleGetter<
  RfxSvgProps
> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
});

export const svgIconContainerTheme: InjectableSubTheme<
  RfxSvgProps,
  SvgProps,
  ViewStyle
> = {
  getStyle: getSvgIconContainerStyle,
};

export const svgIconTheme: RfxSvgTheme = {
  container: svgIconContainerTheme,
  svg: svgIconSvgTheme,
};
