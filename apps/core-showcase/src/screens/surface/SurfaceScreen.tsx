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
  PaletteThemeContext,
  Paragraph1,
  Paragraph2,
  Row,
  Size,
  Surface,
  SurfaceProps,
  SurfaceTheme,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

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

const SurfaceScreen: React.SFC<{}> = (): JSX.Element => {
  const paletteTheme = useContext(PaletteThemeContext);

  return (
    <ScrollView>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>Surface</AppBarTitle>
      </AppBar>
      <Paragraph2 margin={Size.M}>
        {'<Surface colorArrangement={paletteTheme.surface.normal}> (default)'}
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
        {'<Surface colorArrangement={paletteTheme.primary.normal}>'}
      </Paragraph2>
      <Row>
        <Surface
          alignContent={AlignContent.Center}
          colorArrangement={paletteTheme.primary.normal}
          height={50}
          justifyContent={JustifyContent.Center}
          margin={Size.M}
          width={100}
        >
          <Paragraph1>Hello Surface!</Paragraph1>
        </Surface>
        <Surface
          colorArrangement={paletteTheme.primary.normal}
          contained={false}
          height={50}
          invertColor
          margin={Size.M}
          width={100}
        >
          <Paragraph1>Hello Surface! (contained=false)</Paragraph1>
        </Surface>
      </Row>
      <Paragraph2 margin={Size.M}>
        {'<Surface getPatchTheme={getPatchTheme}>'}
      </Paragraph2>
      <Row>
        <Surface
          colorArrangement={paletteTheme.primary.normal}
          getPatchTheme={getPatchTheme}
          margin={Size.M}
        >
          <Paragraph1>Hello Surface!</Paragraph1>
        </Surface>
        <Surface
          colorArrangement={paletteTheme.primary.normal}
          contained={false}
          getPatchTheme={getPatchTheme}
          invertColor
          margin={Size.M}
        >
          <Paragraph1>Hello Surface! (contained=false)</Paragraph1>
        </Surface>
      </Row>
    </ScrollView>
  );
};

SurfaceScreen.displayName = 'SurfaceScreen';

export { SurfaceScreen };
