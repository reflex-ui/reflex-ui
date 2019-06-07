/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { isValidStyle } from './isValidStyle';
import { PrimitiveComponentTheme } from './PrimitiveComponentTheme';
import { registerStyle } from './registerStyle';
import { StyleProps } from './StyleProps';

export const getStyleFromTheme = <
  ComponentProps,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  props: ComponentProps,
  theme?: PrimitiveComponentTheme<
    ComponentProps,
    PrimitiveProps,
    PrimitiveStyle
  >,
): StyleProp<PrimitiveStyle> | undefined => {
  if (
    theme === undefined ||
    theme === null ||
    theme.getStyle === undefined ||
    theme.getStyle === null
  ) {
    return undefined;
  }

  const themeStyle = theme.getStyle(props);

  if (themeStyle === undefined || themeStyle === null || isEmpty(themeStyle)) {
    return undefined;
  }

  if (!isValidStyle(themeStyle)) {
    throw new Error(
      [
        'ReflexUI: Invalid style object provided via theme.getStyle().',
        'Expected a plain object, a number (registered style), or an array',
        `of numbers (registered styles), but got: ${typeof themeStyle}`,
      ].join(' '),
    );
  }

  return registerStyle<PrimitiveStyle>(themeStyle);
};
