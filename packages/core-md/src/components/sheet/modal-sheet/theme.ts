/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSheetTheme,
  ModalSheetVariantsTheme,
  SurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';

// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
import { getCommonSheetSurfaceStyle } from '../getCommonSheetSurfaceStyle';
// tslint:disable-next-line:max-line-length
import { getCommonSideSheetSurfaceStyle } from '../getCommonSideSheetSurfaceStyle';

export const getModalSheetStartSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonSideSheetSurfaceStyle(props),
  bottom: 0,
  height:
    props.height !== undefined ? props.height : props.dimensions.window.height,
  left: 0,
  position: 'absolute',
  top: 0,
  ...(props.elevation === undefined && getElevationStyles(16)),
});

export const getModalSheetEndSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getModalSheetStartSurfaceStyle(props),
  left: 'auto',
  right: 0,
});

export const modalSheetStartTheme: ModalSheetTheme = {
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalSheetStartSurfaceStyle,
    },
  }),
};

export const modalSheetEndTheme: ModalSheetTheme = {
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalSheetEndSurfaceStyle,
    },
  }),
};

/*
 * SheetVariantsTheme
 */

export const modalSheetVariantsTheme: ModalSheetVariantsTheme = {
  end: modalSheetEndTheme,
  start: modalSheetStartTheme,
};
