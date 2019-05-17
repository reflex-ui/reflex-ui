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
  JustifyContent,
  Paragraph1,
  Paragraph2,
  Row,
  Screen,
  Size,
  Surface,
  Touchable,
  usePalette,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('TouchableSurfaceScreen().onButtonPress()');
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
      </ScrollView>
    </Screen>
  );
};

TouchableScreen.displayName = 'TouchableScreen';

export { TouchableScreen };
