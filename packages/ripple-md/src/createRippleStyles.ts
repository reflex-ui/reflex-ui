/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Platform, StyleSheet } from 'react-native';

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
    ...StyleSheet.absoluteFillObject,
    ...Platform.select({
      web: {
        /*
         * This is necessary on web otherwise ripple animation
         * render over children.
         */
        zIndex: -1,
        /**/
      },
    }),
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
