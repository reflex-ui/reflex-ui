/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';

import { RippleStyles } from './RippleStyles';
import { RippleStylesFactoryInput } from './RippleStylesFactoryInput';

export const createRippleStyles = ({
  color,
  diameter,
  position,
  style,
}: RippleStylesFactoryInput): RippleStyles => ({
  container: {
    borderRadius: style.borderRadius,
    overflow: 'hidden',
    zIndex: 0,
    ...StyleSheet.absoluteFillObject,
  },
  ripple: {
    backgroundColor: color,
    borderRadius: diameter / 2,
    height: diameter,
    left: position.x,
    opacity: 0,
    position: 'absolute',
    top: position.y,
    width: diameter,
  },
});
