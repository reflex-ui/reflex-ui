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
  Column,
  Row,
  Screen,
  Size,
  SpaceBetween,
  Surface,
  usePalette,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ViewScreen().onButtonPress()');
};

const Box = () => <Surface height={50} margin={Size.XS} width={50} />;

const ViewScreen: React.SFC<{}> = (): JSX.Element => (
  <Screen>
    <AppBar>
      <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>View</AppBarTitle>
    </AppBar>
    <ScrollView>
      <Column
        margin={Size.S}
        marginTop={Size.XXL}
        paletteColor={usePalette().palette.primary}
      >
        <Row>
          <Box />
          <Box />
        </Row>
        <SpaceBetween>
          <Box />
          <Box />
        </SpaceBetween>
        <SpaceBetween maxWidth={300}>
          <Box />
          <Box />
        </SpaceBetween>
        <SpaceBetween maxWidth={300}>
          <Row>
            <Box />
            <Box />
          </Row>
          <Box />
        </SpaceBetween>
        <SpaceBetween maxWidth={300}>
          <Row>
            <Box />
            <Box />
          </Row>
          <Row>
            <Box />
            <Box />
          </Row>
        </SpaceBetween>
      </Column>
    </ScrollView>
  </Screen>
);

ViewScreen.displayName = 'ViewScreen';

export { ViewScreen };
