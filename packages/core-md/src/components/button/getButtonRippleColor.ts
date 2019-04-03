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
  const surfaceTheme =
    patchTheme && patchTheme.surface && patchTheme.surface(props);
  const surfaceStyle =
    surfaceTheme && surfaceTheme.getStyle && surfaceTheme.getStyle(props);
  let color = surfaceStyle && StyleSheet.flatten(surfaceStyle).backgroundColor;

  if (!color) color = getThemedColor(props);

  return color;
};
