/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getSizedPaddingStyle,
  getThemedColor,
  ListProps,
  ListTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getSizingStyle } from '../../sizing/getSizingStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

export const getListContainerStyle: ViewStyleGetter<ListProps> = props => ({
  backgroundColor: getThemedColor(props),
  paddingVertical: 8,
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
});

export const listTheme: ListTheme = {
  getStyle: getListContainerStyle,
};
