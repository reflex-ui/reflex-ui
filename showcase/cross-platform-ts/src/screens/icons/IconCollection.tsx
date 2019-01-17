/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Headline6, Row, Size } from '@reflex-ui/core';
import { FavoriteIcon } from '@reflex-ui/material-design';
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
      <FavoriteIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.XS}
      />
      <FavoriteIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.S}
      />
      <FavoriteIcon colorTheme={colorTheme} invertColor={invertColor} />
      <FavoriteIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.L}
      />
      <FavoriteIcon
        colorTheme={colorTheme}
        invertColor={invertColor}
        size={Size.XL}
      />
    </Row>
  </React.Fragment>
);

IconCollection.displayName = 'IconCollection';

export { IconCollection };
