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
  ColorTheme,
  Column,
  errorColorThemes,
  primaryColorThemes,
  Row,
  secondaryColorThemes,
  Size,
  successColorThemes,
  Surface,
  warningColorThemes,
} from '@reflex-ui/core';
import { FavoriteIcon, MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView } from 'react-native';

import { IconCollection } from './IconCollection';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('IconShowcaseScreen().onButtonPress()');
};

const colorThemes: ColorTheme[] = [
  ...primaryColorThemes,
  ...secondaryColorThemes,
  ...errorColorThemes,
  ...successColorThemes,
  ...warningColorThemes,
];

const IconShowcaseScreen: React.SFC<{}> = (): JSX.Element => (
  <ScrollView>
    <AppBar>
      <Button invertColor onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>Icon</AppBarTitle>
    </AppBar>
    <Column marginTop={Size.M}>
      {({ breakpoints, layoutRectangle }) => (
        <React.Fragment>
          {colorThemes.map(colorTheme => (
            <Row
              key={colorTheme}
              marginVertical={
                layoutRectangle &&
                layoutRectangle.width > breakpoints.largeHandset
                  ? Size.M
                  : Size.XS
              }
            >
              <Surface
                marginStart={
                  layoutRectangle &&
                  layoutRectangle.width > breakpoints.largeHandset
                    ? Size.M
                    : Size.XS
                }
              >
                <IconCollection colorTheme={colorTheme} title={colorTheme} />
              </Surface>
              <Surface
                colorTheme={colorTheme}
                marginStart={
                  layoutRectangle &&
                  layoutRectangle.width > breakpoints.largeHandset
                    ? Size.M
                    : Size.XS
                }
              >
                <IconCollection
                  colorTheme={colorTheme}
                  invertColor
                  title={`${colorTheme} invertColor`}
                />
              </Surface>
            </Row>
          ))}
          <Row>
            <FavoriteIcon color="#c70ad0" size={Size.XS} />
            <FavoriteIcon color="#c70ad0" size={Size.S} />
            <FavoriteIcon color="#c70ad0" />
            <FavoriteIcon color="#c70ad0" size={Size.L} />
            <FavoriteIcon color="#c70ad0" size={Size.XL} />
          </Row>
        </React.Fragment>
      )}
    </Column>
  </ScrollView>
);

IconShowcaseScreen.displayName = 'IconShowcaseScreen';

export { IconShowcaseScreen };
