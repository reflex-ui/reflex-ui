/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  CoplanarSideSheetTheme,
  CoplanarSideSheetVariantsTheme,
  SurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getCommonSheetSurfaceStyle } from '../getCommonSheetSurfaceStyle';
// tslint:disable-next-line:max-line-length
import { getCommonSideSheetSurfaceStyle } from '../getCommonSideSheetSurfaceStyle';

/*
 * CoplanarSideSheetTheme.Start & CoplanarSideSheetTheme.End
 */

export const getCoplanarSideSheetStartSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonSideSheetSurfaceStyle(props),
  borderEndColor: '#ccc',
  borderEndWidth: 1,
});

export const getCoplanarSideSheetEndSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonSideSheetSurfaceStyle(props),
  borderStartColor: '#ccc',
  borderStartWidth: 1,
});

export const coplanarSideSheetStartTheme: CoplanarSideSheetTheme = {
  surface: () => ({
    view: {
      getStyle: getCoplanarSideSheetStartSurfaceStyle,
    },
  }),
};

export const coplanarSideSheetEndTheme: CoplanarSideSheetTheme = {
  surface: () => ({
    view: {
      getStyle: getCoplanarSideSheetEndSurfaceStyle,
    },
  }),
};

/*
 * CoplanarSideSheetVariantsTheme
 */

export const coplanarSideSheetVariantsTheme: CoplanarSideSheetVariantsTheme = {
  end: coplanarSideSheetEndTheme,
  start: coplanarSideSheetStartTheme,
};
