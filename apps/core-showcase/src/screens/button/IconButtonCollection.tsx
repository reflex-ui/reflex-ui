/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, JustifyContent, Row, Size } from '@reflex-ui/core';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const IconButtonCollection: React.SFC<ButtonCollectionProps> = ({
  getPatchTheme,
  invertColor,
  onPress,
  paletteColor,
  showDisabled = true,
  variant,
}): JSX.Element => (
  <React.Fragment>
    <Row justifyContent={JustifyContent.Center}>
      <Button
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        margin={Size.M}
        paletteColor={paletteColor}
        onPress={onPress}
        variant={variant}
      >
        <FavoriteIcon />
      </Button>
      {showDisabled && (
        <Button
          disabled
          getPatchTheme={getPatchTheme}
          invertColor={invertColor}
          margin={Size.M}
          onPress={onPress}
          paletteColor={paletteColor}
          variant={variant}
        >
          <FavoriteIcon />
        </Button>
      )}
    </Row>
  </React.Fragment>
);

IconButtonCollection.displayName = 'IconButtonCollection';

export { IconButtonCollection };
