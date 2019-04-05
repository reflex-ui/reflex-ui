/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Touchable } from 'react-native';

export const extractTouchableProps = (props: Touchable): Touchable => {
  const {
    onTouchCancel,
    onTouchEnd,
    onTouchEndCapture,
    onTouchMove,
    onTouchStart,
  } = props;

  return {
    ...((onTouchCancel && { onTouchCancel }) || {}),
    ...((onTouchEnd && { onTouchEnd }) || {}),
    ...((onTouchEndCapture && { onTouchEndCapture }) || {}),
    ...((onTouchMove && { onTouchMove }) || {}),
    ...((onTouchStart && { onTouchStart }) || {}),
  };
};
