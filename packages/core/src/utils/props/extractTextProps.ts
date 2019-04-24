/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps } from 'react-native';

import { extractAccessibilityProps } from './extractAccessibilityProps';
import { extractTextPropsAndroid } from './extractTextPropsAndroid';
import { extractTextPropsIOS } from './extractTextPropsIOS';

export const extractTextProps = (props: TextProps): TextProps => {
  const {
    allowFontScaling,
    ellipsizeMode,
    lineBreakMode,
    maxFontSizeMultiplier,
    nativeID,
    numberOfLines,
    onLayout,
    onLongPress,
    onPress,
    style,
    testID,
  } = props;

  return {
    ...extractAccessibilityProps(props),
    ...extractTextPropsAndroid(props),
    ...extractTextPropsIOS(props),
    ...((allowFontScaling && { allowFontScaling }) || {}),
    ...((ellipsizeMode && { ellipsizeMode }) || {}),
    ...((lineBreakMode && { lineBreakMode }) || {}),
    ...((maxFontSizeMultiplier && { maxFontSizeMultiplier }) || {}),
    ...((nativeID && { nativeID }) || {}),
    ...((numberOfLines && { numberOfLines }) || {}),
    ...((onLayout && { onLayout }) || {}),
    ...((onLongPress && { onLongPress }) || {}),
    ...((onPress && { onPress }) || {}),
    ...((style && { style }) || {}),
    ...((testID && { testID }) || {}),
  };
};
