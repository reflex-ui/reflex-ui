/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  OptionalInjectableSubTheme,
  OptionalSuperViewTheme,
  rawSuperViewTheme,
  Size,
  SizedMarginStyle,
  SuperViewProps,
  SuperViewTheme,
  SuperViewVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

/*
 * COMMON STYLES
 */

export const superViewContainerSizedMarginStyle: SizedMarginStyle = {
  [Size.L]: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  [Size.M]: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  [Size.NONE]: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  [Size.S]: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  [Size.XL]: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  [Size.XS]: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
};

export const getCommonSuperViewContainerStyle: ViewStyleGetter<
  SuperViewProps
> = props => ({
  ...getSizedMarginStyle(superViewContainerSizedMarginStyle)(props),
  flex: props.flex,
});

/*
 * COLUMN
 */

export const getColumnContainerStyle: ViewStyleGetter<
  SuperViewProps
> = props => ({
  ...getCommonSuperViewContainerStyle(props),
  flex: props.flex,
  flexDirection: 'column',
  flexWrap: 'wrap',
});

export const columnContainerTheme: OptionalInjectableSubTheme<
  SuperViewProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getColumnContainerStyle,
};

export const optionalColumnTheme: OptionalSuperViewTheme = {
  container: columnContainerTheme,
};

export const columnTheme: SuperViewTheme = merge<
  {},
  SuperViewTheme,
  OptionalSuperViewTheme
>({}, rawSuperViewTheme, optionalColumnTheme);

/*
 * ROW
 */

export const getRowContainerStyle: ViewStyleGetter<SuperViewProps> = props => ({
  ...getCommonSuperViewContainerStyle(props),
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const rowContainerTheme: OptionalInjectableSubTheme<
  SuperViewProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getRowContainerStyle,
};

export const optionalRowTheme: OptionalSuperViewTheme = {
  container: rowContainerTheme,
};

export const rowTheme: SuperViewTheme = merge<
  {},
  SuperViewTheme,
  OptionalSuperViewTheme
>({}, rawSuperViewTheme, optionalRowTheme);

/*
 * SuperViewVariantsTheme
 */

export const superViewTheme: SuperViewVariantsTheme = {
  column: columnTheme,
  row: rowTheme,
};
