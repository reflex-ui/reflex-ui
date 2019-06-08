/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { SvgTheme } from './SvgTheme';

export interface RfxSvgTheme
  extends ComponentTheme<RfxSvgProps, RfxSvgPropsOptional> {
  readonly svg?: SvgTheme<RfxSvgProps>;
}
