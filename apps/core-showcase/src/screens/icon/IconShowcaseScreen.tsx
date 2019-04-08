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
  PaletteThemeContext,
  Row,
  Size,
  Surface,
} from '@reflex-ui/core';
import { AlarmIcon, MenuIcon } from '@reflex-ui/icons-md';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { IconCollection } from './IconCollection';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('IconShowcaseScreen().onButtonPress()');
};

const IconShowcaseScreen: React.SFC<{}> = (): JSX.Element => {
  const paletteTheme = useContext(PaletteThemeContext);
  const colors = [
    {
      color: paletteTheme.primary.normal,
      name: 'primary.normal',
    },
    {
      color: paletteTheme.primary.dark,
      name: 'primary.dark',
    },
    {
      color: paletteTheme.primary.light,
      name: 'primary.light',
    },
    {
      color: paletteTheme.secondary.normal,
      name: 'secondary.normal',
    },
    {
      color: paletteTheme.secondary.dark,
      name: 'secondary.dark',
    },
    {
      color: paletteTheme.secondary.light,
      name: 'secondary.light',
    },
    {
      color: paletteTheme.error.normal,
      name: 'error.normal',
    },
    {
      color: paletteTheme.error.dark,
      name: 'error.dark',
    },
    {
      color: paletteTheme.error.light,
      name: 'error.light',
    },
    {
      color: paletteTheme.success.normal,
      name: 'success.normal',
    },
    {
      color: paletteTheme.success.dark,
      name: 'success.dark',
    },
    {
      color: paletteTheme.success.light,
      name: 'success.light',
    },
    {
      color: paletteTheme.warning.normal,
      name: 'warning.normal',
    },
    {
      color: paletteTheme.warning.dark,
      name: 'warning.dark',
    },
    {
      color: paletteTheme.warning.light,
      name: 'warning.light',
    },
  ];

  return (
    <ScrollView>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
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
              {colors.map(paletteColor => (
                <Row
                  key={paletteColor.name}
                  justifyContent={justifyContent}
                  marginVertical={marginSize}
                >
                  <Surface marginStart={marginSize}>
                    <IconCollection
                      colorArrangement={paletteColor.color}
                      invertColor
                      title={paletteColor.name}
                    />
                  </Surface>
                  <Surface
                    colorArrangement={paletteColor.color}
                    marginStart={marginSize}
                  >
                    <IconCollection
                      colorArrangement={paletteColor.color}
                      title={`${paletteColor.name} invertColor`}
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
                    <AlarmIcon fill="#c70ad0" size={Size.XXS} />
                    <AlarmIcon fill="#c70ad0" size={Size.XS} />
                    <AlarmIcon fill="#c70ad0" size={Size.S} />
                    <AlarmIcon fill="#c70ad0" />
                    <AlarmIcon fill="#c70ad0" size={Size.L} />
                    <AlarmIcon fill="#c70ad0" size={Size.XL} />
                    <AlarmIcon fill="#c70ad0" size={Size.XXL} />
                  </Row>
                </Surface>
              </Row>
            </React.Fragment>
          );
        }}
      </Column>
    </ScrollView>
  );
};

IconShowcaseScreen.displayName = 'IconShowcaseScreen';

export { IconShowcaseScreen };
