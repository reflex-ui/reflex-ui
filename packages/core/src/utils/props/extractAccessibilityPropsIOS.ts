/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AccessibilityPropsIOS } from 'react-native';

export const extractAccessibilityPropsIOS = (
  props: AccessibilityPropsIOS,
): AccessibilityPropsIOS => {
  const {
    accessibilityElementsHidden,
    accessibilityIgnoresInvertColors,
    accessibilityTraits,
    onAccessibilityTap,
    onMagicTap,
  } = props;

  return {
    ...((accessibilityElementsHidden && { accessibilityElementsHidden }) || {}),
    ...((accessibilityIgnoresInvertColors && {
      accessibilityIgnoresInvertColors,
    }) ||
      {}),
    ...((accessibilityTraits && { accessibilityTraits }) || {}),
    ...((onAccessibilityTap && { onAccessibilityTap }) || {}),
    ...((onMagicTap && { onMagicTap }) || {}),
  };
};
