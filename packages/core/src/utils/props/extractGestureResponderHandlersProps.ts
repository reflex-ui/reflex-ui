/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GestureResponderHandlers } from 'react-native';

export const extractGestureResponderHandlersProps = (
  props: GestureResponderHandlers,
): GestureResponderHandlers => {
  const {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
  } = props;

  return {
    ...((onMoveShouldSetResponder && { onMoveShouldSetResponder }) || {}),
    ...((onMoveShouldSetResponderCapture && {
      onMoveShouldSetResponderCapture,
    }) ||
      {}),
    ...((onResponderEnd && { onResponderEnd }) || {}),
    ...((onResponderGrant && { onResponderGrant }) || {}),
    ...((onResponderMove && { onResponderMove }) || {}),
    ...((onResponderReject && { onResponderReject }) || {}),
    ...((onResponderRelease && { onResponderRelease }) || {}),
    ...((onResponderStart && { onResponderStart }) || {}),
    ...((onResponderTerminate && { onResponderTerminate }) || {}),
    ...((onResponderTerminationRequest && { onResponderTerminationRequest }) ||
      {}),
    ...((onStartShouldSetResponder && { onStartShouldSetResponder }) || {}),
    ...((onStartShouldSetResponderCapture && {
      onStartShouldSetResponderCapture,
    }) ||
      {}),
  };
};
