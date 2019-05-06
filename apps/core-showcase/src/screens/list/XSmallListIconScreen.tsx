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
  DimensionsContext,
  List,
  ListItem,
  Paragraph1,
  Paragraph2,
  Screen,
  Size,
  SurfacePropsOptional,
  TouchableSurface,
} from '@reflex-ui/core';
import {
  InboxIcon,
  LabelIcon,
  MenuIcon,
  MoreVertIcon,
  StarIcon,
  WatchLaterIcon,
} from '@reflex-ui/icons-md';
import React, { useContext } from 'react';
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
  <List maxWidth={getListMaxWidth(useContext(DimensionsContext))} {...props}>
    <TouchableSurface activated contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Column marginHorizontal={Size.S}>
          <InboxIcon size={Size.S} />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Column marginHorizontal={Size.S}>
          <StarIcon size={Size.S} />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} disabled onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Column marginHorizontal={Size.S}>
          <WatchLaterIcon size={Size.S} />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
        <Column flexGrow={1} />
        <Button
          onPress={onListItemIconPress}
          size={Size.XS}
          variant={ButtonVariant.Icon}
        >
          <MoreVertIcon />
        </Button>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface contained={false} onPress={onListItemPress}>
      <ListItem size={Size.XS}>
        <Column marginHorizontal={Size.S}>
          <LabelIcon size={Size.S} />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
        <Column flexGrow={1} />
        <Button
          onPress={onListItemIconPress}
          size={Size.XS}
          variant={ButtonVariant.Icon}
        >
          <MoreVertIcon />
        </Button>
      </ListItem>
    </TouchableSurface>
  </List>
);

const XSmallListIconScreen: React.SFC = (): JSX.Element => (
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

XSmallListIconScreen.displayName = 'XSmallListIconScreen';

export { XSmallListIconScreen };
