/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getThemedColor,
  InjectableSubTheme,
  InteractionType,
  TouchableSurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform, ViewProps, ViewStyle } from 'react-native';

export const getTouchableSurfaceContainerStyle: ViewStyleGetter<
  TouchableSurfaceProps
> = props => ({
  backgroundColor: getThemedColor(props),
  ...Platform.select({
    web: {
      cursor:
        props.interactionState.type === InteractionType.Disabled
          ? 'default'
          : 'pointer',
      outline: 'none',
    },
  }),
});

export const touchableSurfaceContainerTheme: InjectableSubTheme<
  TouchableSurfaceProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getTouchableSurfaceContainerStyle,
};
