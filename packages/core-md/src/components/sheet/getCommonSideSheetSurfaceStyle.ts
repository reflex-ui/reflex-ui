/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getSizedPaddingStyle, SheetPropsBase } from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import { sizedSpacing } from '../../spacing/sizedSpacing';

export const getCommonSideSheetSurfaceStyle = <
  Props extends SheetPropsBase<Props, Theme>,
  Theme
>(
  props: Props,
): ViewStyle => {
  const flex = props.flex !== undefined ? props.flex : 1;
  const paddingHorizontal =
    props.paddingHorizontal !== undefined ? props.paddingHorizontal : 16;
  const paddingVertical =
    props.paddingVertical !== undefined ? props.paddingVertical : 20;
  const paddingStyle = getSizedPaddingStyle(sizedSpacing)({
    ...props,
    paddingHorizontal,
    paddingVertical,
  });
  let width = props.width;
  if (width === undefined) {
    width =
      props.dimensions.window.width <= props.breakpoints.largeHandset
        ? props.dimensions.window.width - 56
        : 320;
  }
  const maxWidth = props.maxWidth !== undefined ? props.maxWidth : width;
  const height =
    props.height !== undefined ? props.height : props.dimensions.window.height;

  return {
    display: props.isOpen ? 'flex' : 'none',
    flex,
    height,
    maxWidth,
    ...paddingStyle,
    width,
  };
};
