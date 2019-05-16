/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  RfxImagePropsBase,
  RfxImageTheme,
} from '@reflex-ui/core';

import { ImageStyle } from 'react-native';

import { sizedSpacing } from '../../spacing/sizedSpacing';

export const getCommonRfxImageStyle = <
  Props extends RfxImagePropsBase<Props, Theme>,
  Theme
>(
  props: Props,
): ImageStyle => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...(props.height && { height: props.height }),
  ...(props.width && { width: props.width }),
});

export const imageTheme: RfxImageTheme = {
  getStyle: getCommonRfxImageStyle,
};
