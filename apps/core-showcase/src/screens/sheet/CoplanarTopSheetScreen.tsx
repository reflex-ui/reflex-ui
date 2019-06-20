/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarTitle,
  AppBarVariant,
  Button,
  ButtonVariant,
  Column,
  CoplanarSheetVariant,
  Headline2,
  Headline6,
  Paragraph1,
  Row,
  Screen,
  Size,
  usePalette,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

import { loremIpsumString } from '../../ui/common';
import { MyTopBottomSheet } from './MyTopBottomSheet';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('CoplanarTopSheetScreen().onButtonPress()');
};

const CoplanarTopSheetScreen: React.SFC<{}> = (): JSX.Element => {
  const { palette } = usePalette();
  const [isShowingSheet, setIsShowingSheet] = useState(false);
  const [isShowingScrollingContent, setIsShowingScrollingContent] = useState(
    false,
  );

  const openSheet = useCallback(
    (scrollingContent: boolean = false) => {
      setIsShowingScrollingContent(scrollingContent);
      setIsShowingSheet(true);
    },
    [isShowingSheet],
  );

  const closeSheet = useCallback(() => {
    setIsShowingSheet(false);
  }, [isShowingSheet]);

  return (
    <Screen>
      <MyTopBottomSheet
        isShowingScrollingContent={isShowingScrollingContent}
        isOpen={isShowingSheet}
        onClose={() => closeSheet()}
        paddingStart={Size.M}
        variant={CoplanarSheetVariant.Top}
      />
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>CoplanarSheet</AppBarTitle>
      </AppBar>
      <ScrollView>
        <Column paddingHorizontal={Size.M} paddingVertical={60}>
          <Headline2>CoplanarSheet: Top</Headline2>
          <Headline6 marginTop={Size.L} marginBottom={40}>
            Top sheets are surfaces containing supplementary content that are
            anchored to the top of the screen.
          </Headline6>
          <Paragraph1 marginVertical={Size.M}>
            Even though the {' <CoplanarSheet>'} component is cross-platform and
            showcased on mobile devices too, the
            {' <ModalSheet>'} component is recommended on mobile devices since
            it usually doesn't make much sense to push a screen content if we
            can't interact with it anyway.
          </Paragraph1>
          <Row paletteColor={palette.primary}>
            <Button
              invertColor
              onPress={() => openSheet(false)}
              variant={ButtonVariant.Outlined}
            >
              Coplanar Top Sheet
            </Button>
            <Button
              invertColor
              onPress={() => openSheet(true)}
              variant={ButtonVariant.Outlined}
            >
              Coplanar Top Sheet (scrolling)
            </Button>
          </Row>
          <Paragraph1 marginVertical={Size.M}>
            Let's drop a bunch of text here so we can also test scrolling.
          </Paragraph1>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <Paragraph1 key={item} marginVertical={Size.S}>
              {loremIpsumString}
            </Paragraph1>
          ))}
        </Column>
      </ScrollView>
    </Screen>
  );
};

CoplanarTopSheetScreen.displayName = 'CoplanarTopSheetScreen';

export { CoplanarTopSheetScreen };
