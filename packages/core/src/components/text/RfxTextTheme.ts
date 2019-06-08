/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RfxTextProps } from './RfxTextProps';
import { TextTheme } from './TextTheme';

export interface RfxTextTheme {
  readonly text?: TextTheme<RfxTextProps>;
}
