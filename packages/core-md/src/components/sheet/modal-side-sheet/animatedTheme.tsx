/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSideSheetTheme,
  ModalSideSheetVariantsTheme,
  SurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';

import {
  getCommonSheetSurfaceProps,
  getModalSideSheetEndSurfaceStyle,
  getModalSideSheetStartSurfaceStyle,
} from './theme';

export const getAnimatedModalSideSheetEndSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalSideSheetEndSurfaceStyle(props),
  };
};

export const getAnimatedModalSideSheetStartSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalSideSheetStartSurfaceStyle(props),
  };
};

export const animatedModalSideSheetEndTheme: ModalSideSheetTheme = {
  surface: () => ({
    view: {
      getProps: getCommonSheetSurfaceProps,
      getStyle: getAnimatedModalSideSheetEndSurfaceStyle,
    },
  }),
};

export const animatedModalSideSheetStartTheme: ModalSideSheetTheme = {
  surface: () => ({
    view: {
      getProps: getCommonSheetSurfaceProps,
      getStyle: getAnimatedModalSideSheetStartSurfaceStyle,
    },
  }),
};

// tslint:disable-next-line:max-line-length
export const animatedModalSideSheetVariantsTheme: ModalSideSheetVariantsTheme = {
  end: animatedModalSideSheetEndTheme,
  start: animatedModalSideSheetStartTheme,
};