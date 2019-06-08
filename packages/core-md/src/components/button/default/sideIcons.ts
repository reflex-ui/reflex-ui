/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  RfxSvgTheme,
} from '@reflex-ui/core';

import {
  getAllVariantsButtonLeadingIconProps,
  getAllVariantsButtonTrailingIconProps,
} from '../all-variants/sideIcons';

export const getDefaultButtonLeadingIconTheme: ComponentThemeGetter<
  ButtonProps,
  RfxSvgTheme
> = (props): RfxSvgTheme => ({
  svg: {
    getProps: () => getAllVariantsButtonLeadingIconProps(props),
  },
});

export const getDefaultButtonTrailingIconTheme: ComponentThemeGetter<
  ButtonProps,
  RfxSvgTheme
> = (props): RfxSvgTheme => ({
  svg: {
    getProps: () => getAllVariantsButtonTrailingIconProps(props),
  },
});
