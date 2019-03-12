/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInViewChildTheme, ButtonProps } from '@reflex-ui/core';

import {
  getAllVariantsButtonLeadingIconContainerStyle,
  getAllVariantsButtonTrailingIconContainerStyle,
} from '../all-variants/sideIconContainers';

export const containedButtonLeadingIconContainerTheme: BuiltInViewChildTheme<
  ButtonProps
> = {
  getStyle: getAllVariantsButtonLeadingIconContainerStyle,
};

export const containedButtonTrailingIconContainerTheme: BuiltInViewChildTheme<
  ButtonProps
> = {
  getStyle: getAllVariantsButtonTrailingIconContainerStyle,
};
