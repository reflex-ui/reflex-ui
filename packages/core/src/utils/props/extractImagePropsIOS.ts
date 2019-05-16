/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ImagePropsIOS } from 'react-native';

export const extractImagePropsIOS = <Props extends ImagePropsIOS>(
  props: Props,
): ImagePropsIOS => {
  const { blurRadius, capInsets, onPartialLoad, onProgress } = props;

  return {
    ...((blurRadius && { blurRadius }) || {}),
    ...((capInsets && { capInsets }) || {}),
    ...((onPartialLoad && { onPartialLoad }) || {}),
    ...((onProgress && { onProgress }) || {}),
  };
};
