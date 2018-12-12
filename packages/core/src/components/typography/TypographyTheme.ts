/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle } from 'react-native';

import {
  InjectableSubTheme,
  OptionalInjectableSubTheme,
} from '../subcomponents';
import { TypographyProps } from './TypographyProps';

export interface TypographyTheme {
  readonly appBarTitle: InjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly caption: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly headline1: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly headline2: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly headline3: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly headline4: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly headline5: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly headline6: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly overline: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly paragraph1: InjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly paragraph2: InjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly subtitle1: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
  readonly subtitle2: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
}

export interface OptionalTypographyTheme {
  readonly appBarTitle?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly caption?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline1?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline2?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline3?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline4?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline5?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline6?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly overline?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly paragraph1?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly paragraph2?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly subtitle1?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly subtitle2?: OptionalInjectableSubTheme<
    TypographyProps,
    TextProps,
    TextStyle
  >;
}
