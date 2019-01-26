/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getThemedColor,
  InjectableSubTheme,
  rawInjectableTouchableSurfaceViewSubTheme,
  TouchableSurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

export const getTouchableSurfaceContainerStyle: ViewStyleGetter<
  TouchableSurfaceProps
> = props => ({
  backgroundColor: getThemedColor({
    colorTheme: props.colorTheme,
    contained: false,
    interactionState: props.interactionState,
    paletteTheme: props.paletteTheme,
  }),
});

export const touchableSurfaceContainerTheme: InjectableSubTheme<
  TouchableSurfaceProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableTouchableSurfaceViewSubTheme, {
  getStyle: getTouchableSurfaceContainerStyle,
});