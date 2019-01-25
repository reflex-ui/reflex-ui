/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Headline6, List, ListItem } from '@reflex-ui/core';
import * as React from 'react';
import { ScrollView } from 'react-native';

const ListShowcaseScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <List>
      <ListItem>
        <Headline6>Inbox</Headline6>
      </ListItem>
      <ListItem>
        <Headline6>Starred</Headline6>
      </ListItem>
      <ListItem>
        <Headline6>Snoozed</Headline6>
      </ListItem>
    </List>
  </ScrollView>
);

ListShowcaseScreen.displayName = 'ListShowcaseScreen';

export { ListShowcaseScreen };
