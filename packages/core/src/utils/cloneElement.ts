/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import flatten from 'lodash/flatten';
import merge from 'lodash/merge';
import * as React from 'react';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { StyleProps } from '../components/StyleProps';

export const cloneElement = <
  ComponentProps extends {} & StyleProps<ViewStyle | TextStyle | ImageStyle>
>({
  element,
  props,
}: {
  readonly element: React.ReactElement<ComponentProps>;
  readonly props?: ComponentProps;
}) => {
  // @ts-ignore Type '{}' is not assignable to type 'ComponentProps'.ts(2322)
  // Why not? If ComponentProps extends {} & StyleProps,
  // which only contains optional fields,
  // then it doesn't seem wrong to assign an empty object to it as {}.
  if (!element.props) element.props = {};
  const { style: elementStyle, ...otherElementProps } = element.props;
  let styles: StyleProp<ViewStyle | TextStyle | ImageStyle>[] = [];
  if (props && props.style) {
    styles.push(props.style);
    styles = flatten(styles);
  }

  if (elementStyle) styles.push(elementStyle);
  if (props && styles.length > 0) {
    // @ts-ignore Cannot assign to 'style'
    // because it is a read-only property.ts(2540)
    // It's fine to mutate it here.
    props.style = styles;
  }
  return React.cloneElement(element, merge({}, props, otherElementProps));
};
