/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, getThemedColor } from '@reflex-ui/core';
import { StyleSheet } from 'react-native';

export const getDefaultButtonRippleColor = (props: ButtonProps): string => {
  const textProps = props.getSubProps
    ? props.getSubProps(props).text || {}
    : {};
  let color = textProps.style
    ? StyleSheet.flatten(textProps.style).color
    : undefined;

  if (!color) {
    color = getThemedColor({
      colorTheme: props.colorTheme,
      contained: false,
      interactionState: props.interactionState,
      invertColor: props.invertColor,
      paletteTheme: props.paletteTheme,
    });
  }

  return color;
};
