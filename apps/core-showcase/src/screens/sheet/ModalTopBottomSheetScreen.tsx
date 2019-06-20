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
  Headline3,
  Headline4,
  ModalSheet,
  ModalSheetVariant,
  Paragraph1,
  Row,
  Screen,
  Size,
  usePalette,
  useResponsiveness,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

import { FileMenu } from '../../ui';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ModalSideSheetScreen().onButtonPress()');
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

const ModalTopBottomSheetScreen: React.SFC<{}> = (): JSX.Element => {
  const { palette } = usePalette();
  const { breakpoints, dimensions } = useResponsiveness();
  const isUpToSmallHandset =
    dimensions.window.width <= breakpoints.smallHandset ? true : false;
  const MainHeadlineComponent = isUpToSmallHandset ? Headline4 : Headline3;

  const [currentModalSheetVariant, setCurrentModalSheetVariant] = useState(
    ModalSheetVariant.Start,
  );
  const [isShowingModalSheet, setIsShowingModalSheet] = useState(false);
  const [isShowingScrollingContent, setIsShowingScrollingContent] = useState(
    false,
  );

  const openModalSheet = useCallback(
    (variant: ModalSheetVariant, scrollingContent: boolean = false) => {
      setCurrentModalSheetVariant(variant);
      setIsShowingScrollingContent(scrollingContent);
      setIsShowingModalSheet(true);
    },
    [isShowingModalSheet],
  );

  const closeModalSheet = useCallback(() => {
    setIsShowingModalSheet(false);
  }, [isShowingModalSheet]);

  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>ModalSheet: Top & Bottom</AppBarTitle>
      </AppBar>
      <Column flex={1} height="100%">
        <ScrollView>
          <Column marginHorizontal={Size.M} marginVertical={Size.XL}>
            <MainHeadlineComponent
              alignSelf={AlignSelf.Center}
              marginBottom={isUpToSmallHandset ? Size.M : 36}
            >
              {'<ModalSheet>'}
            </MainHeadlineComponent>
            <Paragraph1 marginVertical={Size.S}>
              This screen showcases{' <ModalSheet>'} component with
              {' variant={ModalSheetVariant.Top}'} and{' '}
              {' variant={ModalSheetVariant.Bottom}'}.
            </Paragraph1>
            <Row paletteColor={palette.primary}>
              <Button
                invertColor
                onPress={() => openModalSheet(ModalSheetVariant.Top)}
              >
                Modal Top Sheet
              </Button>
              <Button
                invertColor
                onPress={() => openModalSheet(ModalSheetVariant.Top, true)}
              >
                Modal Top Sheet (scrolling)
              </Button>
            </Row>
            <Row paletteColor={palette.primary}>
              <Button
                invertColor
                onPress={() => openModalSheet(ModalSheetVariant.Bottom)}
              >
                Modal Bottom Sheet
              </Button>
              <Button
                invertColor
                onPress={() => openModalSheet(ModalSheetVariant.Bottom, true)}
              >
                Modal Bottom Sheet (scrolling)
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
        </ScrollView>
      </Column>
      <ModalSheet
        isOpen={isShowingModalSheet}
        onBackdropPress={closeModalSheet}
        paddingVertical={0}
        variant={currentModalSheetVariant}
      >
        {isShowingScrollingContent && (
          <ScrollView>
            <FileMenu displayExtraItems onClosePress={closeModalSheet} />
          </ScrollView>
        )}
        {!isShowingScrollingContent && (
          <FileMenu onClosePress={closeModalSheet} />
        )}
      </ModalSheet>
    </Screen>
  );
};

ModalTopBottomSheetScreen.displayName = 'ModalTopBottomSheetScreen';

export { ModalTopBottomSheetScreen };
