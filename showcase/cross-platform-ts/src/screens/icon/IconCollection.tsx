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
  colorTheme,
  invertColor,
  title,
}): JSX.Element => (
  <React.Fragment>
    <Row margin={Size.M}>
      <Headline6>{title}</Headline6>
    </Row>
    <Row>
      <AlarmIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.XXS}
      />
      <AlarmIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.XS}
      />
      <AlarmIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.S}
      />
      <AlarmIcon colorTheme={colorTheme} invertColor={invertColor} />
      <AlarmIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.L}
      />
      <AlarmIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.XL}
      />
      <AlarmIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.XXL}
      />
    </Row>
  </React.Fragment>
);

IconCollection.displayName = 'IconCollection';

export { IconCollection };
