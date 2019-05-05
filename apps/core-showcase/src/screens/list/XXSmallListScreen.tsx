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
  List,
  ListItem,
  Paragraph2,
  RfxViewProps,
  Screen,
  Size,
  TouchableSurface,
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

const renderList = ({ breakpoints, dimensions }: RfxViewProps): JSX.Element => (
  <List maxWidth={getListMaxWidth({ breakpoints, dimensions })}>
    <TouchableSurface activated contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XXS}>
        <Paragraph2 marginHorizontal={Size.S}>Inbox</Paragraph2>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XXS}>
        <Paragraph2 marginHorizontal={Size.S}>Starred</Paragraph2>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} disabled onPress={onListItemPress}>
      <ListItem size={Size.XXS}>
        <Paragraph2 marginHorizontal={Size.S}>Snoozed</Paragraph2>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XXS}>
        <Paragraph2 marginHorizontal={Size.S}>Important</Paragraph2>
      </ListItem>
    </TouchableSurface>
  </List>
);

const XXSmallListScreen: React.SFC = (): JSX.Element => (
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
        {'<ListItem size={Size.XXS}>'}
      </Paragraph2>
      <Column>{renderList}</Column>
    </ScrollView>
  </Screen>
);

XXSmallListScreen.displayName = 'XXSmallListScreen';

export { XXSmallListScreen };
