/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Avatar,
  AvatarImage,
  List,
  ListItem,
  Paragraph1,
  Size,
  SurfacePropsOptional,
  Touchable,
} from '@reflex-ui/core';
import { AddIcon, PersonIcon } from '@reflex-ui/icons-md';
import React from 'react';

export interface AccountListProps extends SurfacePropsOptional {
  readonly onItemPress?: () => void;
}

const AccountList: React.SFC<AccountListProps> = ({
  onItemPress,
  ...surfaceProps
}: AccountListProps): JSX.Element => (
  <List {...surfaceProps}>
    <Touchable onPress={onItemPress}>
      <ListItem size={Size.M}>
        <AvatarImage
          marginHorizontal={Size.S}
          source={require('../../screens/avatar-image/avatar.jpg')}
        />
        <Paragraph1 marginHorizontal={Size.S}>user01@email.com</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onItemPress}>
      <ListItem size={Size.M}>
        <Avatar marginHorizontal={Size.S}>
          <PersonIcon />
        </Avatar>
        <Paragraph1 marginHorizontal={Size.S}>user02@email.com</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onItemPress}>
      <ListItem size={Size.M}>
        <Avatar marginHorizontal={Size.S}>
          <PersonIcon />
        </Avatar>
        <Paragraph1 marginHorizontal={Size.S}>user03@email.com</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onItemPress}>
      <ListItem size={Size.M}>
        <Avatar marginHorizontal={Size.S}>
          <AddIcon />
        </Avatar>
        <Paragraph1 marginHorizontal={Size.S}>Add account</Paragraph1>
      </ListItem>
    </Touchable>
  </List>
);

AccountList.displayName = 'AccountList';

export { AccountList };
