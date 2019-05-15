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
import * as React from 'react';

const AvatarTextCollection: React.SFC<RfxViewPropsOptional> = (
  props,
): JSX.Element => (
  <Row alignItems={AlignItems.Center} {...props}>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.XXS}>
      m
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.XS}>
      m
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.S}>
      m
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS}>
      m
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.L}>
      m
    </Avatar>
    <Avatar invertColor={props.invertColor} marginEnd={Size.XS} size={Size.XL}>
      m
    </Avatar>
    <Avatar invertColor={props.invertColor} size={Size.XXL}>
      m
    </Avatar>
  </Row>
);

AvatarTextCollection.displayName = 'AvatarTextCollection';

export { AvatarTextCollection };
