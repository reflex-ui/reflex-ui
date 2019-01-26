/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Headline6, List, ListItem, TouchableSurface } from '@reflex-ui/core';
import * as React from 'react';
import { ScrollView } from 'react-native';

const onListItemPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListShowcaseScreen().onListItemPress()');
};

const ListShowcaseScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <List>
      <ListItem>
        <Headline6>Inbox</Headline6>
      </ListItem>
      <TouchableSurface onPress={onListItemPress}>
        <ListItem>
          <Headline6>Starred</Headline6>
        </ListItem>
      </TouchableSurface>
      <ListItem>
        <Headline6>Snoozed</Headline6>
      </ListItem>
    </List>
  </ScrollView>
);

ListShowcaseScreen.displayName = 'ListShowcaseScreen';

export { ListShowcaseScreen };
