/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getOnColor,
  RfxSvgProps,
  RfxSvgTheme,
  SizedData,
  SvgPropsGetter,
} from '@reflex-ui/core';
import { SvgProps } from 'react-native-svg';

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
  const themedColor = getOnColor(props);
  const fill = props.fill ? props.fill : themedColor;
  const color = props.color ? props.color : fill;

  return { color, fill };
};

export const getRfxSvgSvgProps: SvgPropsGetter<RfxSvgProps> = props => ({
  ...(props.size && rfxSvgSvgSizedProps[props.size]),
  ...getSvgColorProps(props),
});

export const rfxSvgTheme: RfxSvgTheme = {
  svg: {
    getProps: getRfxSvgSvgProps,
  },
};
