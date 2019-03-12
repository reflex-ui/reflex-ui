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
import { SubTheme } from './SubTheme';

export interface SubPropsGetterData<
  ComponentProps,
  PrimitiveProps,
  PrimitiveStyle
> {
  readonly componentProps: ComponentProps;
  readonly theme: SubTheme<ComponentProps, PrimitiveProps, PrimitiveStyle>;
  readonly userProps?: PrimitiveProps;
}

export const getSubProps = <
  ComponentProps,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  data: SubPropsGetterData<ComponentProps, PrimitiveProps, PrimitiveStyle>,
): PrimitiveProps => {
  const { componentProps, theme } = data;
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'. [2322]
  const userProps: PrimitiveProps = data.userProps ? data.userProps : {};

  const { style: userStyle, ...otherUserProps } = userProps;

  // @ts-ignore
  // Type 'Pick<PrimitiveProps, Exclude<keyof PrimitiveProps, "style">>'
  // is not assignable to type 'PrimitiveProps'.ts(2322)
  // This TS error seems strange, perhaps a TS bug. Needs some investigation.
  const subProps: PrimitiveProps = merge(
    {},
    theme.getProps ? theme.getProps(componentProps) : {},
    otherUserProps || {},
  );

  if (subProps.style) {
    throw new Error(
      [
        '"style" property is not allowed to be passed as part of ',
        'getProps() in themes. Please use getStyle() instead.',
      ].join(''),
    );
  }

  // @ts-ignore
  // Type 'PrimitiveStyle | {}' is not assignable to type 'PrimitiveStyle'.
  // Type '{}' is not assignable to type 'PrimitiveStyle'.ts(2322)
  // This TS error is interesting. Since there are no required fields
  // on none style type (PrimitiveStyle extends ViewStyle | TextStyle |
  // ImageStyle) an empty object could be accepted as valid data for such types.
  const subStyle: PrimitiveStyle = theme.getStyle
    ? theme.getStyle(componentProps)
    : {};

  let subStyles = [];
  if (!isEmpty(subStyle)) {
    subStyles.push(registerStyle<PrimitiveStyle>(subStyle));
  }

  if (userStyle) {
    if (Array.isArray(userStyle) && userStyle.length) {
      subStyles = subStyles.concat(userStyle as []);
    } else if (typeof userStyle === 'number') {
      subStyles.push(userStyle);
    } else if (isPlainObject(userStyle) && !isEmpty(userStyle)) {
      subStyles.push(registerStyle(userStyle as PrimitiveStyle));
    } else {
      throw new Error(
        [
          'Invalid custom style object provided via getSubProps(). ',
          `Object type: ${typeof userStyle}`,
        ].join(''),
      );
    }
  }

  // It's fine to mutate it here.
  // @ts-ignore Cannot assign to 'style' because
  // it is a constant or a read-only property. [2540]
  if (subStyles.length) subProps.style = subStyles;

  return subProps;
};
