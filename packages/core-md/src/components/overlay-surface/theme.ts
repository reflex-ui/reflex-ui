/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  OverlaySurfaceTheme,
  SurfaceProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { StyleSheet } from 'react-native';

import {
  getSurfaceContainerProps,
  getSurfaceContainerStyle,
} from '../surface/theme';

export const getOverlaySurfaceContainerProps: ViewPropsGetter<
  SurfaceProps
> = props => getSurfaceContainerProps(props);

export const getOverlaySurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getSurfaceContainerStyle(props),
  ...StyleSheet.absoluteFillObject,
});

export const overlaySurfaceTheme: OverlaySurfaceTheme = {
  surface: () => ({
    getProps: getOverlaySurfaceContainerProps,
    getStyle: getOverlaySurfaceContainerStyle,
  }),
};
