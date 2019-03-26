/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps } from 'react-native';

import {
  extractAccessibilityProps,
  extractGestureResponderHandlersProps,
  extractViewPropsAndroid,
  extractViewPropsIOS,
} from './';

export const extractViewProps = (props: ViewProps): ViewProps => {
  const {
    hitSlop,
    nativeID,
    onLayout,
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
    ...((hitSlop && { hitSlop }) || {}),
    ...((nativeID && { nativeID }) || {}),
    ...((onLayout && { onLayout }) || {}),
    ...((pointerEvents && { pointerEvents }) || {}),
    ...((removeClippedSubviews && { removeClippedSubviews }) || {}),
    ...((style && { style }) || {}),
    ...((testID && { testID }) || {}),
  };
};
