/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle } from 'react-native';

import { InjectableSubTheme } from '../subcomponents';
import { RfxTextProps } from './RfxTextProps';

export interface RfxTextVariantsTheme {
  readonly appBarTitle: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly caption: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly headline1: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly headline2: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly headline3: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly headline4: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly headline5: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly headline6: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly overline: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly paragraph1: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly paragraph2: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly subtitle1: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
  readonly subtitle2: InjectableSubTheme<RfxTextProps, TextProps, TextStyle>;
}
