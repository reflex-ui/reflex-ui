/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, getThemedColor } from '@reflex-ui/core';
import { StyleSheet } from 'react-native';

export const getButtonRippleColor = (props: ButtonProps): string => {
  const patchTheme = props.getPatchTheme && props.getPatchTheme(props);
  const containerStyle =
    patchTheme &&
    patchTheme.container &&
    patchTheme.container.getStyle &&
    patchTheme.container.getStyle(props);
  let color =
    containerStyle && StyleSheet.flatten(containerStyle).backgroundColor;

  if (!color) color = getThemedColor(props);

  return color;
};
