/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getSizedPaddingStyle,
  InjectableSubThemeOptional,
  rawRfxViewTheme,
  RfxViewProps,
  RfxViewTheme,
  RfxViewThemeOptional,
  RfxViewVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
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

export const columnContainerTheme: InjectableSubThemeOptional<
  RfxViewProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getColumnContainerStyle,
};

export const optionalColumnTheme: RfxViewThemeOptional = {
  container: columnContainerTheme,
};

export const columnTheme: RfxViewTheme = merge<
  {},
  RfxViewTheme,
  RfxViewThemeOptional
>({}, rawRfxViewTheme, optionalColumnTheme);

/*
 * ROW
 */

export const getRowContainerStyle: ViewStyleGetter<RfxViewProps> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const rowContainerTheme: InjectableSubThemeOptional<
  RfxViewProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getRowContainerStyle,
};

export const optionalRowTheme: RfxViewThemeOptional = {
  container: rowContainerTheme,
};

export const rowTheme: RfxViewTheme = merge<
  {},
  RfxViewTheme,
  RfxViewThemeOptional
>({}, rawRfxViewTheme, optionalRowTheme);

/*
 * RfxViewVariantsTheme
 */

export const rfxViewTheme: RfxViewVariantsTheme = {
  column: columnTheme,
  row: rowTheme,
};
