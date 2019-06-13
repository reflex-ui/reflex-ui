/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Column,
  List,
  ListItem,
  Paragraph1,
  Size,
  SurfacePropsOptional,
  Touchable,
} from '@reflex-ui/core';
import { DeleteIcon, EditIcon, LinkIcon, ShareIcon } from '@reflex-ui/icons-md';
import React from 'react';

export interface FileMenuProps extends SurfacePropsOptional {
  readonly onClosePress?: () => void;
}

const FileMenu: React.SFC<FileMenuProps> = ({
  onClosePress,
  ...surfaceProps
}: FileMenuProps): JSX.Element => (
  <List {...surfaceProps}>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <ShareIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Share</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <LinkIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Get link</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <EditIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Edit name</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <DeleteIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Delete collection</Paragraph1>
      </ListItem>
    </Touchable>
  </List>
);

FileMenu.displayName = 'FileMenu';

export { FileMenu };
