/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Caption,
  Headline1,
  registerStyle,
  RowView,
  Size,
} from '@reflex-ui/core';
import * as React from 'react';
import { ScrollView, TextStyle } from 'react-native';

const captionStyle = registerStyle<TextStyle>({
  color: 'red',
  fontSize: 20,
});

const TypographyScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <RowView>
      <Caption selectable>Caption</Caption>
    </RowView>
    <RowView>
      <Caption selectable style={captionStyle}>
        Caption
      </Caption>
    </RowView>
    <RowView>
      <Headline1 selectable>Headline1</Headline1>
    </RowView>
    <RowView>
      <Headline1>H1</Headline1>
      <Headline1 marginHorizontal={Size.XL}>H1</Headline1>
    </RowView>
  </ScrollView>
);

TypographyScreen.displayName = 'TypographyScreen';

export { TypographyScreen };
