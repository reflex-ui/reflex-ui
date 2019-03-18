/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInViewTheme,
  getSizedMarginStyle,
  getSizedPaddingStyle,
  getThemedColor,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getFlexboxStyle } from '../../flexbox/getFlexboxStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

export const getSurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  flexWrap: 'wrap',
  ...getFlexboxStyle(props),
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  backgroundColor: getThemedColor(props),
  borderRadius: 4,
});

export const surfaceContainerTheme: BuiltInViewTheme<SurfaceProps> = {
  getStyle: getSurfaceContainerStyle,
};

export const surfaceTheme: SurfaceTheme = {
  container: surfaceContainerTheme,
};
