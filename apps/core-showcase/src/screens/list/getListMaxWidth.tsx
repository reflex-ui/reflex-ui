/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DimensionsProps } from '@reflex-ui/core';

export const getListMaxWidth = ({
  breakpoints,
  dimensions,
}: DimensionsProps): number | string =>
  dimensions.window.width < breakpoints.largeTablet ? 'auto' : 360;
