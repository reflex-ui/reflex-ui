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
  colorThemes,
  Column,
  Row,
  Size,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView } from 'react-native';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

/*
const colorThemesByPairs = colorThemes.map((colorTheme, index, array) => (
  index % 2 === 0 ? { a: colorTheme, b: array[index + 1] } : continue
));
*/

interface ColorPair {
  colorA: ColorTheme;
  colorB: ColorTheme;
}

const colorThemesInPairs = colorThemes.reduce<ColorPair[]>(
  (acc, cur, index, array) => {
    if (index % 2 === 0) acc.push({ colorA: cur, colorB: array[index + 1] });
    return acc;
  },
  [],
);

export interface ButtonShowcaseScreenProps {
  readonly ButtonCollection: React.ComponentType<ButtonCollectionProps>;
  readonly children?: React.ReactNode;
  readonly title: string;
  readonly variant: ButtonVariant;
}

const ButtonShowcaseScreen: React.SFC<ButtonShowcaseScreenProps> = ({
  ButtonCollection,
  children,
  title,
  variant,
}): JSX.Element => (
  <ScrollView>
    <AppBar>
      <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>{title}</AppBarTitle>
    </AppBar>
    <Column marginTop={Size.M}>
      {({ breakpoints, layoutRectangle }) => (
        <React.Fragment>
          {colorThemesInPairs.map(({ colorA, colorB }) => (
            <Row
              key={colorA}
              marginVertical={
                layoutRectangle &&
                layoutRectangle.width > breakpoints.largeHandset
                  ? Size.M
                  : Size.XS
              }
            >
              <ButtonCollection
                colorTheme={colorA}
                marginStart={
                  layoutRectangle &&
                  layoutRectangle.width > breakpoints.largeHandset
                    ? Size.M
                    : Size.XS
                }
                onPress={onButtonPress}
                title={colorA}
                variant={variant}
              />
              <ButtonCollection
                colorTheme={colorB}
                marginStart={
                  layoutRectangle &&
                  layoutRectangle.width > breakpoints.largeHandset
                    ? Size.M
                    : Size.XS
                }
                onPress={onButtonPress}
                title={colorB}
                variant={variant}
              />
            </Row>
          ))}
          {children}
        </React.Fragment>
      )}
    </Column>
  </ScrollView>
);

ButtonShowcaseScreen.displayName = 'ButtonShowcaseScreen';

export { ButtonShowcaseScreen };
