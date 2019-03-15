/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { RfxSvgProps } from './RfxSvgProps';
import { RfxSvgPropsOptionalGetter } from './RfxSvgPropsGetter';
import { SvgChildTheme } from './SvgChildTheme';

export interface RfxSvgTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewChildTheme<RfxSvgProps>;
  readonly getProps?: RfxSvgPropsOptionalGetter<RfxSvgProps>;
  readonly svg?: SvgChildTheme<RfxSvgProps>;
}
