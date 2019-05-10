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
  TouchableSurfaceVariantsTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform, StyleSheet } from 'react-native';

/*
 * Common Styles
 */

export const getCommonTouchableSurfaceSurfaceProps: ViewPropsGetter<
  SurfaceProps
> = () => ({
  pointerEvents: 'box-only',
});

export const getCommonTouchableSurfaceSurfaceStyle: ViewStyleGetter<
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

/*
 * TouchableSurfaceVariant.Default
 */

export const defaultTouchableSurfaceTheme: TouchableSurfaceTheme = {
  surface: () => ({
    getProps: getCommonTouchableSurfaceSurfaceProps,
    getStyle: getCommonTouchableSurfaceSurfaceStyle,
  }),
};

/*
 * TouchableSurfaceVariant.Overlay
 */

export const getOverlayTouchableSurfaceSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonTouchableSurfaceSurfaceStyle(props),
  ...StyleSheet.absoluteFillObject,
});

export const overlayTouchableSurfaceTheme: TouchableSurfaceTheme = {
  surface: () => ({
    getProps: getCommonTouchableSurfaceSurfaceProps,
    getStyle: getOverlayTouchableSurfaceSurfaceStyle,
  }),
};

/*
 * TouchableSurfaceVariantsTheme
 */

export const touchableSurfaceVariantsTheme: TouchableSurfaceVariantsTheme = {
  default: defaultTouchableSurfaceTheme,
  overlay: overlayTouchableSurfaceTheme,
};
