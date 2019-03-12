/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, SubTheme } from '@reflex-ui/core';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getAllVariantsButtonIconProps } from '../all-variants/icon';

export const defaultButtonIconTheme: SubTheme<
  ButtonProps,
  SvgProps,
  ViewStyle
> = {
  getProps: getAllVariantsButtonIconProps,
};
