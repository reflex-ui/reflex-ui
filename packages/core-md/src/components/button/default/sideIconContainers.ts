/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, ViewStyleGetter, ViewTheme } from '@reflex-ui/core';

import {
  getAllVariantsButtonLeadingIconContainerStyle,
  getAllVariantsButtonTrailingIconContainerStyle,
} from '../all-variants/sideIconContainers';

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

export const defaultButtonLeadingIconContainerTheme: ViewTheme<ButtonProps> = {
  getStyle: getDefaultButtonLeadingIconContainerStyle,
};

export const defaultButtonTrailingIconContainerTheme: ViewTheme<ButtonProps> = {
  getStyle: getAllVariantsButtonTrailingIconContainerStyle,
};
