/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInViewChildTheme,
  getThemedColor,
  InteractionType,
  TouchableSurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform } from 'react-native';

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

export const touchableSurfaceContainerTheme: BuiltInViewChildTheme<
  TouchableSurfaceProps
> = {
  getStyle: getTouchableSurfaceContainerStyle,
};
