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
import { getCommonSideSheetSurfaceStyle } from '../getCommonSideSheetSurfaceStyle';

export const getModalStartSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonSideSheetSurfaceStyle(props),
  bottom: 0,
  left: 0,
  position: 'absolute',
  top: 0,
  ...(props.elevation === undefined && getElevationStyles(16)),
});

export const getModalEndSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getModalStartSheetSurfaceStyle(props),
  left: 'auto',
  right: 0,
});

export const modalStartSheetTheme: ModalSheetTheme = {
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalStartSheetSurfaceStyle,
    },
  }),
};

export const modalEndSheetTheme: ModalSheetTheme = {
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalEndSheetSurfaceStyle,
    },
  }),
};
