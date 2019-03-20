/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../../utils-ts/Function1';
import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { SvgTheme } from './SvgTheme';

export interface RfxSvgTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewTheme<RfxSvgProps>;
  readonly getProps?: Function1<RfxSvgProps, RfxSvgPropsOptional>;
  readonly svg?: SvgTheme<RfxSvgProps>;
}
