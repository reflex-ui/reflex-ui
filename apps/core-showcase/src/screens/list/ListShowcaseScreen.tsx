/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarTitle,
  Button,
  ButtonVariant,
  Column,
  Paragraph1,
  Paragraph2,
  Screen,
  Size,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListShowcaseScreen().onButtonPress()');
};

const ListShowcaseScreen: React.SFC = (): JSX.Element => (
  <Screen>
    <AppBar>
      <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>List & ListItem</AppBarTitle>
    </AppBar>
    <ScrollView>
      <Column margin={Size.L}>
        <Paragraph1>
          The screens in this section showcase {'<List> and <ListItem>'}{' '}
          components.
        </Paragraph1>
        <Paragraph1 marginTop={Size.XS}>
          These are the most common props to {'<List>'} and their default
          values:
        </Paragraph1>
        <Paragraph2 marginStart={Size.XS} marginTop={Size.XXS}>
          {'paletteColor={palette.surface}'}
        </Paragraph2>
        <Paragraph1 marginTop={Size.XL}>
          We also pass {'maxWidth={listMaxWidth}'} to all lists in this screen.
          {'\n'}
          The value of listMaxWidth is the result of the following computation:
        </Paragraph1>
        <Paragraph1 marginTop={Size.M}>
          {[
            'dimensions.window.width < breakpoints.largeTablet',
            "? 'auto' : 360",
          ].join(' ')}
        </Paragraph1>
        <Paragraph1 marginTop={Size.M}>
          That means we limit its size to 360 for large screens, and let it
          grows to the size of its container for small screens.
        </Paragraph1>
        <Paragraph1 marginTop={Size.M}>
          Use the drawer navigation to see the examples.
        </Paragraph1>
      </Column>
    </ScrollView>
  </Screen>
);

ListShowcaseScreen.displayName = 'ListShowcaseScreen';

export { ListShowcaseScreen };
