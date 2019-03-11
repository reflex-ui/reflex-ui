/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle } from 'react-native';

import {
  InjectableSubTheme,
  InjectableSubThemeOptional,
} from '../subcomponents';
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

export interface RfxTextVariantsThemeOptional {
  readonly appBarTitle?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly caption?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly headline1?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly headline2?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly headline3?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly headline4?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly headline5?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly headline6?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly overline?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly paragraph1?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly paragraph2?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly subtitle1?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
  readonly subtitle2?: InjectableSubThemeOptional<
    RfxTextProps,
    TextProps,
    TextStyle
  >;
}
