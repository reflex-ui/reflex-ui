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
  List,
  ListItem,
  Paragraph1,
  Paragraph2,
  Screen,
  Size,
  SurfacePropsOptional,
  Touchable,
  useResponsiveness,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

import { getListMaxWidth } from './getListMaxWidth';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSScreen().onButtonPress()');
};

const onListItemPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSScreen().onListItemPress()');
};

const MyList = (props: SurfacePropsOptional): JSX.Element => (
  <List maxWidth={getListMaxWidth(useResponsiveness())} {...props}>
    <Touchable activated onPress={onListItemPress}>
      <ListItem size={Size.S}>
        <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onListItemPress}>
      <ListItem size={Size.S}>
        <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable disabled onPress={onListItemPress}>
      <ListItem size={Size.S}>
        <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onListItemPress}>
      <ListItem size={Size.S}>
        <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
      </ListItem>
    </Touchable>
  </List>
);

const SmallListScreen: React.SFC = (): JSX.Element => (
  <Screen>
    <AppBar>
      <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>List & ListItem</AppBarTitle>
    </AppBar>
    <ScrollView>
      <Paragraph2 margin={Size.L}>
        {'<List maxWidth={listMaxWidth}>'}
        {'\n'}
        {'<ListItem size={Size.S}>'}
      </Paragraph2>
      <MyList />
    </ScrollView>
  </Screen>
);

SmallListScreen.displayName = 'SmallListScreen';

export { SmallListScreen };
