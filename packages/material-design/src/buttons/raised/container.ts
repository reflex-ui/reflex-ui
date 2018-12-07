/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  rawInjectableButtonViewSubTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getLowElevationStylesByInteractivity } from '../../elevation';
import { getContainedButtonContainerStyle } from '../contained/container';

export const getRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...getLowElevationStylesByInteractivity(props.interactivityState.type),
});

export const raisedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getRaisedButtonContainerStyle,
});
