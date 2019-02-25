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

export interface TypographyThemeOptional {
  readonly appBarTitle?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly caption?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline1?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline2?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline3?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline4?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline5?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly headline6?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly overline?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly paragraph1?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly paragraph2?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly subtitle1?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
  readonly subtitle2?: InjectableSubThemeOptional<
    TypographyProps,
    TextProps,
    TextStyle
  >;
}
