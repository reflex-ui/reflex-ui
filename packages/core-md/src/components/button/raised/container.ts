/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInViewChildTheme,
  ButtonProps,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getLowElevationStylesByInteraction } from '../../../elevation';
import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getContainedButtonContainerStyle } from '../contained/container';

export const getRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...getLowElevationStylesByInteraction(props.interactionState.type),
});

export const raisedButtonContainerTheme: BuiltInViewChildTheme<ButtonProps> = {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getRaisedButtonContainerStyle,
};
