/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSheetTheme,
  SurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';

// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
import { getCommonSheetSurfaceStyle } from '../getCommonSheetSurfaceStyle';
// tslint:disable-next-line:max-line-length
import { getCommonTopBottomSheetSurfaceStyle } from '../getCommonTopBottomSheetSurfaceStyle';

export const getCommonModalTopBottomSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonTopBottomSheetSurfaceStyle(props),
  left: 0,
  position: 'absolute',
  right: 0,
  ...(props.elevation === undefined && getElevationStyles(16)),
});

export const getModalTopSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonModalTopBottomSheetSurfaceStyle(props),
  top: 0,
});

export const getModalBottomSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonModalTopBottomSheetSurfaceStyle(props),
  bottom: 0,
});

export const modalTopSheetTheme: ModalSheetTheme = {
  getProps: () => ({ enableOnLayout: true }),
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalTopSheetSurfaceStyle,
    },
  }),
};

export const modalBottomSheetTheme: ModalSheetTheme = {
  getProps: () => ({ enableOnLayout: true }),
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalBottomSheetSurfaceStyle,
    },
  }),
};
