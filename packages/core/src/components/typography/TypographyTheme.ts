/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextStyle } from 'react-native';

export interface TypographyTheme {
  readonly caption: TextStyle;
  readonly headline1: TextStyle;
  readonly headline2: TextStyle;
  readonly headline3: TextStyle;
  readonly headline4: TextStyle;
  readonly headline5: TextStyle;
  readonly headline6: TextStyle;
  readonly overline: TextStyle;
  readonly paragraph1: TextStyle;
  readonly paragraph2: TextStyle;
  readonly subtitle1: TextStyle;
  readonly subtitle2: TextStyle;
}

export type OptionalTypographyTheme = Partial<TypographyTheme>;
