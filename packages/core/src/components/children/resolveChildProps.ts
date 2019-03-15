/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import merge from 'lodash/merge';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { registerStyle } from '../registerStyle';
import { StyleProps } from '../StyleProps';
import { ChildTheme } from './ChildTheme';

export interface ChildPropsResolverData2<
  ComponentProps,
  PrimitiveProps,
  PrimitiveStyle
> {
  readonly patchTheme?: ChildTheme<
    ComponentProps,
    PrimitiveProps,
    PrimitiveStyle
  >;
  readonly componentProps: ComponentProps;
  readonly theme?: ChildTheme<ComponentProps, PrimitiveProps, PrimitiveStyle>;
}

export const resolveChildProps = <
  ComponentProps,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  data: ChildPropsResolverData2<ComponentProps, PrimitiveProps, PrimitiveStyle>,
): PrimitiveProps => {
  const { componentProps, theme } = data;
  const patchTheme = data.patchTheme ? data.patchTheme : undefined;

  const themeProps =
    theme && theme.getProps ? theme.getProps(componentProps) : undefined;

  const patchProps =
    patchTheme && patchTheme.getProps
      ? patchTheme.getProps(componentProps)
      : undefined;

  // @ts-ignore
  // Type '{}' is not assignable to type 'PrimitiveProps'.ts(2322)
  // It seems it could accept an empty object here with no problems
  // since there's no mandatory fields in PrimitiveProps
  // (it just extends extends StyleProps<PrimitiveStyle>)
  const mergedProps: PrimitiveProps = merge(
    {},
    themeProps || {},
    patchProps || {},
  );

  if (mergedProps.style) {
    throw new Error(
      [
        '"style" property is not allowed to be passed as part of ',
        'getProps() in themes. Please use getStyle() instead.',
      ].join(''),
    );
  }

  const themeStyle =
    theme && theme.getStyle ? theme.getStyle(componentProps) : undefined;

  let mergedStyles = [];
  if (themeStyle && !isEmpty(themeStyle)) {
    mergedStyles.push(registerStyle<PrimitiveStyle>(themeStyle));
  }

  const patchStyle =
    patchTheme && patchTheme.getStyle
      ? patchTheme.getStyle(componentProps)
      : undefined;

  if (patchStyle) {
    if (Array.isArray(patchStyle) && patchStyle.length) {
      mergedStyles = mergedStyles.concat(patchStyle);
    } else if (typeof patchStyle === 'number') {
      mergedStyles.push(patchStyle);
    } else if (isPlainObject(patchStyle) && !isEmpty(patchStyle)) {
      mergedStyles.push(registerStyle(patchStyle as PrimitiveStyle));
    } else {
      throw new Error(
        [
          'Invalid custom style object provided via getPatchTheme(). ',
          `Object type: ${typeof patchStyle}`,
        ].join(''),
      );
    }
  }

  // It's fine to mutate it here.
  // @ts-ignore Cannot assign to 'style'
  // because it is a read-only property.ts(2540)
  if (mergedStyles.length) mergedProps.style = mergedStyles;

  return mergedProps;
};
