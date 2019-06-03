/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  CoplanarSideSheetProps,
  CoplanarSideSheetTheme,
  CoplanarSideSheetVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getCommonSheetSurfaceStyle } from '../getCommonSheetSurfaceStyle';
// tslint:disable-next-line:max-line-length
import { getCommonSideSheetSurfaceStyle } from '../getCommonSideSheetSurfaceStyle';

/*
 * CoplanarSideSheetTheme.Start & CoplanarSideSheetTheme.End
 */

export const getCoplanarSideSheetStartSurfaceStyle: ViewStyleGetter<
  CoplanarSideSheetProps
> = props => ({
  ...getCommonSheetSurfaceStyle(props),
  ...getCommonSideSheetSurfaceStyle(props),
  borderEndColor: '#ccc',
  borderEndWidth: 1,
});

export const getCoplanarSideSheetEndSurfaceStyle: ViewStyleGetter<
  CoplanarSideSheetProps
> = props => ({
  ...getCommonSheetSurfaceStyle(props),
  ...getCommonSideSheetSurfaceStyle(props),
  borderStartColor: '#ccc',
  borderStartWidth: 1,
});

export const coplanarSideSheetStartTheme: CoplanarSideSheetTheme = {
  getStyle: getCoplanarSideSheetStartSurfaceStyle,
};

export const coplanarSideSheetEndTheme: CoplanarSideSheetTheme = {
  getStyle: getCoplanarSideSheetEndSurfaceStyle,
};

/*
 * CoplanarSideSheetVariantsTheme
 */

export const coplanarSideSheetVariantsTheme: CoplanarSideSheetVariantsTheme = {
  end: coplanarSideSheetEndTheme,
  start: coplanarSideSheetStartTheme,
};
