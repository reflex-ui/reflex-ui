/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import merge from 'lodash/merge';

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
  PrimitiveStyle
>(
  data: SubPropsGetterData<ComponentProps, PrimitiveProps, PrimitiveStyle>,
): PrimitiveProps => {
  const { componentProps, theme } = data;
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'. [2322]
  const userProps: PrimitiveProps = data.userProps ? data.userProps : {};

  // @ts-ignore Rest types may only be created from object types. [2700]
  const { style: userStyle, ...otherUserProps } = userProps;

  const subProps: PrimitiveProps = merge(
    {},
    theme.getProps(componentProps) || {},
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

  const subStyle: PrimitiveStyle = theme.getStyle(componentProps);

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
      subStyles.push(registerStyle(userStyle));
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
