/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignItems,
  Avatar,
  RfxViewPropsOptional,
  Row,
  Size,
} from '@reflex-ui/core';
import { FolderIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

const AvatarIconCollection: React.SFC<RfxViewPropsOptional> = (
  props,
): JSX.Element => (
  <Row alignItems={AlignItems.Center} {...props}>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.XXS}>
      <FolderIcon />
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.XS}>
      <FolderIcon />
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.S}>
      <FolderIcon />
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS}>
      <FolderIcon />
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.L}>
      <FolderIcon />
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.XL}>
      <FolderIcon />
    </Avatar>
    <Avatar invertColor={props.invertColor} size={Size.XXL}>
      <FolderIcon />
    </Avatar>
  </Row>
);

AvatarIconCollection.displayName = 'AvatarIconCollection';

export { AvatarIconCollection };
