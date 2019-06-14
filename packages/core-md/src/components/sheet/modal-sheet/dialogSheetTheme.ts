/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSheetProps,
  ModalSheetPropsOptional,
  ModalSheetTheme,
  SurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';

// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';

export const getModalDialogSheetProps = ({
  enableOnLayout,
}: ModalSheetProps): ModalSheetPropsOptional => ({
  enableOnLayout: enableOnLayout !== undefined ? enableOnLayout : true,
});

export const getModalDialogSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  /*
   * In my tests it seems that onLayout is always invoked twice
   * for this Surface component (via enableOnLayout), and on a
   * real Android device before I was using Math.floor to calculate
   * height below I was getting two slightly different values
   * on first and second times
   * (like 473.6666564941406 and 473.3333435058594).
   * Those values are used to calculate the top position,
   * and since its based on height, it was also returning
   * two slightly different values.
   * Those different values was making onLayout be called
   * repeatedly and infinitely, rendering Surface component and
   * calling this getModalSurfaceTheme() function
   * also repeatedly and infinitely.
   * Using Math.floor() solved the issue here, and I think
   * it makes sense to adopt it as a best practice for such cases,
   * unless you really need highly precise values, in which case
   * you might have to find another fix.
   */
  const windowWidth = Math.floor(props.dimensions.window.width);
  const windowHeight = Math.floor(props.dimensions.window.height);
  const isUpToSmallTablet =
    windowWidth <= props.breakpoints.smallTablet ? true : false;

  let { height, width } = props;
  if (width === undefined) {
    width = isUpToSmallTablet ? 280 : 560;
    if (width > windowWidth) width = Math.floor(windowWidth * 0.8);
  }

  let opacity = props.isOpen ? 1 : 0;
  if (height === undefined) {
    if (props.enableOnLayout && props.layoutRectangle !== undefined) {
      height = Math.floor(props.layoutRectangle.height);
    }
  }

  let top = 0;
  let left = 0;
  if (height === undefined) {
    opacity = 0;
  } else {
    if (height > windowHeight) height = Math.floor(windowHeight * 0.8);
    top = Math.floor(windowHeight / 2 - (height as number) / 2);
    left = Math.floor(windowWidth / 2 - (width as number) / 2);
  }

  const maxHeight =
    props.maxHeight !== undefined
      ? props.maxHeight
      : Math.floor(windowHeight * 0.8);

  return {
    left,
    maxHeight,
    opacity,
    position: 'absolute',
    top,
    width,
    ...(props.elevation === undefined && getElevationStyles(16)),
  };
};

export const modalDialogSheetTheme: ModalSheetTheme = {
  getProps: getModalDialogSheetProps,
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalDialogSheetSurfaceStyle,
    },
  }),
};
