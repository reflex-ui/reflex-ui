/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SheetPropsBase } from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

export const getCommonTopBottomSheetSurfaceStyle = <
  Props extends SheetPropsBase<Props, Theme>,
  Theme
>(
  props: Props,
): ViewStyle => {
  const windowHeight = props.dimensions.window.height;
  const flex = props.flex !== undefined ? props.flex : 1;

  let opacity = 1;
  let { height } = props;
  if (height === undefined) {
    if (props.enableOnLayout) {
      const { layoutRectangle } = props;
      if (layoutRectangle !== undefined) {
        height = Math.floor(layoutRectangle.height);
      }
    } else {
      height = Math.floor(windowHeight / 2);
    }
  }
  if (height === undefined) {
    opacity = 0;
  } else if (height > windowHeight) {
    height = windowHeight * 0.8;
  }

  const maxHeight = props.maxHeight !== undefined ? props.maxHeight : height;
  const width = props.width !== undefined ? props.width : '100%';

  return {
    display: props.isOpen ? 'flex' : 'none',
    flex,
    ...(props.height !== undefined && { height: props.height }),
    maxHeight,
    opacity,
    width,
  };
};
