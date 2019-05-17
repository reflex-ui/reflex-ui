/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';

import { extractAccessibilityProps } from './extractAccessibilityProps';

export const extractTouchableWithoutFeedbackProps = (
  props: TouchableWithoutFeedbackProps,
): TouchableWithoutFeedbackProps => {
  const {
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    hitSlop,
    onBlur,
    onFocus,
    onLayout,
    onLongPress,
    onMouseEnter,
    onMouseLeave,
    onPress,
    onPressIn,
    onPressOut,
    pressRetentionOffset,
    style,
    testID,
  } = props;

  return {
    ...extractAccessibilityProps(props),
    ...((delayLongPress && { delayLongPress }) || {}),
    ...((delayPressIn && { delayPressIn }) || {}),
    ...((delayPressOut && { delayPressOut }) || {}),
    ...((disabled && { disabled }) || {}),
    ...((hitSlop && { hitSlop }) || {}),
    ...((onBlur && { onBlur }) || {}),
    ...((onFocus && { onFocus }) || {}),
    ...((onLayout && { onLayout }) || {}),
    ...((onLongPress && { onLongPress }) || {}),
    ...((onMouseEnter && { onMouseEnter }) || {}),
    ...((onMouseLeave && { onMouseLeave }) || {}),
    ...((onPress && { onPress }) || {}),
    ...((onPressIn && { onPressIn }) || {}),
    ...((onPressOut && { onPressOut }) || {}),
    ...((pressRetentionOffset && { pressRetentionOffset }) || {}),
    ...((style && { style }) || {}),
    ...((testID && { testID }) || {}),
  };
};
