/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Paragraph1,
  Paragraph2,
  registerStyle,
  Size,
  Subtitle1,
  Subtitle2,
} from '@reflex-ui/core';
import * as React from 'react';
import { ScrollView, TextStyle } from 'react-native';

const captionStyle = registerStyle<TextStyle>({
  color: 'red',
  fontSize: 20,
});

const TypographyScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Headline1>Hello Headline 1</Headline1>
    <Headline2>Hello Headline 2</Headline2>
    <Headline3>Hello Headline 3</Headline3>
    <Headline4 marginVertical={Size.XXS}>Hello Headline 4</Headline4>
    <Headline5 marginVertical={Size.XXS}>Hello Headline 5</Headline5>
    <Headline6 marginVertical={Size.XS}>Hello Headline 6</Headline6>
    <Subtitle1 marginVertical={Size.XS}>Hello Subtitle 1</Subtitle1>
    <Subtitle2 marginVertical={Size.XS}>Hello Subtitle 2</Subtitle2>
    <Paragraph1 marginVertical={Size.XS}>
      Hello Paragraph1 lorem ipsum dolor sit amet.
    </Paragraph1>
    <Paragraph2 marginVertical={Size.XS}>
      Hello Paragraph2 lorem ipsum dolor sit amet.
    </Paragraph2>
    <Caption marginVertical={Size.XS} selectable>
      Caption lorem ipsum
    </Caption>
    <Caption marginVertical={Size.XS} selectable style={captionStyle}>
      Caption
    </Caption>
    <Overline marginVertical={Size.XS}>Hellow Overline</Overline>
  </ScrollView>
);

TypographyScreen.displayName = 'TypographyScreen';

export { TypographyScreen };
