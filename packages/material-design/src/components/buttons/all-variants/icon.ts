/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalSubTheme,
  Size,
  TextStyleGetter,
} from '@reflex-ui/core';
import { Platform, TextProps, TextStyle } from 'react-native';

export const allVariantsButtonIconSizedStyle: { [key in Size]: TextStyle } = {
  xxsmall: { fontSize: 16 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { fontSize: 20 },
  small: { fontSize: 24 },
  medium: { fontSize: 24 },
  large: { fontSize: 28 },
  xlarge: { fontSize: 36 },
  xxlarge: { fontSize: 52 },
};

export const getAllVariantsButtonIconStyle: TextStyleGetter<ButtonProps> = ({
  size,
}) => ({
  ...allVariantsButtonIconSizedStyle[size],
  ...Platform.select<TextStyle>({
    web: {
      userSelect: 'none',
    },
  }),
});

export const allVariantsButtonIconTheme: OptionalSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = {
  getStyle: getAllVariantsButtonIconStyle,
};
