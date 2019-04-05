/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  getThemedOnColor,
  SizedData,
  SvgPropsGetter,
} from '@reflex-ui/core';
import { SvgProps } from 'react-native-svg';

export const allVariantsButtonIconSizedProps: SizedData<SvgProps> = {
  xxsmall: { height: 16, width: 16 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { height: 20, width: 20 },
  small: { height: 24, width: 24 },
  medium: { height: 24, width: 24 },
  large: { height: 28, width: 28 },
  xlarge: { height: 36, width: 36 },
  xxlarge: { height: 52, width: 52 },
};

export const getAllVariantsButtonIconProps: SvgPropsGetter<
  ButtonProps
> = props => ({
  ...(props.size && allVariantsButtonIconSizedProps[props.size]),
  fill: getThemedOnColor(props),
});
