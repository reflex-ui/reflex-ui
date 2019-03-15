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
  ViewStyleGetter,
} from '@reflex-ui/core';

import {
  getAllVariantsButtonLeadingIconContainerStyle,
  getAllVariantsButtonTrailingIconContainerStyle,
} from '../all-variants/sideIconContainers';
import {
  getAllVariantsButtonLeadingIconProps,
  getAllVariantsButtonTrailingIconProps,
} from '../all-variants/sideIcons';

export const getDefaultButtonLeadingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonLeadingIconContainerStyle(props),
  marginStart: 0,
});

export const getDefaultButtonTrailingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonTrailingIconContainerStyle(props),
  marginEnd: 0,
});

export const getDefaultButtonLeadingIconTheme: ComponentThemeGetter<
  ButtonProps,
  RfxSvgTheme
> = (props): RfxSvgTheme => ({
  container: {
    getStyle: () => getDefaultButtonLeadingIconContainerStyle(props),
  },
  svg: {
    getProps: () => getAllVariantsButtonLeadingIconProps(props),
  },
});

export const getDefaultButtonTrailingIconTheme: ComponentThemeGetter<
  ButtonProps,
  RfxSvgTheme
> = (props): RfxSvgTheme => ({
  container: {
    getStyle: () => getAllVariantsButtonTrailingIconContainerStyle(props),
  },
  svg: {
    getProps: () => getAllVariantsButtonTrailingIconProps(props),
  },
});
