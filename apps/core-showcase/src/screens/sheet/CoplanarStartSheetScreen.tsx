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
  CoplanarSheet,
  CoplanarSheetVariant,
  Headline3,
  Headline4,
  Headline6,
  Paragraph1,
  Row,
  Screen,
  Size,
  SpaceBetween,
  useResponsiveness,
} from '@reflex-ui/core';
import { CloseIcon, FilterListIcon, MenuIcon } from '@reflex-ui/icons-md';
import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Filters } from '../../ui';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('CoplanarStartSheetScreen().onButtonPress()');
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

const styles = StyleSheet.create({
  filtersContentContainer: {
    paddingEnd: 16,
    paddingVertical: 16,
  },
});

const CoplanarStartSheetScreen: React.SFC<{}> = (): JSX.Element => {
  const { breakpoints, dimensions } = useResponsiveness();
  const isUpToSmallHandset =
    dimensions.window.width <= breakpoints.smallHandset ? true : false;
  const isUpToSmallTablet =
    dimensions.window.width <= breakpoints.smallTablet ? true : false;
  const MainHeadlineComponent = isUpToSmallHandset ? Headline4 : Headline3;

  const [isShowingCoplanarSheet, setIsShowingCoplanarSheet] = useState(
    !isUpToSmallTablet,
  );

  const openCoplanarSheet = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log('CoplanarStartSheetScreen().openCoplanarSheet()');
    setIsShowingCoplanarSheet(true);
  }, [isShowingCoplanarSheet]);

  const closeCoplanarSheet = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log('CoplanarStartSheetScreen().closeCoplanarSheet()');
    setIsShowingCoplanarSheet(false);
  }, [isShowingCoplanarSheet]);

  const coplanarSheetWillOpen = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log('CoplanarStartSheetScreen().coplanarSheetWillOpen()');
  }, []);

  const coplanarSheetDidOpen = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log('CoplanarStartSheetScreen().coplanarSheetDidOpen()');
  }, []);

  const coplanarSheetWillClose = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log('CoplanarStartSheetScreen().coplanarSheetWillClose()');
  }, []);

  const coplanarSheetDidClose = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log('CoplanarStartSheetScreen().coplanarSheetDidClose()');
  }, []);

  return (
    <Screen>
      <AppBar variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>CoplanarSheet: Start</AppBarTitle>
        <Button onPress={openCoplanarSheet} variant={ButtonVariant.Icon}>
          <FilterListIcon />
        </Button>
      </AppBar>
      <Row flex={1}>
        <CoplanarSheet
          componentDidClose={coplanarSheetDidClose}
          componentDidOpen={coplanarSheetDidOpen}
          componentWillClose={coplanarSheetWillClose}
          componentWillOpen={coplanarSheetWillOpen}
          isOpen={isShowingCoplanarSheet}
          paddingEnd={0}
          paddingTop={Size.XS}
          variant={CoplanarSheetVariant.Start}
        >
          <SpaceBetween>
            <Headline6>Filters</Headline6>
            <Button onPress={closeCoplanarSheet} variant={ButtonVariant.Icon}>
              <CloseIcon />
            </Button>
          </SpaceBetween>
          <Column flex={1}>
            <ScrollView contentContainerStyle={styles.filtersContentContainer}>
              <Filters onClosePress={closeCoplanarSheet} />
            </ScrollView>
          </Column>
        </CoplanarSheet>
        <Column flex={1} height="100%">
          <ScrollView>
            <Column marginHorizontal={Size.M} marginVertical={Size.XL}>
              <MainHeadlineComponent
                alignSelf={AlignSelf.Center}
                marginBottom={isUpToSmallHandset ? Size.M : 36}
              >
                {'<CoplanarSheet>'}
              </MainHeadlineComponent>
              <Paragraph1 marginVertical={Size.S}>
                This screen showcases{' <CoplanarSheet>'} component with
                {' variant={CoplanarSheetVariant.Start}'}.
              </Paragraph1>
              <Paragraph1 marginVertical={Size.M}>
                Even though the {' <CoplanarSheet>'} component is cross-platform
                and showcased here on mobile devices too, the
                {' <ModalSheet>'} component is recommended on mobile devices
                since it usually doesn't make much sense to push a screen
                content if we can't interact with it anyway.
              </Paragraph1>
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
      </Row>
    </Screen>
  );
};

CoplanarStartSheetScreen.displayName = 'CoplanarStartSheetScreen';

export { CoplanarStartSheetScreen };
