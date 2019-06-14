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
  Paragraph1,
  Screen,
  Size,
  useResponsiveness,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

import { AlertLongMsgExample } from './AlertLongMsgExample';
import { AlertShortMsgExample } from './AlertShortMsgExample';
import { FullscreenDialogExample } from './FullscreenDialogExample';
import { SimpleDialogExample } from './SimpleDialogExample';
import { SmallAlertShortMsgExample } from './SmallAlertShortMsgExample';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ModalDialogSheetScreen().onButtonPress()');
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

const ModalDialogSheetScreen: React.SFC<{}> = (): JSX.Element => {
  const { breakpoints, dimensions } = useResponsiveness();
  const isUpToSmallHandset =
    dimensions.window.width <= breakpoints.smallHandset ? true : false;
  const MainHeadlineComponent = isUpToSmallHandset ? Headline4 : Headline3;

  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>ModalSheet: Dialog</AppBarTitle>
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
              {' variant={ModalSheetVariant.Dialog}'}.
            </Paragraph1>
            <AlertShortMsgExample />
            <SmallAlertShortMsgExample />
            <AlertLongMsgExample />
            <SimpleDialogExample />
            <FullscreenDialogExample />
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
    </Screen>
  );
};

ModalDialogSheetScreen.displayName = 'ModalDialogSheetScreen';

export { ModalDialogSheetScreen };
