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
  Avatar,
  AvatarImage,
  AvatarOverlaySurface,
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
import { FolderIcon, MenuIcon } from '@reflex-ui/icons-md';
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
        <OverlaySurface invertColor paletteColor={palette.primary}>
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
        <Row margin={Size.M}>
          <Touchable>
            <Surface height={50} marginEnd={Size.M} width={100}>
              <Paragraph1>Touch me!</Paragraph1>
            </Surface>
          </Touchable>
          <Touchable>
            <Surface contained={false} height={50} width={100}>
              <Paragraph1>Touch me! (contained=false)</Paragraph1>
            </Surface>
          </Touchable>
        </Row>
        <Paragraph2 margin={Size.M}>{'<Touchable>'}</Paragraph2>
        <Row margin={Size.M}>
          <Touchable>
            <Surface
              alignContent={AlignContent.Center}
              height={50}
              justifyContent={JustifyContent.Center}
              marginEnd={Size.M}
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
              marginEnd={Size.M}
              paletteColor={palette.primary}
              width={100}
            >
              <Paragraph1>Touch me! (contained=false)</Paragraph1>
            </Surface>
          </Touchable>
        </Row>
        <Row margin={Size.M}>
          <Touchable>
            <Avatar marginEnd={Size.XS} paletteColor={palette.primary}>
              m
            </Avatar>
          </Touchable>
          <Touchable>
            <Avatar marginEnd={Size.XS} paletteColor={palette.primary}>
              <FolderIcon />
            </Avatar>
          </Touchable>
          <Touchable>
            <AvatarImage
              marginEnd={Size.XS}
              source={require('../avatar-image/avatar.jpg')}
            />
          </Touchable>
          <Touchable>
            <AvatarOverlaySurface
              invertColor
              marginEnd={Size.XS}
              paletteColor={palette.primary}
            >
              <AvatarImage source={require('../avatar-image/avatar.jpg')} />
            </AvatarOverlaySurface>
          </Touchable>
        </Row>
        <TouchableImage />
      </ScrollView>
    </Screen>
  );
};

TouchableScreen.displayName = 'TouchableScreen';

export { TouchableScreen };
