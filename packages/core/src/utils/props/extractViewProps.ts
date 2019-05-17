/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps } from 'react-native';

import { extractAccessibilityProps } from './extractAccessibilityProps';
// tslint:disable-next-line:max-line-length
import { extractGestureResponderHandlersProps } from './extractGestureResponderHandlersProps';
import { extractViewPropsAndroid } from './extractViewPropsAndroid';
import { extractViewPropsIOS } from './extractViewPropsIOS';

export const extractViewProps = <Props extends ViewProps>(
  props: Props,
): ViewProps => {
  const {
    hitSlop,
    nativeID,
    onLayout,
    /*
     * These props are necessary for web and when using
     * TouchableWithoutFeedback, since it forwards such props
     * to its child View component, that actually calls them.
     */
    // @ts-ignore
    disabled,
    // @ts-ignore
    onBlur,
    // @ts-ignore
    onFocus,
    // @ts-ignore
    onMouseEnter,
    // @ts-ignore
    onMouseLeave,
    // @ts-ignore
    onKeyDown,
    // @ts-ignore
    onKeyUp,
    pointerEvents,
    removeClippedSubviews,
    style,
    testID,
    ...otherProps
  } = props;

  return {
    ...extractAccessibilityProps(otherProps),
    ...extractGestureResponderHandlersProps(otherProps),
    ...extractViewPropsAndroid(otherProps),
    ...extractViewPropsIOS(otherProps),
    ...((disabled && { disabled }) || {}),
    ...((hitSlop && { hitSlop }) || {}),
    ...((nativeID && { nativeID }) || {}),
    ...((onLayout && { onLayout }) || {}),
    ...((onBlur && { onBlur }) || {}),
    ...((onFocus && { onFocus }) || {}),
    ...((onMouseEnter && { onMouseEnter }) || {}),
    ...((onMouseLeave && { onMouseLeave }) || {}),
    ...((onKeyDown && { onKeyDown }) || {}),
    ...((onKeyUp && { onKeyUp }) || {}),
    ...((pointerEvents && { pointerEvents }) || {}),
    ...((removeClippedSubviews && { removeClippedSubviews }) || {}),
    ...((style && { style }) || {}),
    ...((testID && { testID }) || {}),
  };
};
