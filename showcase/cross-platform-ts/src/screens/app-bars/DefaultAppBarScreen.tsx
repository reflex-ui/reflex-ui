/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarTitle,
  Button,
  ButtonVariant,
  Caption,
  RowView,
} from '@reflex-ui/core';
import { FavoriteIcon, MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const DefaultAppBarScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <RowView>
      <Caption>1</Caption>
    </RowView>
    <RowView>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <MenuIcon />
      </Button>
      <FavoriteIcon />
    </RowView>
    <RowView>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle>My Application</AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </RowView>
    <RowView>
      <Caption>2</Caption>
    </RowView>
    <RowView>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle>My Application</AppBarTitle>
            <RowView>
              <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
                <FavoriteIcon />
              </Button>
              <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
                <MenuIcon />
              </Button>
            </RowView>
          </React.Fragment>
        )}
      </AppBar>
    </RowView>
    <RowView>
      <Caption>3</Caption>
    </RowView>
    <RowView>
      <AppBar>{() => <AppBarTitle>My Application</AppBarTitle>}</AppBar>
    </RowView>
    <RowView>
      <Caption>4</Caption>
    </RowView>
    <RowView>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <MenuIcon />
        </Button>
        <AppBarTitle>My Application</AppBarTitle>
      </AppBar>
    </RowView>
    <RowView>
      <Caption>5</Caption>
    </RowView>
    <RowView>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <MenuIcon />
        </Button>
        <View />
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <FavoriteIcon />
        </Button>
      </AppBar>
    </RowView>
    <RowView>
      <Caption>6</Caption>
    </RowView>
    <RowView>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <MenuIcon />
        </Button>
      </AppBar>
    </RowView>
  </ScrollView>
);

DefaultAppBarScreen.displayName = 'DefaultAppBarScreen';

export { DefaultAppBarScreen };
