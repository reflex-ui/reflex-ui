/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignContent,
  AppBar,
  AppBarTitle,
  AppBarVariant,
  Button,
  ButtonVariant,
  ComponentThemeGetter,
  ElevationDegree,
  FlexDirection,
  JustifyContent,
  Paragraph1,
  Paragraph2,
  Row,
  Screen,
  Size,
  Surface,
  SurfaceProps,
  SurfaceTheme,
  usePalette,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView, View } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('SurfaceScreen().onButtonPress()');
};

const getPatchTheme: ComponentThemeGetter<
  SurfaceProps,
  SurfaceTheme
> = (): SurfaceTheme => {
  // tslint:disable-next-line:no-console
  // console.log('TestShowcaseScreen().getPatchTheme() - props:', props);
  return {
    getStyle: () => ({
      borderColor: 'red',
      borderRadius: 8,
      borderWidth: 2,
      height: 75,
      width: 135,
    }),
  };
};

const Square = () => (
  <View
    style={{
      backgroundColor: 'red',
      borderColor: 'yellow',
      borderWidth: 1,
      height: 50,
      width: 50,
    }}
  />
);

const SurfaceScreen: React.SFC<{}> = (): JSX.Element => {
  const { palette } = usePalette();

  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>Surface</AppBarTitle>
      </AppBar>
      <ScrollView>
        <Paragraph2 margin={Size.M}>
          {'<Surface paletteColor={palette.surface}> (default)'}
        </Paragraph2>
        <Row>
          <Surface height={50} margin={Size.M} width={100}>
            <Paragraph1>Hello Surface!</Paragraph1>
          </Surface>
          <Surface contained={false} height={50} margin={Size.M} width={100}>
            <Paragraph1>Hello Surface! (contained=false)</Paragraph1>
          </Surface>
        </Row>
        <Paragraph2 margin={Size.M}>
          {'<Surface paletteColor={palette.primary}>'}
        </Paragraph2>
        <Row>
          <Surface
            alignContent={AlignContent.Center}
            height={50}
            justifyContent={JustifyContent.Center}
            margin={Size.M}
            paletteColor={palette.primary}
            width={100}
          >
            <Paragraph1>Hello Surface!</Paragraph1>
          </Surface>
          <Surface
            contained={false}
            height={50}
            invertColor
            margin={Size.M}
            paletteColor={palette.primary}
            width={100}
          >
            <Paragraph1>Hello Surface! (contained=false)</Paragraph1>
          </Surface>
        </Row>
        <Paragraph2 margin={Size.M}>
          {[
            '<Surface elevation={ElevationDegree.Low}',
            'paletteColor={palette.primary}>',
          ].join(' ')}
        </Paragraph2>
        <Row>
          <Surface
            alignContent={AlignContent.Center}
            elevation={ElevationDegree.Low}
            justifyContent={JustifyContent.Center}
            margin={Size.M}
            paletteColor={palette.primary}
            width={200}
          >
            <Paragraph1>Hello Surface! Lorem ipsum dolor.</Paragraph1>
          </Surface>
        </Row>
        <Paragraph2 margin={Size.M}>
          {'<Surface paletteColor={palette.primary}>'}
        </Paragraph2>
        <Surface margin={Size.M} paletteColor={palette.primary} width={175}>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </Surface>
        <Surface
          flexDirection={FlexDirection.Row}
          margin={Size.M}
          paletteColor={palette.primary}
          width={175}
        >
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </Surface>
        <Paragraph2 margin={Size.M}>
          {[
            '<Surface getPatchTheme={getPatchTheme}',
            'paletteColor={palette.primary}>',
          ].join('')}
        </Paragraph2>
        <Row>
          <Surface
            getPatchTheme={getPatchTheme}
            margin={Size.M}
            paletteColor={palette.primary}
          >
            <Paragraph1>Hello Surface!</Paragraph1>
          </Surface>
          <Surface
            contained={false}
            getPatchTheme={getPatchTheme}
            invertColor
            margin={Size.M}
            paletteColor={palette.primary}
          >
            <Paragraph1>Hello Surface! (contained=false)</Paragraph1>
          </Surface>
        </Row>
      </ScrollView>
    </Screen>
  );
};

SurfaceScreen.displayName = 'SurfaceScreen';

export { SurfaceScreen };
