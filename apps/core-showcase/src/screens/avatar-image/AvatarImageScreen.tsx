/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignItems,
  AppBar,
  AppBarTitle,
  Button,
  ButtonVariant,
  Column,
  JustifyContent,
  Row,
  Screen,
  Size,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

import { AvatarImageCollection } from './AvatarImageCollection';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('AvatarShowcaseScreen().onButtonPress()');
};

const AvatarImageScreen: React.SFC<{}> = (): JSX.Element => (
  <Screen>
    <AppBar>
      <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>Icon</AppBarTitle>
    </AppBar>
    <ScrollView>
      <Column marginTop={Size.M}>
        {({ breakpoints, dimensions }) => {
          const marginSize =
            dimensions.window.width > breakpoints.largeHandset ? Size.M : 0;

          const justifyContent =
            dimensions.window.width <= breakpoints.smallTablet
              ? JustifyContent.Center
              : undefined;

          return (
            <Row
              alignItems={AlignItems.Center}
              justifyContent={justifyContent}
              marginHorizontal={Size.XS}
              marginVertical={marginSize}
            >
              <AvatarImageCollection marginTop={Size.M} />
            </Row>
          );
        }}
      </Column>
    </ScrollView>
  </Screen>
);

AvatarImageScreen.displayName = 'AvatarImageScreen';

export { AvatarImageScreen };
