/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AvatarProps,
  AvatarTheme,
  FontWeight,
  getFontWeight,
  getOnColor,
  Size,
  SizedData,
  SurfaceProps,
  TextStyleGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform, TextStyle, ViewStyle } from 'react-native';

// import { getSurfaceContainerStyle } from '../surface/theme';
import { getFontFamily } from '../text/getFontFamily';

/*
 * This avatar size scale is conceived to match the size of icons.
 * You can see that this is slightly smaller than the size scale
 * of icons, but this is on purpose, because the official Material Design's
 * SVG icons have a small padding area, making the actual rendered vector
 * a little smaller than the value we pass to it. Since we don't have
 * such situation here, we have to use slightly smaller sizes to match
 * the rendered SVG icon size.
 */
export const avatarSizedStyle: SizedData<ViewStyle> = {
  /*
  xxsmall: { borderRadius: 12, height: 24, width: 24 },
  xsmall: { borderRadius: 7, height: 14, width: 14 },
  small: { borderRadius: 9, height: 18, width: 18 },
  medium: { borderRadius: 10, height: 20, width: 20 },
  large: { borderRadius: 14, height: 28, width: 28 },
  xlarge: { borderRadius: 17, height: 34, width: 34 },
  xxlarge: { borderRadius: 20, height: 40, width: 40 },
  */
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  xxsmall: { borderRadius: 12, height: 24, width: 24 },
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { borderRadius: 16, height: 32, width: 32 },
  small: { borderRadius: 18, height: 36, width: 36 },
  medium: { borderRadius: 20, height: 40, width: 40 },
  large: { borderRadius: 24, height: 48, width: 48 },
  xlarge: { borderRadius: 28, height: 60, width: 60 },
  xxlarge: { borderRadius: 36, height: 72, width: 72 },
};

export const getAvatarSurfaceStyle: ViewStyleGetter<SurfaceProps> = props => ({
  ...avatarSizedStyle[props.size || Size.M],
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const avatarTextSizedStyle: SizedData<TextStyle> = {
  xxsmall: { fontSize: 14 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { fontSize: 18 },
  small: { fontSize: 22 },
  medium: { fontSize: 26 },
  large: { fontSize: 32 },
  xlarge: { fontSize: 38 },
  xxlarge: { fontSize: 46, marginTop: -2 },
};

export const getAvatarTextStyle: TextStyleGetter<AvatarProps> = props => ({
  color: getOnColor(props),
  fontFamily: getFontFamily(),
  fontWeight: getFontWeight(FontWeight.Medium),
  textTransform: 'uppercase',
  ...Platform.select({
    web: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      userSelect: 'none',
    },
  }),
  /*
   * We want marginTop at avatarTextSizedStyle (if present)
   * to override this one.
   */
  marginTop: -1,
  /**/
  ...avatarTextSizedStyle[props.size || Size.M],
});

export const avatarTheme: AvatarTheme = {
  surface: () => ({
    getStyle: getAvatarSurfaceStyle,
  }),
  text: {
    getStyle: getAvatarTextStyle,
  },
};
