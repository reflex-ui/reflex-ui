/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SurfaceProps, ViewPropsGetter } from '@reflex-ui/core';

export const getCommonModalSheetSurfaceProps: ViewPropsGetter<
  SurfaceProps
> = () => ({
  pointerEvents: 'auto',
});
