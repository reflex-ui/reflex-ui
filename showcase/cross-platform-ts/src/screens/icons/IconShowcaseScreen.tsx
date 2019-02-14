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
  Headline6,
  JustifyContent,
  primaryColorThemes,
  Row,
  secondaryColorThemes,
  Size,
  successColorThemes,
  Surface,
  warningColorThemes,
} from '@reflex-ui/core';
import { AlarmIcon, MenuIcon } from '@reflex-ui/icons-md';
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
      <Button invertColor onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>Icon</AppBarTitle>
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
          <React.Fragment>
            {colorThemes.map(colorTheme => (
              <Row
                key={colorTheme}
                justifyContent={justifyContent}
                marginVertical={marginSize}
              >
                <Surface marginStart={marginSize}>
                  <IconCollection colorTheme={colorTheme} title={colorTheme} />
                </Surface>
                <Surface colorTheme={colorTheme} marginStart={marginSize}>
                  <IconCollection
                    colorTheme={colorTheme}
                    invertColor
                    title={`${colorTheme} invertColor`}
                  />
                </Surface>
              </Row>
            ))}
            <Row justifyContent={justifyContent} marginVertical={marginSize}>
              <Surface marginStart={marginSize}>
                <Row margin={Size.M}>
                  <Headline6>Custom color</Headline6>
                </Row>
                <Row>
                  <AlarmIcon color="#c70ad0" size={Size.XXS} />
                  <AlarmIcon color="#c70ad0" size={Size.XS} />
                  <AlarmIcon color="#c70ad0" size={Size.S} />
                  <AlarmIcon color="#c70ad0" />
                  <AlarmIcon color="#c70ad0" size={Size.L} />
                  <AlarmIcon color="#c70ad0" size={Size.XL} />
                  <AlarmIcon color="#c70ad0" size={Size.XXL} />
                </Row>
              </Surface>
            </Row>
          </React.Fragment>
        );
      }}
    </Column>
  </ScrollView>
);

IconShowcaseScreen.displayName = 'IconShowcaseScreen';

export { IconShowcaseScreen };
