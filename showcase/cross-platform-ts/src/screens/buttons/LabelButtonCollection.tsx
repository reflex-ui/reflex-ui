/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, Headline6, Row, Size } from '@reflex-ui/core';
import { FavoriteIcon } from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const LabelButtonCollection: React.SFC<ButtonCollectionProps> = ({
  colorTheme,
  getSubProps,
  invertColor,
  onPress,
  title,
  variant,
}): JSX.Element => (
  <React.Fragment>
    <Row margin={Size.M}>
      <Headline6>{title}</Headline6>
    </Row>
    <Row>
      <Button
        colorTheme={colorTheme}
        getSubProps={getSubProps}
        invertColor={invertColor}
        onPress={onPress}
        variant={variant}
      >
        Sign In
      </Button>
      <Button
        colorTheme={colorTheme}
        disabled
        getSubProps={getSubProps}
        invertColor={invertColor}
        onPress={onPress}
        variant={variant}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={colorTheme}
        getSubProps={getSubProps}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        colorTheme={colorTheme}
        disabled
        getSubProps={getSubProps}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={colorTheme}
        getSubProps={getSubProps}
        invertColor={invertColor}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        colorTheme={colorTheme}
        disabled
        getSubProps={getSubProps}
        invertColor={invertColor}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={colorTheme}
        getSubProps={getSubProps}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        colorTheme={colorTheme}
        disabled
        getSubProps={getSubProps}
        invertColor={invertColor}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
  </React.Fragment>
);

LabelButtonCollection.displayName = 'LabelButtonCollection';

export { LabelButtonCollection };
