/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  rawButtonIconSubTheme,
  SubTheme,
  SvgPropsGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import {
  allVariantsButtonIconSizedProps,
  getAllVariantsButtonIconProps,
} from '../all-variants/icon';
import { getDefaultButtonTextColorStyle } from '../default/text';

export const getIconButtonIconProps: SvgPropsGetter<ButtonProps> = props => ({
  ...getAllVariantsButtonIconProps(props),
  fill: getDefaultButtonTextColorStyle(props).color,
  ...allVariantsButtonIconSizedProps[props.size],
});

export const iconButtonIconTheme: SubTheme<
  ButtonProps,
  SvgProps,
  ViewStyle
> = merge({}, rawButtonIconSubTheme, {
  getProps: getIconButtonIconProps,
});
