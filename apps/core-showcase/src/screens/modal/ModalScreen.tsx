/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignSelf,
  AppBar,
  AppBarTitle,
  AppBarVariant,
  Button,
  ButtonVariant,
  Column,
  ComponentThemeGetter,
  FlexWrap,
  Headline4,
  Headline6,
  JustifyContent,
  Modal,
  ModalPropsOptional,
  Paragraph1,
  Row,
  Screen,
  Size,
  Surface,
  SurfaceProps,
  SurfaceTheme,
  usePalette,
  useResponsiveness,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ModalScreen().onButtonPress()');
};

const loremCopy = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'sed do eiusmod tempor incididunt ut labore et dolore magna',
  'aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit',
  'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
  'occaecat cupidatat non proident, sunt in culpa qui officia',
  'deserunt mollit anim id est laborum.',
].join(' ');

export const getModalSurfaceTheme: ComponentThemeGetter<
  SurfaceProps,
  SurfaceTheme
> = () => ({
  getStyle: props => {
    /*
     * In my tests it seems that onLayout is always invoked twice
     * for this Surface component (via enableOnLayout), and on a
     * real Android device before I was using Math.floor to calculate
     * height below I was getting two slightly different values
     * on first and second times (like 473.6666564941406 and 473.3333435058594).
     * Those values are used to calculate the top position, and since its based
     * on height, it was also returning two slightly different values.
     * Those different values was making onLayout be called
     * repeatedly and infinitely, rendering Surface component and
     * calling this getModalSurfaceTheme() function
     * also repeatedly and infinitely.
     * Using Math.floor() solved the issue here, and I think it makes sense
     * to adopt it as a best practice for such cases, unless you really need
     * highly precise values, in which case you might have to find another fix.
     */

    const windowWidth = props.dimensions.window.width;
    const windowHeight = props.dimensions.window.height;
    const isUpToSmallTablet =
      windowWidth <= props.breakpoints.smallTablet ? true : false;

    const width = isUpToSmallTablet ? Math.floor(windowWidth * 0.8) : 400;
    const maxHeight = isUpToSmallTablet ? Math.floor(windowHeight * 0.8) : 400;

    const left = Math.floor(windowWidth / 2 - width / 2);
    const height = props.layoutRectangle
      ? Math.floor(props.layoutRectangle.height)
      : 0;
    const top = props.layoutRectangle
      ? Math.floor(windowHeight / 2 - height / 2)
      : 2000;

    return {
      left,
      maxHeight,
      position: 'absolute',
      top,
      width,
    };
  },
});

const MyModal = (props: ModalPropsOptional) => {
  const { palette } = usePalette();

  return (
    <Modal {...props}>
      <Surface
        enableOnLayout
        flexWrap={FlexWrap.Nowrap}
        getPatchTheme={getModalSurfaceTheme}
        padding={Size.M}
        pointerEvents="auto"
      >
        <Headline6 marginBottom={Size.L}>My Modal</Headline6>
        <ScrollView>
          <Paragraph1 marginVertical={Size.S}>First line.</Paragraph1>
          <Paragraph1 marginVertical={Size.S}>
            This is a nice Modal with flexible height limited to a maxHeight
            value, and centered on screen.
          </Paragraph1>
          <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
          <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
          <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
          <Paragraph1 marginVertical={Size.S}>Last line.</Paragraph1>
        </ScrollView>
        <Row
          justifyContent={JustifyContent.FlexEnd}
          paletteColor={palette.primary}
        >
          <Button invertColor marginBottom={0} onPress={props.onBackdropPress}>
            Disagree
          </Button>
          <Button
            invertColor
            marginBottom={0}
            marginEnd={0}
            onPress={props.onBackdropPress}
          >
            Agree
          </Button>
        </Row>
      </Surface>
    </Modal>
  );
};

const ModalScreen: React.SFC<{}> = (): JSX.Element => {
  const { palette } = usePalette();
  const { breakpoints, dimensions } = useResponsiveness();
  const isUpToSmallHandset =
    dimensions.window.width <= breakpoints.smallHandset ? true : false;

  const [isShowingModal, setIsShowingModal] = useState(false);

  const openModal = useCallback(() => setIsShowingModal(true), [
    isShowingModal,
  ]);

  const closeModal = useCallback(() => setIsShowingModal(false), [
    isShowingModal,
  ]);

  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>Modal</AppBarTitle>
      </AppBar>
      <Column flex={1} height="100%">
        <ScrollView>
          <Column marginHorizontal={Size.M} marginVertical={Size.XL}>
            <Headline4
              alignSelf={AlignSelf.Center}
              marginBottom={isUpToSmallHandset ? Size.M : 36}
            >
              {'<Modal>'}
            </Headline4>
            <Paragraph1 marginVertical={Size.S}>
              This screen showcases{' <Modal>'} component.
            </Paragraph1>
            <Row>
              <Button
                marginStart={Size.XXL}
                paletteColor={palette.primary}
                onPress={openModal}
                variant={ButtonVariant.Contained}
              >
                Open Modal
              </Button>
            </Row>
            <Paragraph1 marginVertical={Size.M}>
              Let's drop a bunch of text here so we can also test scrolling.
            </Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>{loremCopy}</Paragraph1>
            <Paragraph1 marginVertical={Size.S}>Last line.</Paragraph1>
          </Column>
          <MyModal isOpen={isShowingModal} onBackdropPress={closeModal} />
        </ScrollView>
      </Column>
    </Screen>
  );
};

ModalScreen.displayName = 'ModalScreen';

export { ModalScreen };
