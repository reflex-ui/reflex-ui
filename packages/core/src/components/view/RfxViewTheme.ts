/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';
import { ViewTheme } from './ViewTheme';

export interface RfxViewTheme
  extends ComponentTheme<RfxViewProps, RfxViewPropsOptional> {
  readonly view?: ViewTheme<RfxViewProps>;
}
