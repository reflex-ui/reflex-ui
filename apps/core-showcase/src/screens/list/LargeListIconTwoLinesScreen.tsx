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
  RfxViewProps,
  Screen,
  Size,
  TouchableSurface,
} from '@reflex-ui/core';
import { AccountCircleIcon, MenuIcon } from '@reflex-ui/icons-md';
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

const renderList = ({ breakpoints, dimensions }: RfxViewProps): JSX.Element => (
  <List maxWidth={getListMaxWidth({ breakpoints, dimensions })}>
    <TouchableSurface
      contained={false}
      flexWrap={FlexWrap.Nowrap}
      onPress={onListItemPress}
    >
      <ListItem flexWrap={FlexWrap.Nowrap} size={Size.L}>
        <Column marginHorizontal={Size.S}>
          <AccountCircleIcon size={Size.XL} />
        </Column>
        <Column flexShrink={1} marginHorizontal={Size.S}>
          <Paragraph1 numberOfLines={1}>Brunch this weekend?</Paragraph1>
          <Paragraph2 numberOfLines={1}>
            Ali Connors -
            <Paragraph2>
              I'll be in your neighborhood doing errands this weekend.
            </Paragraph2>
          </Paragraph2>
        </Column>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface
      contained={false}
      disabled
      flexWrap={FlexWrap.Nowrap}
      onPress={onListItemPress}
    >
      <ListItem flexWrap={FlexWrap.Nowrap} size={Size.L}>
        <Column marginHorizontal={Size.S}>
          <AccountCircleIcon size={Size.XL} />
        </Column>
        <Column flexShrink={1} marginHorizontal={Size.S}>
          <Paragraph1 numberOfLines={1}>Summer BBQ</Paragraph1>
          <Paragraph2 numberOfLines={1}>
            to Alex, Scott, Jennifer -
            <Paragraph2>
              Wish I could come, but I'm out of town this weekend.
            </Paragraph2>
          </Paragraph2>
        </Column>
      </ListItem>
    </TouchableSurface>
    <TouchableSurface
      contained={false}
      flexWrap={FlexWrap.Nowrap}
      onPress={onListItemPress}
    >
      <ListItem flexWrap={FlexWrap.Nowrap} size={Size.L}>
        <Column marginHorizontal={Size.S}>
          <AccountCircleIcon size={Size.XL} />
        </Column>
        <Column flexShrink={1} marginHorizontal={Size.S}>
          <Paragraph1 numberOfLines={1}>Birthday Gift</Paragraph1>
          <Paragraph2 numberOfLines={1}>
            Trevor Hansen -
            <Paragraph2>
              Have any ideas about what we should get Heidi for her birthday?
            </Paragraph2>
          </Paragraph2>
        </Column>
      </ListItem>
    </TouchableSurface>
  </List>
);

const LargeListIconTwoLinesScreen: React.SFC = (): JSX.Element => (
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
      <Column>{renderList}</Column>
    </ScrollView>
  </Screen>
);

LargeListIconTwoLinesScreen.displayName = 'LargeListIconTwoLinesScreen';

export { LargeListIconTwoLinesScreen };
