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
  const { breakpoints, dimensions, enableOnLayout, layoutRectangle } = props;
  // let { height } = props;
  const windowHeight = props.dimensions.window.height;
  const isUpToSmallTablet =
    dimensions.window.width <= breakpoints.smallHandset ? true : false;
  let maxHeight = props.maxHeight;
  if (maxHeight === undefined) {
    maxHeight = isUpToSmallTablet
      ? Math.floor(windowHeight * 0.8)
      : Math.floor(windowHeight / 2);
  }

  let opacity = 1;
  if (enableOnLayout && layoutRectangle === undefined) {
    opacity = 0;
  }

  /*
  let opacity = 1;
  if (height === undefined) {
    if (enableOnLayout) {
      if (
        layoutRectangle !== undefined &&
        !isNaN(layoutRectangle.height) &&
        layoutRectangle.height > 0
      ) {
        height = Math.floor(layoutRectangle.height);
      }
    } else {
      height = maxHeightLimit;
    }
  }
  if (height === undefined) {
    opacity = 0;
  } else if (height > maxHeightLimit) {
    height = maxHeightLimit;
  }
  */

  // const maxHeight = props.maxHeight !== undefined ? props.maxHeight : height;
  const width = props.width !== undefined ? props.width : '100%';
  /*
  console.log('getCommonTopBottomSheetSurfaceStyle() - props: ', props);
  console.log(
    `getCommonTopBottomSheetSurfaceStyle() - height: ${height} |
    maxHeight: ${maxHeight} | windowHeight: ${windowHeight}`,
  );
  */

  return {
    display: props.isOpen ? 'flex' : 'none',
    maxHeight,
    opacity,
    width,
  };
};

/*
export const getCommonTopBottomSheetSurfaceStyle = <
  Props extends SheetPropsBase<Props, Theme>,
  Theme
>(
  props: Props,
): ViewStyle => {
  const { breakpoints, dimensions, enableOnLayout, layoutRectangle } = props;
  let { height } = props;
  const windowHeight = props.dimensions.window.height;
  const isUpToSmallTablet =
    dimensions.window.width <= breakpoints.smallHandset ? true : false;
  let maxHeightLimit = props.maxHeight;
  if (maxHeightLimit === undefined) {
    maxHeightLimit = isUpToSmallTablet
      ? Math.floor(windowHeight * 0.8)
      : Math.floor(windowHeight / 2);
  }

  let opacity = 1;
  if (height === undefined) {
    if (enableOnLayout) {
      if (
        layoutRectangle !== undefined &&
        !isNaN(layoutRectangle.height) &&
        layoutRectangle.height > 0
      ) {
        height = Math.floor(layoutRectangle.height);
      }
    } else {
      height = maxHeightLimit;
    }
  }
  if (height === undefined) {
    opacity = 0;
  } else if (height > maxHeightLimit) {
    height = maxHeightLimit;
  }

  const maxHeight = props.maxHeight !== undefined ? props.maxHeight : height;
  const width = props.width !== undefined ? props.width : '100%';
  console.log('getCommonTopBottomSheetSurfaceStyle() - props: ', props);
  console.log(
    `getCommonTopBottomSheetSurfaceStyle() - height: ${height} |
    maxHeight: ${maxHeight} | windowHeight: ${windowHeight}`,
  );

  return {
    display: props.isOpen ? 'flex' : 'none',
    ...(props.height !== undefined && { height: props.height }),
    maxHeight,
    opacity,
    width,
  };
};
*/
