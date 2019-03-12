/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInTextChildTheme } from '../text/TextChildTheme';
import { RfxTextProps } from './RfxTextProps';

export interface RfxTextVariantsTheme {
  readonly appBarTitle: BuiltInTextChildTheme<RfxTextProps>;
  readonly caption: BuiltInTextChildTheme<RfxTextProps>;
  readonly headline1: BuiltInTextChildTheme<RfxTextProps>;
  readonly headline2: BuiltInTextChildTheme<RfxTextProps>;
  readonly headline3: BuiltInTextChildTheme<RfxTextProps>;
  readonly headline4: BuiltInTextChildTheme<RfxTextProps>;
  readonly headline5: BuiltInTextChildTheme<RfxTextProps>;
  readonly headline6: BuiltInTextChildTheme<RfxTextProps>;
  readonly overline: BuiltInTextChildTheme<RfxTextProps>;
  readonly paragraph1: BuiltInTextChildTheme<RfxTextProps>;
  readonly paragraph2: BuiltInTextChildTheme<RfxTextProps>;
  readonly subtitle1: BuiltInTextChildTheme<RfxTextProps>;
  readonly subtitle2: BuiltInTextChildTheme<RfxTextProps>;
}
