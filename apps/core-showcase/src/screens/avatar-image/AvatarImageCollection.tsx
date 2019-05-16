/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignItems,
  AvatarImage,
  RfxViewPropsOptional,
  Row,
  Size,
} from '@reflex-ui/core';
import * as React from 'react';

const AvatarImageCollection: React.SFC<RfxViewPropsOptional> = (
  props,
): JSX.Element => (
  <Row alignItems={AlignItems.Center} {...props}>
    <AvatarImage
      marginEnd={Size.XS}
      source={require('./avatar.jpg')}
      size={Size.XXS}
    />
    <AvatarImage
      marginEnd={Size.XS}
      source={require('./avatar.jpg')}
      size={Size.XS}
    />
    <AvatarImage
      marginEnd={Size.XS}
      source={require('./avatar.jpg')}
      size={Size.S}
    />
    <AvatarImage
      marginEnd={Size.XS}
      source={require('./avatar.jpg')}
      size={Size.M}
    />
    <AvatarImage
      marginEnd={Size.XS}
      source={require('./avatar.jpg')}
      size={Size.L}
    />
    <AvatarImage
      marginEnd={Size.XS}
      source={require('./avatar.jpg')}
      size={Size.XL}
    />
    <AvatarImage source={require('./avatar.jpg')} size={Size.XXL} />
  </Row>
);

AvatarImageCollection.displayName = 'AvatarImageCollection';

export { AvatarImageCollection };
