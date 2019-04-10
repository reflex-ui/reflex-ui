/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Headline6, Row, Size } from '@reflex-ui/core';
import { AlarmIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { IconCollectionProps } from './IconCollectionProps';

const IconCollection: React.SFC<IconCollectionProps> = ({
  invertColor,
  paletteColor,
  title,
}): JSX.Element => (
  <React.Fragment>
    <Row margin={Size.M}>
      <Headline6>{title}</Headline6>
    </Row>
    <Row>
      <AlarmIcon
        invertColor={invertColor}
        paletteColor={paletteColor}
        size={Size.XXS}
      />
      <AlarmIcon
        invertColor={invertColor}
        paletteColor={paletteColor}
        size={Size.XS}
      />
      <AlarmIcon
        invertColor={invertColor}
        paletteColor={paletteColor}
        size={Size.S}
      />
      <AlarmIcon invertColor={invertColor} paletteColor={paletteColor} />
      <AlarmIcon
        invertColor={invertColor}
        paletteColor={paletteColor}
        size={Size.L}
      />
      <AlarmIcon
        invertColor={invertColor}
        paletteColor={paletteColor}
        size={Size.XL}
      />
      <AlarmIcon
        invertColor={invertColor}
        paletteColor={paletteColor}
        size={Size.XXL}
      />
    </Row>
  </React.Fragment>
);

IconCollection.displayName = 'IconCollection';

export { IconCollection };
