/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, SvgChildTheme } from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { getAllVariantsButtonLeadingIconProps } from '../all-variants/sideIcons';

export const containedButtonLeadingIconTheme: SvgChildTheme<ButtonProps> = {
  getProps: getAllVariantsButtonLeadingIconProps,
};

export const containedButtonTrailingIconTheme: SvgChildTheme<
  ButtonProps
> = containedButtonLeadingIconTheme;
