/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { registerStyle } from './registerStyle';
import { SimpleComponentTheme } from './SimpleComponentTheme';
import { StyleProps } from './StyleProps';

export const getStyleFromTheme = <
  ComponentProps,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  componentProps: ComponentProps,
  theme?: SimpleComponentTheme<ComponentProps, PrimitiveProps, PrimitiveStyle>,
): PrimitiveStyle | undefined => {
  if (!theme || !theme.getStyle) return undefined;

  const themeStyle = theme.getStyle(componentProps);

  if (themeStyle === undefined || themeStyle === null || isEmpty(themeStyle)) {
    return undefined;
  }

  if (typeof themeStyle !== 'object') {
    throw new Error(
      [
        'Rfx: invalid object returned from theme.getStyle().',
        `It must return an object, but returned: ${typeof themeStyle}`,
      ].join(' '),
    );
  }

  return registerStyle<PrimitiveStyle>(themeStyle);
};
