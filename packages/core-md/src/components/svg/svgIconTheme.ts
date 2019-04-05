/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  RfxSvgProps,
  RfxSvgTheme,
  SizedData,
  SvgPropsGetter,
} from '@reflex-ui/core';
import { SvgProps } from 'react-native-svg';

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
  ...(props.size && svgIconSvgSizedProps[props.size]),
  ...getSvgColorProps(props),
});

export const svgIconTheme: RfxSvgTheme = {
  getProps: getSvgIconSvgProps,
};
