/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import flatten from 'lodash/flatten';
import merge from 'lodash/merge';
import * as React from 'react';

export const cloneElement = ({
  element,
  props = {},
}: {
  readonly element: React.ReactElement<{}>;
  readonly props: {};
}) => {
  if (!element.props) element.props = {};
  // @ts-ignore Type '{}' has no property 'style' and no string index signature.
  const { style: elementStyle, ...otherElementProps } = element.props;
  let styles = [];
  // @ts-ignore Property 'style' does not exist on type '{}'.
  if (props.style) {
    // @ts-ignore Property 'style' does not exist on type '{}'.
    styles.push(props.style);
    styles = flatten(styles);
  }
  // @ts-ignore
  if (elementStyle) styles.push(elementStyle);
  // @ts-ignore
  if (styles.length > 0) props.style = styles;
  return React.cloneElement(element, merge({}, props, otherElementProps));
};
