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
  Headline6,
  JustifyContent,
  Row,
  Size,
  Surface,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import * as React from 'react';
import { ScrollView } from 'react-native';

import { PencilSvg } from './PencilSvg';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('IconShowcaseScreen().onButtonPress()');
};

const SvgShowcaseScreen: React.SFC<{}> = (): JSX.Element => (
  <ScrollView>
    <AppBar>
      <Button invertColor onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>FlexSvg</AppBarTitle>
    </AppBar>
    <Column marginTop={Size.M}>
      {({ breakpoints, dimensions }) => {
        const marginSize =
          dimensions.window.width > breakpoints.largeHandset ? Size.M : 0;

        const justifyContent =
          dimensions.window.width <= breakpoints.smallTablet
            ? JustifyContent.Center
            : undefined;

        return (
          <Row justifyContent={justifyContent} marginVertical={marginSize}>
            <Surface marginStart={marginSize}>
              <Row margin={Size.M}>
                <Headline6>Pencil</Headline6>
              </Row>
              <Row>
                <PencilSvg />
              </Row>
            </Surface>
          </Row>
        );
      }}
    </Column>
  </ScrollView>
);

SvgShowcaseScreen.displayName = 'SvgShowcaseScreen';

export { SvgShowcaseScreen };
