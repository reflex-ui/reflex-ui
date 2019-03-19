/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { getStyleFromTheme } from './getStyleFromTheme';
import { SimpleComponentTheme } from './SimpleComponentTheme';
import { StyleProps } from './StyleProps';

export const getPropsAndStyleFromTheme = <
  ComponentProps,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  componentProps: ComponentProps,
  theme?: SimpleComponentTheme<ComponentProps, PrimitiveProps, PrimitiveStyle>,
): PrimitiveProps => {
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'.ts(2322)
  // It seems it could accept an empty object here without problems
  // since there's no mandatory fields in PrimitiveProps
  // (it just extends extends StyleProps<PrimitiveStyle>)
  const themeProps: PrimitiveProps =
    (theme && theme.getProps && theme.getProps(componentProps)) || {};

  if (themeProps.style) {
    throw new Error(
      [
        '"style" property is not allowed to be passed as part of ',
        'getProps() in themes. Please use getStyle() instead.',
      ].join(''),
    );
  }

  const themeStyle = getStyleFromTheme(componentProps, theme);
  if (themeStyle !== undefined) {
    // It's fine to mutate it here.
    // @ts-ignore Cannot assign to 'style'
    // because it is a read-only property.ts(2540)
    themeProps.style = themeStyle;
  }

  return themeProps;
};
