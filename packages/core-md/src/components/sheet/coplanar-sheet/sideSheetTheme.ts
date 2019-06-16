/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  CoplanarSheetTheme,
  SurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getCommonSheetSurfaceStyle } from '../getCommonSheetSurfaceStyle';
// tslint:disable-next-line:max-line-length
import { getCommonSideSheetSurfaceStyle } from '../getCommonSideSheetSurfaceStyle';

export const getCoplanarStartSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonSideSheetSurfaceStyle(props),
  borderEndColor: '#ccc',
  borderEndWidth: 1,
});

export const getCoplanarEndSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonSideSheetSurfaceStyle(props),
  borderStartColor: '#ccc',
  borderStartWidth: 1,
});

export const coplanarStartSheetTheme: CoplanarSheetTheme = {
  surface: () => ({
    view: {
      getStyle: getCoplanarStartSheetSurfaceStyle,
    },
  }),
};

export const coplanarEndSheetTheme: CoplanarSheetTheme = {
  surface: () => ({
    view: {
      getStyle: getCoplanarEndSheetSurfaceStyle,
    },
  }),
};
