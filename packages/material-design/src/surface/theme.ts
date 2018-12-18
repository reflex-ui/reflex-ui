/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getThemedColor,
  OptionalInjectableSubTheme,
  OptionalSurfaceTheme,
  rawSurfaceTheme,
  Size,
  SizedMarginStyle,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

export const surfaceContainerSizedMarginStyle: SizedMarginStyle = {
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

export const getSurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getSizedMarginStyle(surfaceContainerSizedMarginStyle)(props),
  backgroundColor: getThemedColor({
    colorTheme: props.colorTheme,
    paletteTheme: props.paletteTheme,
  }),
});

export const surfaceContainerTheme: OptionalInjectableSubTheme<
  SurfaceProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getSurfaceContainerStyle,
};

export const optionalSurfaceTheme: OptionalSurfaceTheme = {
  container: surfaceContainerTheme,
};

export const surfaceTheme: SurfaceTheme = merge<
  {},
  SurfaceTheme,
  OptionalSurfaceTheme
>({}, rawSurfaceTheme, optionalSurfaceTheme);
