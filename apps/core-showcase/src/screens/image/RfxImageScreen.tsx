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
  AppBarVariant,
  Button,
  ButtonVariant,
  Column,
  RfxImage,
  Screen,
  Size,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('TouchableSurfaceScreen().onButtonPress()');
};

const RfxImageScreen: React.SFC<{}> = (): JSX.Element => {
  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>RfxImage</AppBarTitle>
      </AppBar>
      <ScrollView>
        <Column marginVertical={Size.XXL}>
          {({ breakpoints, dimensions }) => {
            const isLargeHandset =
              dimensions.window.width >= breakpoints.largeHandset;
            const alignItems = isLargeHandset
              ? AlignItems.FlexStart
              : AlignItems.Center;
            const marginHorizontal = isLargeHandset ? Size.M : 0;

            return (
              <Column
                alignItems={alignItems}
                marginHorizontal={marginHorizontal}
              >
                <RfxImage
                  source={require('./flower.jpg')}
                  style={{ height: 215, width: 300 }}
                />
                <RfxImage
                  marginTop={Size.XXL}
                  source={require('./flower.jpg')}
                  style={{ height: 215, width: 300 }}
                />
              </Column>
            );
          }}
        </Column>
      </ScrollView>
    </Screen>
  );
};

RfxImageScreen.displayName = 'RfxImageScreen';

export { RfxImageScreen };
