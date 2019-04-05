/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewPropsIOS } from 'react-native';

export const extractViewPropsIOS = (props: ViewPropsIOS): ViewPropsIOS => {
  const {
    accessibilityActions,
    accessibilityViewIsModal,
    onAccessibilityAction,
    shouldRasterizeIOS,
  } = props;

  return {
    ...((accessibilityActions && { accessibilityActions }) || {}),
    ...((accessibilityViewIsModal && { accessibilityViewIsModal }) || {}),
    ...((onAccessibilityAction && { onAccessibilityAction }) || {}),
    ...((shouldRasterizeIOS && { shouldRasterizeIOS }) || {}),
  };
};
