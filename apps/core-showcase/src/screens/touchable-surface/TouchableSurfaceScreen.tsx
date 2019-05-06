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
  JustifyContent,
  Paragraph1,
  Paragraph2,
  Row,
  Screen,
  Size,
  TouchableSurface,
  TouchableSurfaceProps,
  TouchableSurfaceTheme,
  usePalette,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('TouchableSurfaceScreen().onButtonPress()');
};

const getPatchTheme: ComponentThemeGetter<
  TouchableSurfaceProps,
  TouchableSurfaceTheme
> = (): TouchableSurfaceTheme => {
  // tslint:disable-next-line:no-console
  // console.log('TestShowcaseScreen().getPatchTheme() - props:', props);
  return {
    surface: () => ({
      getProps: () => {
        // tslint:disable-next-line:no-console
        /*
        console.log(
          'TestShowcaseScreen().getPatchTheme().container.getProps() - props:',
          propsx,
        );
        */
        return {};
      },
      getStyle: () => {
        // tslint:disable-next-line:no-console
        /*
        console.log(
          'TestShowcaseScreen().getPatchTheme().container.getStyle() - props:',
          propsx,
        );
        */
        return {
          borderColor: 'red',
          borderRadius: 8,
          borderWidth: 2,
          height: 75,
          width: 135,
        };
      },
    }),
  };
};

const TouchableSurfaceScreen: React.SFC<{}> = (): JSX.Element => {
  const { palette } = usePalette();

  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>TouchableSurface</AppBarTitle>
      </AppBar>
      <ScrollView>
        <Paragraph2 margin={Size.M}>{'<TouchableSurface>'}</Paragraph2>
        <Row>
          <TouchableSurface height={50} margin={Size.M} width={100}>
            <Paragraph1>Touch me!</Paragraph1>
          </TouchableSurface>
          <TouchableSurface
            contained={false}
            height={50}
            margin={Size.M}
            width={100}
          >
            <Paragraph1>Touch me! (contained=false)</Paragraph1>
          </TouchableSurface>
        </Row>
        <Paragraph2 margin={Size.M}>
          {'<TouchableSurface paletteColor={palette.primary}>'}
        </Paragraph2>
        <Row>
          <TouchableSurface
            alignContent={AlignContent.Center}
            height={50}
            justifyContent={JustifyContent.Center}
            margin={Size.M}
            paletteColor={palette.primary}
            width={100}
          >
            <Paragraph1>Touch me!</Paragraph1>
          </TouchableSurface>
          <TouchableSurface
            contained={false}
            height={50}
            invertColor
            margin={Size.M}
            paletteColor={palette.primary}
            width={100}
          >
            <Paragraph1>Touch me! (contained=false)</Paragraph1>
          </TouchableSurface>
        </Row>
        <Paragraph2 margin={Size.M}>
          {[
            '<TouchableSurface getPatchTheme={getPatchTheme}',
            'paletteColor={palette.primary}>',
          ].join('')}
        </Paragraph2>
        <Row>
          <TouchableSurface
            getPatchTheme={getPatchTheme}
            margin={Size.M}
            paletteColor={palette.primary}
          >
            <Paragraph1>Touch me!</Paragraph1>
          </TouchableSurface>
          <TouchableSurface
            contained={false}
            getPatchTheme={getPatchTheme}
            invertColor
            margin={Size.M}
            paletteColor={palette.primary}
          >
            <Paragraph1>Touch me! (contained=false)</Paragraph1>
          </TouchableSurface>
        </Row>
      </ScrollView>
    </Screen>
  );
};

TouchableSurfaceScreen.displayName = 'TouchableSurfaceScreen';

export { TouchableSurfaceScreen };
