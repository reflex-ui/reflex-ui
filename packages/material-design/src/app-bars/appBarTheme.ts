/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBarProps,
  AppBarTheme,
  AppBarVariantsTheme,
  getThemedColor,
  OptionalAppBarTheme,
  rawAppBarVariantTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

export const getCommonAppBarCenterAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  alignSelf: 'flex-end', // prominent
  flexDirection: 'row',
  marginBottom: 10, // prominent
  marginLeft: 20,
});

export const getCommonAppBarContainerAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  // alignItems: 'center', // default
  alignItems: 'flex-start', // prominent
  backgroundColor: getThemedColor(props),
  flex: 1,
  flexDirection: 'row',
  // flexGrow: 1, // old, delete
  // height: 56, // default
  height: 128, // prominent
  paddingHorizontal: 4,
  paddingVertical: 4,
});

export const getCommonAppBarLeadingAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flexDirection: 'row',
});

export const getCommonAppBarTrailingAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

export const partialDefaultAppBarTheme: OptionalAppBarTheme = {
  centerArea: {
    getStyle: getCommonAppBarCenterAreaStyle,
  },
  container: {
    getStyle: getCommonAppBarContainerAreaStyle,
  },
  leadingArea: {
    getStyle: getCommonAppBarLeadingAreaStyle,
  },
  trailingArea: {
    getStyle: getCommonAppBarTrailingAreaStyle,
  },
};

export const defaultAppBarTheme: AppBarTheme = merge(
  {},
  rawAppBarVariantTheme,
  partialDefaultAppBarTheme,
);

export const denseAppBarTheme: AppBarTheme = merge(
  {},
  rawAppBarVariantTheme,
  partialDefaultAppBarTheme,
);

export const prominentAppBarTheme: AppBarTheme = merge(
  {},
  rawAppBarVariantTheme,
  partialDefaultAppBarTheme,
);

export const prominentDenseAppBarTheme: AppBarTheme = merge(
  {},
  rawAppBarVariantTheme,
  partialDefaultAppBarTheme,
);

export const appBarTheme: AppBarVariantsTheme = {
  default: defaultAppBarTheme,
  dense: denseAppBarTheme,
  prominent: prominentAppBarTheme,
  prominentDense: prominentDenseAppBarTheme,
};
