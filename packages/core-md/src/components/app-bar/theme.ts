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
  FontWeight,
  getFontWeight,
  isWeb,
  RfxTextProps,
  SurfaceProps,
  TextStyleGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';
import merge from 'lodash/merge';

import { getCommonRfxTextStyle } from '../text/theme';

/*
 * COMMON STYLES
 */

export const getCommonAppBarCenterAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flexDirection: 'row',
  flexGrow: 1,
  flexShrink: 1,
  marginStart: 20,
});

export const getCommonAppBarSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  alignItems: 'center',
  borderRadius: 0,
  flexDirection: 'row',
  paddingHorizontal: 6,
  paddingVertical: 6,
  zIndex: 1,
  ...(props.elevation !== 0 &&
    getElevationStyles(props.elevation || 4, props.interactionState.type)),
});

export const getCommonAppBarLeadingAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flexDirection: 'row',
});

export const getCommonAppBarTrailingAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

export const getCommonAppBarTitleStyle: TextStyleGetter<
  RfxTextProps
> = props => ({
  ...getCommonRfxTextStyle(props),
  fontSize: 20,
  fontWeight: getFontWeight(FontWeight.Medium),
  letterSpacing: 0.0075,
  marginTop: isWeb ? -1 : 0,
  overflow: 'hidden',
});

/*
 * AppBarVariant.DEFAULT
 */

export const getDefaultAppBarSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonAppBarSurfaceStyle(props),
  flexWrap: 'nowrap',
  height:
    props.dimensions.window.width <= props.breakpoints.largeTablet ? 56 : 64,
});

export const defaultAppBarTheme: AppBarTheme = {
  centerArea: {
    getStyle: getCommonAppBarCenterAreaStyle,
  },
  leadingArea: {
    getStyle: getCommonAppBarLeadingAreaStyle,
  },
  surface: () => ({
    view: {
      getStyle: getDefaultAppBarSurfaceStyle,
    },
  }),
  title: {
    text: {
      getStyle: getCommonAppBarTitleStyle,
    },
  },
  trailingArea: {
    getStyle: getCommonAppBarTrailingAreaStyle,
  },
};

/*
 * AppBarVariant.DENSE
 */

export const getDenseAppBarSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonAppBarSurfaceStyle(props),
  height: 48,
  paddingVertical: 0,
});

export const denseAppBarTheme: AppBarTheme = {
  centerArea: {
    getStyle: getCommonAppBarCenterAreaStyle,
  },
  leadingArea: {
    getStyle: getCommonAppBarLeadingAreaStyle,
  },
  surface: () => ({
    view: {
      getStyle: getDenseAppBarSurfaceStyle,
    },
  }),
  title: {
    text: {
      getStyle: getCommonAppBarTitleStyle,
    },
  },
  trailingArea: {
    getStyle: getCommonAppBarTrailingAreaStyle,
  },
};

/*
 * PROMINENT STYLES
 */

export const getProminentAppBarCenterAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  ...getCommonAppBarCenterAreaStyle(props),
  alignSelf: 'flex-end',
  marginBottom: 10,
});

export const getProminentAppBarSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonAppBarSurfaceStyle(props),
  alignItems: 'flex-start',
  height: 128,
});

export const prominentAppBarTheme: AppBarTheme = {
  centerArea: {
    getStyle: getProminentAppBarCenterAreaStyle,
  },
  leadingArea: {
    getStyle: getCommonAppBarLeadingAreaStyle,
  },
  surface: () => ({
    view: {
      getStyle: getProminentAppBarSurfaceStyle,
    },
  }),
  title: {
    text: {
      getStyle: getCommonAppBarTitleStyle,
    },
  },
  trailingArea: {
    getStyle: getCommonAppBarTrailingAreaStyle,
  },
};

/*
 * AppBarVariant.PROMINENT_DENSE
 */

export const getProminentDenseAppBarSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getProminentAppBarSurfaceStyle(props),
  height: 98,
});

export const partialProminentDenseAppBarTheme: Partial<AppBarTheme> = {
  surface: () => ({
    view: {
      getStyle: getProminentDenseAppBarSurfaceStyle,
    },
  }),
};

export const prominentDenseAppBarTheme: AppBarTheme = merge(
  {},
  prominentAppBarTheme,
  partialProminentDenseAppBarTheme,
);

/*
 * AppBarVariantsTheme
 */

export const appBarVariantsTheme: AppBarVariantsTheme = {
  default: defaultAppBarTheme,
  dense: denseAppBarTheme,
  prominent: prominentAppBarTheme,
  prominentDense: prominentDenseAppBarTheme,
};
