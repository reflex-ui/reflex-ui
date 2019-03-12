/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { RfxSvgProps } from './RfxSvgProps';
import { SvgChildTheme } from './SvgChildTheme';

export interface RfxSvgTheme {
  readonly container: BuiltInViewChildTheme<RfxSvgProps>;
  readonly svg: SvgChildTheme<RfxSvgProps>;
}
