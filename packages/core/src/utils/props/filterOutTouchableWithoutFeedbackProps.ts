/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';

import { filterOutAccessibilityProps } from './filterOutAccessibilityProps';

export const filterOutTouchableWithoutFeedbackProps = <
  Props extends TouchableWithoutFeedbackProps
>(
  props: Props,
): Pick<Props, Exclude<keyof Props, keyof TouchableWithoutFeedbackProps>> => {
  const {
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    hitSlop,
    onLayout,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    pressRetentionOffset,
    style,
    testID,
    ...otherProps
  } = props;

  // This is complex and after trying to fix it I gave up.
  // Let's see if these filterOut functions are really staying
  // around in the codebase, and if so there will be time to fix this
  // or ask for help.
  // @ts-ignore Type 'Pick<Pick<Props, Exclude<keyof Props, "delayLongPress"...
  return filterOutAccessibilityProps(otherProps);
};
