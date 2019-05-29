/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BackdropTheme,
  SurfaceProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform } from 'react-native';

import { getSurfaceContainerStyle } from '../surface/theme';

export const getBackdropSurfaceProps: ViewPropsGetter<SurfaceProps> = () => ({
  pointerEvents: 'auto',
});

export const getBackdropSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getSurfaceContainerStyle(props),
  borderRadius: 0,
  flex: props.flex !== undefined ? props.flex : 1,
  flexDirection: props.flexDirection || 'column',
  height: props.dimensions.window.height,
  left: 0,
  position: 'absolute',
  top: 0,
  width: props.dimensions.window.width,
  ...Platform.select({
    web: {
      cursor: 'default',
      outlineStyle: 'none',
    },
  }),
});

export const backdropTheme: BackdropTheme = {
  surface: () => ({
    getProps: getBackdropSurfaceProps,
    getStyle: getBackdropSurfaceStyle,
  }),
};
