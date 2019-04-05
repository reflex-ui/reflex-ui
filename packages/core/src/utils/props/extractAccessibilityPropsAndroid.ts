/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AccessibilityPropsAndroid } from 'react-native';

export const extractAccessibilityPropsAndroid = (
  props: AccessibilityPropsAndroid,
): AccessibilityPropsAndroid => {
  const {
    accessibilityComponentType,
    accessibilityLiveRegion,
    importantForAccessibility,
  } = props;

  return {
    ...((accessibilityComponentType && { accessibilityComponentType }) || {}),
    ...((accessibilityLiveRegion && { accessibilityLiveRegion }) || {}),
    ...((importantForAccessibility && { importantForAccessibility }) || {}),
  };
};
