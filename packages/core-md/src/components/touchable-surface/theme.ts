/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionType,
  SurfaceProps,
  TouchableSurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform } from 'react-native';

export const getTouchableSurfaceSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  borderRadius: 0,
  ...Platform.select({
    web: {
      cursor:
        props.interactionState.type === InteractionType.Disabled
          ? 'default'
          : 'pointer',
      outlineStyle: 'none',
    },
  }),
});

export const touchableSurfaceTheme: TouchableSurfaceTheme = {
  surface: () => ({
    getStyle: getTouchableSurfaceSurfaceStyle,
  }),
};
