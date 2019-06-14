/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSheetTheme,
  SurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
import { getCommonSheetSurfaceStyle } from '../getCommonSheetSurfaceStyle';

export const getModalFullscreenDialogSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = () => ({
  ...getCommonSheetSurfaceStyle(),
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
});

export const modalFullscreenDialogSheetTheme: ModalSheetTheme = {
  surface: () => ({
    view: {
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getModalFullscreenDialogSheetSurfaceStyle,
    },
  }),
};
