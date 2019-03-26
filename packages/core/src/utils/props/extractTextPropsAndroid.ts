/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextPropsAndroid } from 'react-native';

export const extractTextPropsAndroid = (
  props: TextPropsAndroid,
): TextPropsAndroid => {
  const { selectable, selectionColor, textBreakStrategy } = props;

  return {
    ...((selectable && { selectable }) || {}),
    ...((selectionColor && { selectionColor }) || {}),
    ...((textBreakStrategy && { textBreakStrategy }) || {}),
  };
};
