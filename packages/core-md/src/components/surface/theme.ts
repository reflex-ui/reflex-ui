/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getColor,
  InteractionType,
  SurfacePropsBase,
  SurfaceTheme,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';
import { Platform, ViewProps, ViewStyle } from 'react-native';

import { getCommonRfxViewContainerStyle } from '../view/theme';

export const getSurfaceContainerProps = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>(
  props: Props,
): ViewProps => ({
  ...(!props.isTouchableHandler && { pointerEvents: 'box-none' }),
});

export const getSurfaceContainerStyle = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>(
  props: Props,
): ViewStyle => ({
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
  view: {
    getProps: getSurfaceContainerProps,
    getStyle: getSurfaceContainerStyle,
  },
};
