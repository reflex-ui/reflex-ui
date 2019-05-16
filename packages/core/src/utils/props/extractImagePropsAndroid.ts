/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ImagePropsAndroid } from 'react-native';

export const extractImagePropsAndroid = <Props extends ImagePropsAndroid>(
  props: Props,
): ImagePropsAndroid => {
  const { fadeDuration, height, resizeMethod, width } = props;

  return {
    ...((fadeDuration && { fadeDuration }) || {}),
    ...((height && { height }) || {}),
    ...((resizeMethod && { resizeMethod }) || {}),
    ...((width && { width }) || {}),
  };
};
