/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, Column, Row, Size } from '@reflex-ui/core';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const LabelButtonCollection: React.SFC<ButtonCollectionProps> = ({
  getPatchTheme,
  invertColor,
  onPress,
  paletteColor,
  variant,
}): JSX.Element => (
  <Column paletteColor={paletteColor}>
    <Row>
      <Button
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        variant={variant}
      >
        Sign In
      </Button>
      <Button
        disabled
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        variant={variant}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        disabled
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        disabled
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        disabled
        getPatchTheme={getPatchTheme}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        marginHorizontal={Size.M}
        marginVertical={Size.S}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
  </Column>
);

LabelButtonCollection.displayName = 'LabelButtonCollection';

export { LabelButtonCollection };
