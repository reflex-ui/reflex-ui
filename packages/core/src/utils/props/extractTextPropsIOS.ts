/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextPropsIOS } from 'react-native';

export const extractTextPropsIOS = (props: TextPropsIOS): TextPropsIOS => {
  const {
    adjustsFontSizeToFit,
    minimumFontScale,
    suppressHighlighting,
  } = props;

  return {
    ...((adjustsFontSizeToFit && { adjustsFontSizeToFit }) || {}),
    ...((minimumFontScale && { minimumFontScale }) || {}),
    ...((suppressHighlighting && { suppressHighlighting }) || {}),
  };
};
