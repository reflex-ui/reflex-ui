/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RfxSvgProps } from './RfxSvgProps';
import { SvgTheme } from './SvgTheme';

export interface RfxSvgTheme {
  readonly svg?: SvgTheme<RfxSvgProps>;
}
