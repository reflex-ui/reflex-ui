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
  TouchableSurface,
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
    <TouchableSurface activated contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} disabled onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
      </ListItem>
    </TouchableSurface>
  </List>
);

const XSmallListScreen: React.SFC = (): JSX.Element => (
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
        {'<ListItem size={Size.XS}>'}
      </Paragraph2>
      <MyList />
    </ScrollView>
  </Screen>
);

XSmallListScreen.displayName = 'XSmallListScreen';

export { XSmallListScreen };
