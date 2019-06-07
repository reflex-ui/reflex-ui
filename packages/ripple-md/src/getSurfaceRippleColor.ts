/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getColor, SurfacePropsBase } from '@reflex-ui/core';

export const getSurfaceRippleColor = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>(
  props: Props,
) => getColor(props);
