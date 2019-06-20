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
import { getCommonTopBottomSheetSurfaceStyle } from '../getCommonTopBottomSheetSurfaceStyle';

export const getCoplanarTopSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonTopBottomSheetSurfaceStyle(props),
  borderBottomColor: '#ccc',
  borderBottomWidth: 1,
});

export const getCoplanarBottomSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonSheetSurfaceStyle(),
  ...getCommonTopBottomSheetSurfaceStyle(props),
  borderTopColor: '#ccc',
  borderTopWidth: 1,
});

export const coplanarTopSheetTheme: CoplanarSheetTheme = {
  getProps: ({ enableOnLayout }) => ({
    enableOnLayout: enableOnLayout !== undefined ? enableOnLayout : true,
  }),
  surface: () => ({
    view: {
      getStyle: getCoplanarTopSheetSurfaceStyle,
    },
  }),
};

export const coplanarBottomSheetTheme: CoplanarSheetTheme = {
  getProps: ({ enableOnLayout }) => ({
    enableOnLayout: enableOnLayout !== undefined ? enableOnLayout : true,
  }),
  surface: () => ({
    view: {
      getStyle: getCoplanarBottomSheetSurfaceStyle,
    },
  }),
};
