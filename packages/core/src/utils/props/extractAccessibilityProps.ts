/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AccessibilityProps } from 'react-native';

import {
  extractAccessibilityPropsAndroid,
  extractAccessibilityPropsIOS,
} from './';

export const extractAccessibilityProps = (
  props: AccessibilityProps,
): AccessibilityProps => {
  const {
    accessibilityHint,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessible,
  } = props;

  return {
    ...extractAccessibilityPropsAndroid(props),
    ...extractAccessibilityPropsIOS(props),
    ...((accessibilityHint && { accessibilityHint }) || {}),
    ...((accessibilityLabel && { accessibilityLabel }) || {}),
    ...((accessibilityRole && { accessibilityRole }) || {}),
    ...((accessibilityStates && { accessibilityStates }) || {}),
    ...((accessible && { accessible }) || {}),
  };
};
