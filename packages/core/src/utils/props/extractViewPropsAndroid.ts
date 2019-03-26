/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewPropsAndroid } from 'react-native';

export const extractViewPropsAndroid = (
  props: ViewPropsAndroid,
): ViewPropsAndroid => {
  const {
    collapsable,
    needsOffscreenAlphaCompositing,
    renderToHardwareTextureAndroid,
  } = props;

  return {
    ...((collapsable && { collapsable }) || {}),
    ...((needsOffscreenAlphaCompositing && {
      needsOffscreenAlphaCompositing,
    }) ||
      {}),
    ...((renderToHardwareTextureAndroid && {
      renderToHardwareTextureAndroid,
    }) ||
      {}),
  };
};
