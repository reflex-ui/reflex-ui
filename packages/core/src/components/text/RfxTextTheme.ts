/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { RfxTextProps } from './RfxTextProps';
import { RfxTextPropsOptionalGetter } from './RfxTextPropsGetter';
import { BuiltInTextTheme } from './TextTheme';

export interface RfxTextTheme extends ComplexComponentTheme {
  readonly text?: BuiltInTextTheme<RfxTextProps>;
  readonly getProps?: RfxTextPropsOptionalGetter<RfxTextProps>;
}
