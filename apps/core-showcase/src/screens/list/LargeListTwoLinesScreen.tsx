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
  FlexWrap,
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
    <Touchable onPress={onListItemPress}>
      <ListItem flexWrap={FlexWrap.Nowrap} size={Size.L}>
        <Column flexShrink={1} marginHorizontal={Size.S}>
          <Paragraph1 numberOfLines={1}>Brunch this weekend?</Paragraph1>
          <Paragraph2 numberOfLines={1}>
            Ali Connors -{' '}
            <Paragraph2>
              I'll be in your neighborhood doing errands this weekend.
            </Paragraph2>
          </Paragraph2>
        </Column>
      </ListItem>
    </Touchable>
    <Touchable disabled onPress={onListItemPress}>
      <ListItem flexWrap={FlexWrap.Nowrap} size={Size.L}>
        <Column flexShrink={1} marginHorizontal={Size.S}>
          <Paragraph1 numberOfLines={1}>Summer BBQ</Paragraph1>
          <Paragraph2 numberOfLines={1}>
            to Alex, Scott, Jennifer -{' '}
            <Paragraph2>
              Wish I could come, but I'm out of town this weekend.
            </Paragraph2>
          </Paragraph2>
        </Column>
      </ListItem>
    </Touchable>
    <Touchable onPress={onListItemPress}>
      <ListItem flexWrap={FlexWrap.Nowrap} size={Size.L}>
        <Column flexShrink={1} marginHorizontal={Size.S}>
          <Paragraph1 numberOfLines={1}>Birthday Gift</Paragraph1>
          <Paragraph2 numberOfLines={1}>
            Trevor Hansen -{' '}
            <Paragraph2>
              Have any ideas about what we should get Heidi for her birthday?
            </Paragraph2>
          </Paragraph2>
        </Column>
      </ListItem>
    </Touchable>
  </List>
);

const LargeListTwoLinesScreen: React.SFC = (): JSX.Element => (
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
        {'<ListItem size={Size.L}>'}
      </Paragraph2>
      <MyList />
    </ScrollView>
  </Screen>
);

LargeListTwoLinesScreen.displayName = 'LargeListTwoLinesScreen';

export { LargeListTwoLinesScreen };
