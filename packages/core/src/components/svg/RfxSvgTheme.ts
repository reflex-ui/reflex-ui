/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { RfxSvgProps } from './RfxSvgProps';
import { RfxSvgPropsOptionalGetter } from './RfxSvgPropsGetter';
import { SvgTheme } from './SvgTheme';

export interface RfxSvgTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewTheme<RfxSvgProps>;
  readonly getProps?: RfxSvgPropsOptionalGetter<RfxSvgProps>;
  readonly svg?: SvgTheme<RfxSvgProps>;
}
