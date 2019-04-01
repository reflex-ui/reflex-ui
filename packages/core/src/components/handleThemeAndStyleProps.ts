/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { getPropsFromTheme } from './getPropsFromTheme';
import { getStyleFromTheme } from './getStyleFromTheme';
import { isValidStyle } from './isValidStyle';
import { mergeStyles } from './mergeStyles';
import { SimpleComponentTheme } from './SimpleComponentTheme';
import { StyleProps } from './StyleProps';

export const handleThemeAndStyleProps = <
  ComponentProps extends StyleProps<PrimitiveStyle>,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  props: ComponentProps,
  theme?: SimpleComponentTheme<ComponentProps, PrimitiveProps, PrimitiveStyle>,
): ComponentProps => {
  if (theme === undefined || theme === null || isEmpty(theme)) {
    return props;
  }
  if (
    (theme.getProps === undefined || theme.getProps === null) &&
    (theme.getStyle === undefined || theme.getStyle === null)
  ) {
    return props;
  }

  let mergedProps = props;
  const themeProps = getPropsFromTheme(props, theme);
  if (themeProps !== undefined) mergedProps = merge({}, themeProps, props);

  const styleFromTheme = getStyleFromTheme(mergedProps, theme);

  if (styleFromTheme !== undefined && !isValidStyle(styleFromTheme)) {
    throw new Error(
      [
        'Invalid style object provided via theme.getStyle(). Expected',
        'a plain object, a number (registered style), or an array of numbers',
        `(registered styles), but got: ${typeof styleFromTheme}`,
      ].join(' '),
    );
  }

  const styleFromProps = props.style;

  if (styleFromProps !== undefined && !isValidStyle(styleFromProps)) {
    throw new Error(
      [
        'Invalid style object provided via props.style. Expected',
        'a plain object, a number (registered style), or an array of numbers',
        `(registered styles), but got: ${typeof styleFromProps}`,
      ].join(' '),
    );
  }

  if (
    styleFromTheme === undefined &&
    (styleFromProps === undefined ||
      styleFromProps === null ||
      isEmpty(styleFromProps))
  ) {
    return mergedProps;
  }

  return {
    ...mergedProps,
    style: mergeStyles(styleFromProps, styleFromTheme),
  };
};
