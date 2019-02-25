/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, getThemedColor } from '@reflex-ui/core';
import { StyleSheet } from 'react-native';

export const getContainedButtonRippleColor = (props: ButtonProps): string => {
  const viewProps = props.getSubProps
    ? props.getSubProps(props).container || {}
    : {};
  let color = viewProps.style
    ? StyleSheet.flatten(viewProps.style).backgroundColor
    : undefined;

  if (!color) color = getThemedColor(props);

  return color;
};
