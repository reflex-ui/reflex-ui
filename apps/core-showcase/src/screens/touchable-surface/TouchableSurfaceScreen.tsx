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
  ColorTheme,
  Column,
  ComponentThemeGetter,
  JustifyContent,
  Paragraph1,
  // RfxViewProps,
  // RfxViewTheme,
  Row,
  Size,
  // Surface,
  TouchableSurface,
  TouchableSurfaceProps,
  TouchableSurfaceTheme,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import * as React from 'react';
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
  return (
    <ScrollView>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>TouchableSurface</AppBarTitle>
      </AppBar>
      <Column margin={Size.M}>
        <Paragraph1>ColorTheme.SurfaceNormal (default)</Paragraph1>
      </Column>
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
      <Column margin={Size.M}>
        <Paragraph1>ColorTheme.SurfaceNormal (default)</Paragraph1>
      </Column>
      <Row>
        <TouchableSurface
          alignContent={AlignContent.Center}
          colorTheme={ColorTheme.PrimaryNormal}
          height={50}
          justifyContent={JustifyContent.Center}
          margin={Size.M}
          width={100}
        >
          <Paragraph1>Touch me!</Paragraph1>
        </TouchableSurface>
        <TouchableSurface
          colorTheme={ColorTheme.PrimaryNormal}
          contained={false}
          height={50}
          invertColor
          margin={Size.M}
          width={100}
        >
          <Paragraph1>Touch me! (contained=false)</Paragraph1>
        </TouchableSurface>
      </Row>
      <Column margin={Size.M}>
        <Paragraph1>Custom styles via getPatchTheme()</Paragraph1>
      </Column>
      <Row>
        <TouchableSurface
          colorTheme={ColorTheme.PrimaryNormal}
          getPatchTheme={getPatchTheme}
          margin={Size.M}
        >
          <Paragraph1>Touch me!</Paragraph1>
        </TouchableSurface>
        <TouchableSurface
          colorTheme={ColorTheme.PrimaryNormal}
          contained={false}
          getPatchTheme={getPatchTheme}
          invertColor
          margin={Size.M}
        >
          <Paragraph1>Touch me! (contained=false)</Paragraph1>
        </TouchableSurface>
      </Row>
    </ScrollView>
  );
};

TouchableSurfaceScreen.displayName = 'TouchableSurfaceScreen';

export { TouchableSurfaceScreen };
