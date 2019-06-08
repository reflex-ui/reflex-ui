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

import { getAllVariantsButtonIconProps } from '../all-variants/icon';

export const getIconButtonIconTheme: ComponentThemeGetter<
  ButtonProps,
  RfxSvgTheme
> = (props): RfxSvgTheme => ({
  svg: {
    getProps: () => getAllVariantsButtonIconProps(props),
  },
});
