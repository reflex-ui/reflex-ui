/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  extractFlexboxStyle,
  extractSizingStyle,
  getSizedMarginStyle,
  getSizedPaddingStyle,
  RfxViewProps,
  RfxViewPropsBase,
  RfxViewTheme,
  RfxViewVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import { sizedSpacing } from '../../spacing/sizedSpacing';

/*
 * COMMON STYLES
 */

export const getCommonRfxViewContainerStyle = <
  Props extends RfxViewPropsBase<Props, Theme>,
  Theme
>(
  props: Props,
): ViewStyle => ({
  ...extractFlexboxStyle(props),
  ...extractSizingStyle(props),
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
});

/*
 * COLUMN
 */

export const getColumnContainerStyle: ViewStyleGetter<
  RfxViewProps
> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  flexDirection: 'column',
  flexWrap: 'wrap',
});

export const columnTheme: RfxViewTheme = {
  view: {
    getStyle: getColumnContainerStyle,
  },
};

/*
 * ROW
 */

export const getRowContainerStyle: ViewStyleGetter<RfxViewProps> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const rowTheme: RfxViewTheme = {
  view: {
    getStyle: getRowContainerStyle,
  },
};

/*
 * SPACE BETWEEN
 */

export const getSpaceBetweenContainerStyle: ViewStyleGetter<
  RfxViewProps
> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const spaceBetweenTheme: RfxViewTheme = {
  view: {
    getStyle: getSpaceBetweenContainerStyle,
  },
};

/*
 * RfxViewVariantsTheme
 */

export const rfxViewTheme: RfxViewVariantsTheme = {
  column: columnTheme,
  row: rowTheme,
  spaceBetween: spaceBetweenTheme,
};
