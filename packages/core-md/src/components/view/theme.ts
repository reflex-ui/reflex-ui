/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getSizedPaddingStyle,
  RfxViewPropsBase,
  RfxViewTheme,
  RfxViewVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getFlexboxStyle } from '../../flexbox/getFlexboxStyle';
import { getSizingStyle } from '../../sizing/getSizingStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

/*
 * COMMON STYLES
 */

export const getCommonRfxViewContainerStyle: ViewStyleGetter<
  RfxViewPropsBase
> = props => ({
  ...getFlexboxStyle(props),
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
});

/*
 * COLUMN
 */

export const getColumnContainerStyle: ViewStyleGetter<
  RfxViewPropsBase
> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  flexDirection: 'column',
  flexWrap: 'wrap',
});

export const columnTheme: RfxViewTheme = {
  getStyle: getColumnContainerStyle,
};

/*
 * ROW
 */

export const getRowContainerStyle: ViewStyleGetter<
  RfxViewPropsBase
> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const rowTheme: RfxViewTheme = {
  getStyle: getRowContainerStyle,
};

/*
 * RfxViewVariantsTheme
 */

export const rfxViewTheme: RfxViewVariantsTheme = {
  column: columnTheme,
  row: rowTheme,
};
