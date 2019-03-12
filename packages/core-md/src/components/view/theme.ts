/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getSizedPaddingStyle,
  InjectableSubTheme,
  RfxViewProps,
  RfxViewTheme,
  RfxViewVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';

import { getFlexboxStyle } from '../../flexbox/getFlexboxStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

/*
 * COMMON STYLES
 */

export const getCommonRfxViewContainerStyle: ViewStyleGetter<
  RfxViewProps
> = props => ({
  ...getFlexboxStyle(props),
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

export const columnContainerTheme: InjectableSubTheme<
  RfxViewProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getColumnContainerStyle,
};

export const columnTheme: RfxViewTheme = {
  container: columnContainerTheme,
};

/*
 * ROW
 */

export const getRowContainerStyle: ViewStyleGetter<RfxViewProps> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const rowContainerTheme: InjectableSubTheme<
  RfxViewProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getRowContainerStyle,
};

export const rowTheme: RfxViewTheme = {
  container: rowContainerTheme,
};

/*
 * RfxViewVariantsTheme
 */

export const rfxViewTheme: RfxViewVariantsTheme = {
  column: columnTheme,
  row: rowTheme,
};
