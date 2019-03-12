/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableSurfaceChildrenProps } from './TouchableSurfaceChildrenProps';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';

export type TouchableSurfaceChildrenPropsGetter = (
  props: TouchableSurfaceProps,
) => TouchableSurfaceChildrenProps;
