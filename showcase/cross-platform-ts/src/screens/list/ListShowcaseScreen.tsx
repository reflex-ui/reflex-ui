/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Caption,
  ColorTheme,
  Column,
  List,
  ListItem,
  Paragraph1,
  Paragraph2,
  Size,
  TouchableSurface,
} from '@reflex-ui/core';
import { FavoriteIcon, MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView } from 'react-native';

const onListItemPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListShowcaseScreen().onListItemPress()');
};

const ListShowcaseScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Caption margin={Size.L}>List, ColorTheme.SurfaceNormal (default)</Caption>
    <List>
      <ListItem>
        <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
      </ListItem>
      <TouchableSurface onPress={onListItemPress}>
        <ListItem>
          <FavoriteIcon marginHorizontal={Size.XS} />
          <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
          <Column flexGrow={1} />
          <MenuIcon marginHorizontal={Size.XS} />
          <Caption marginHorizontal={Size.XS}>Jan 26, 2019</Caption>
        </ListItem>
      </TouchableSurface>
      <ListItem>
        <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
      </ListItem>
    </List>
    <Caption margin={Size.L}>List, ColorTheme.PrimaryNormal</Caption>
    <List colorTheme={ColorTheme.PrimaryNormal}>
      <ListItem>
        <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
      </ListItem>
      <TouchableSurface invertColor onPress={onListItemPress}>
        <ListItem>
          <FavoriteIcon marginHorizontal={Size.XS} />
          <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
        </ListItem>
      </TouchableSurface>
      <ListItem>
        <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
      </ListItem>
    </List>
    <Caption margin={Size.L}>List, ColorTheme.SurfaceNormal (default)</Caption>
    <List>
      <TouchableSurface onPress={onListItemPress}>
        <ListItem>
          <FavoriteIcon marginHorizontal={Size.XS} />
          <Column flexShrink={1}>
            <Paragraph1 marginHorizontal={Size.XS}>
              Brunch this weekend?
            </Paragraph1>
            <Paragraph2 marginHorizontal={Size.XS} numberOfLines={1}>
              Ali Connors
              <Paragraph2 marginHorizontal={Size.XS}>
                I'll be in your neighborhood doing errands this weekend.
              </Paragraph2>
            </Paragraph2>
          </Column>
        </ListItem>
      </TouchableSurface>
      <TouchableSurface onPress={onListItemPress}>
        <ListItem>
          <FavoriteIcon marginHorizontal={Size.XS} />
          <Column flexShrink={1}>
            <Paragraph1 marginHorizontal={Size.XS} numberOfLines={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph1>
          </Column>
        </ListItem>
      </TouchableSurface>
    </List>
  </ScrollView>
);

ListShowcaseScreen.displayName = 'ListShowcaseScreen';

export { ListShowcaseScreen };
