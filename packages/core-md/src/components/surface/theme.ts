/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getColor,
  InteractionType,
  SurfaceProps,
  SurfaceTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';
import { Platform } from 'react-native';

import { getCommonRfxViewContainerStyle } from '../view/theme';

export const getSurfaceContainerProps: ViewPropsGetter<
  SurfaceProps
> = props => ({
  ...(props.isTouchableHandler && { pointerEvents: 'box-only' }),
});

export const getSurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  backgroundColor: getColor(props),
  borderRadius: 4,
  flexWrap: 'wrap',
  ...(props.isTouchableHandler &&
    Platform.select({
      web: {
        cursor:
          props.interactionState.type === InteractionType.Disabled
            ? 'default'
            : 'pointer',
        outlineStyle: 'none',
      },
    })),
  ...getCommonRfxViewContainerStyle(props),
  ...(props.elevation !== 0 &&
    props.elevation !== undefined &&
    props.elevation !== null &&
    getElevationStyles(props.elevation, props.interactionState.type)),
});

export const surfaceTheme: SurfaceTheme = {
  getProps: getSurfaceContainerProps,
  getStyle: getSurfaceContainerStyle,
};
