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
  Caption,
  Column,
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
import {
  InboxIcon,
  LabelIcon,
  MenuIcon,
  MoreVertIcon,
  StarIcon,
  WatchLaterIcon,
} from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

import { getListMaxWidth } from './getListMaxWidth';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSIconScreen().onButtonPress()');
};

const onListItemPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSIconScreen().onListItemPress()');
};

const onListItemIconPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSIconScreen().onListItemIconPress()');
};

const MyList = (props: SurfacePropsOptional): JSX.Element => (
  <List maxWidth={getListMaxWidth(useResponsiveness())} {...props}>
    <Touchable activated onPress={onListItemPress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <InboxIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onListItemPress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <StarIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable disabled onPress={onListItemPress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <WatchLaterIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
        <Column flexGrow={1} />
        <Button onPress={onListItemIconPress} variant={ButtonVariant.Icon}>
          <MoreVertIcon />
        </Button>
        <Caption marginHorizontal={Size.XS}>Jan 26, 2019</Caption>
      </ListItem>
    </Touchable>
    <Touchable onPress={onListItemPress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <LabelIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
        <Column flexGrow={1} />
        <Button onPress={onListItemIconPress} variant={ButtonVariant.Icon}>
          <MoreVertIcon />
        </Button>
        <Caption marginHorizontal={Size.XS}>Jan 26, 2019</Caption>
      </ListItem>
    </Touchable>
  </List>
);

const MediumListIconScreen: React.SFC = (): JSX.Element => (
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
        {'<ListItem size={Size.M}>'}
      </Paragraph2>
      <MyList />
    </ScrollView>
  </Screen>
);

MediumListIconScreen.displayName = 'MediumListIconScreen';

export { MediumListIconScreen };
