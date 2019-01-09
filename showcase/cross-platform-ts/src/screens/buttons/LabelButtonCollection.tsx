/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, Headline6, Row, Size, Surface } from '@reflex-ui/core';
import { FavoriteIcon } from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const LabelButtonCollection: React.SFC<ButtonCollectionProps> = ({
  colorTheme,
  getSubProps,
  onPress,
  title,
  variant,
  ...marginProps
}): JSX.Element => (
  <Surface colorTheme={colorTheme} {...marginProps}>
    <Row margin={Size.M}>
      <Headline6>{title}</Headline6>
    </Row>
    <Row>
      <Button getSubProps={getSubProps} onPress={onPress} variant={variant}>
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getSubProps}
        onPress={onPress}
        variant={variant}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getSubProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getSubProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getSubProps}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getSubProps}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getSubProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getSubProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onPress}
        trailingIcon={<FavoriteIcon />}
        variant={variant}
      >
        Favorite
      </Button>
    </Row>
  </Surface>
);

LabelButtonCollection.displayName = 'LabelButtonCollection';

export { LabelButtonCollection };
