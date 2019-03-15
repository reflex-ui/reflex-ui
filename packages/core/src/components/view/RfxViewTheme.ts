/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { RfxViewProps } from './RfxViewProps';
import { RfxViewPropsOptionalGetter } from './RfxViewPropsGetter';

export interface RfxViewTheme {
  readonly container?: BuiltInViewChildTheme<RfxViewProps>;
  readonly getProps?: RfxViewPropsOptionalGetter<RfxViewProps>;
}
