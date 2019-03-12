/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RfxViewChildrenProps } from './RfxViewChildrenProps';
import { RfxViewProps } from './RfxViewProps';

export type RfxViewChildrenPropsGetter = (
  props: RfxViewProps,
) => RfxViewChildrenProps;
