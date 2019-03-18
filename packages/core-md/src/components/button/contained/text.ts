/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInTextTheme,
  ButtonProps,
  TextStyleGetter,
} from '@reflex-ui/core';

import { getAllVariantsButtonTextStyle } from '../all-variants/text';

export const getContainedButtonTextStyle: TextStyleGetter<ButtonProps> = (
  props: ButtonProps,
) => getAllVariantsButtonTextStyle(props);

export const containedButtonTextTheme: BuiltInTextTheme<ButtonProps> = {
  getStyle: getContainedButtonTextStyle,
};
