/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignContent,
  AlignItems,
  AppBar,
  AppBarTitle,
  AppBarVariant,
  Button,
  ButtonVariant,
  Column,
  JustifyContent,
  OverlaySurface,
  Paragraph1,
  Paragraph2,
  RfxViewPropsOptional,
  Row,
  Screen,
  Size,
  Surface,
  Touchable,
  usePalette,
  useResponsiveness,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { Image, ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('TouchableSurfaceScreen().onButtonPress()');
};

const TouchableImage = (props: RfxViewPropsOptional) => {
  const { palette } = usePalette();
  const { breakpoints, dimensions } = useResponsiveness();
  const isLargeHandset = dimensions.window.width >= breakpoints.largeHandset;
  const alignItems = isLargeHandset ? AlignItems.FlexStart : AlignItems.Center;
  const marginHorizontal = isLargeHandset ? Size.M : 0;

  return (
    <Column
      alignItems={alignItems}
      marginHorizontal={marginHorizontal}
      marginVertical={Size.XXL}
      {...props}
    >
      <Touchable>
        <OverlaySurface
          contained={false}
          invertColor
          paletteColor={palette.primary}
        >
          <Image
            source={require('./flower.jpg')}
            style={{ height: 215, width: 300 }}
          />
        </OverlaySurface>
      </Touchable>
    </Column>
  );
};

const TouchableScreen: React.SFC<{}> = (): JSX.Element => {
  const { palette } = usePalette();

  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>Touchable</AppBarTitle>
      </AppBar>
      <ScrollView>
        <Paragraph2 margin={Size.M}>{'<Touchable>'}</Paragraph2>
        <Row>
          <Touchable>
            <Surface height={50} margin={Size.M} width={100}>
              <Paragraph1>Touch me!</Paragraph1>
            </Surface>
          </Touchable>
          <Touchable>
            <Surface contained={false} height={50} margin={Size.M} width={100}>
              <Paragraph1>Touch me! (contained=false)</Paragraph1>
            </Surface>
          </Touchable>
        </Row>
        <Paragraph2 margin={Size.M}>{'<Touchable>'}</Paragraph2>
        <Row>
          <Touchable>
            <Surface
              alignContent={AlignContent.Center}
              height={50}
              justifyContent={JustifyContent.Center}
              margin={Size.M}
              paletteColor={palette.primary}
              width={100}
            >
              <Paragraph1>Touch me!</Paragraph1>
            </Surface>
          </Touchable>
          <Touchable>
            <Surface
              contained={false}
              height={50}
              invertColor
              margin={Size.M}
              paletteColor={palette.primary}
              width={100}
            >
              <Paragraph1>Touch me! (contained=false)</Paragraph1>
            </Surface>
          </Touchable>
        </Row>
        <TouchableImage />
      </ScrollView>
    </Screen>
  );
};

TouchableScreen.displayName = 'TouchableScreen';

export { TouchableScreen };
