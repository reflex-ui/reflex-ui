/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AccessibilityProps } from 'react-native';

export const filterOutAccessibilityProps = <Props extends AccessibilityProps>(
  props: Props,
): Pick<Props, Exclude<keyof Props, keyof AccessibilityProps>> => {
  const {
    // AccessibilityProps
    accessibilityHint,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessible,
    // AccessibilityPropsAndroid
    accessibilityComponentType,
    accessibilityLiveRegion,
    importantForAccessibility,
    // AccessibilityPropsIOS
    accessibilityElementsHidden,
    accessibilityIgnoresInvertColors,
    accessibilityTraits,
    onAccessibilityTap,
    onMagicTap,
    ...otherProps
  } = props;

  return otherProps;
};
