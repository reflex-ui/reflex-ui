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
  Size,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getThemedOverlayColorByInteractivity } from '../../palette';
import {
  getAllVariantsButtonContainerProps,
  getAllVariantsButtonContainerStyle,
} from '../all-variants/container';

export const defaultButtonContainerSizedStyle: { [key in Size]: ViewStyle } = {
  large: {
    height: 40,
    minWidth: 64,
    paddingHorizontal: 8,
  },
  medium: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 8,
  },
  none: {},
  small: {
    height: 32,
    minWidth: 64,
    paddingHorizontal: 8,
  },
  xlarge: {
    height: 48,
    minWidth: 70,
    paddingHorizontal: 12,
  },
  xsmall: {
    height: 28,
    minWidth: 54,
    paddingHorizontal: 4,
  },
};

export const getDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonContainerStyle(props),
  ...defaultButtonContainerSizedStyle[props.size],
  backgroundColor: getThemedOverlayColorByInteractivity({
    colorTheme: props.colorTheme,
    interactivityType: props.interactivityState.type,
    onColor: true,
    paletteTheme: props.paletteTheme,
  }),
});

export const defaultButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getDefaultButtonContainerStyle,
});
