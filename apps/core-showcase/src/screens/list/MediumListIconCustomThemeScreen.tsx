/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarTitle,
  Button,
  ButtonVariant,
  Caption,
  Column,
  ComponentsThemeContext,
  FontWeight,
  getFontWeight,
  InteractionType,
  List,
  ListItem,
  Paragraph1,
  Paragraph2,
  RfxTextTheme,
  RfxTextVariantsTheme,
  RfxViewProps,
  Screen,
  Size,
  TouchableSurface,
} from '@reflex-ui/core';
import {
  InboxIcon,
  LabelIcon,
  MenuIcon,
  MoreVertIcon,
  StarIcon,
  WatchLaterIcon,
} from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

import { getListMaxWidth } from './getListMaxWidth';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSIconScreen().onButtonPress()');
};

const onListItemPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSIconScreen().onListItemPress()');
};

const onListItemIconPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSIconScreen().onListItemIconPress()');
};

const createParagraph1Theme = (baseTheme: RfxTextTheme): RfxTextTheme => ({
  ...baseTheme,
  getStyle: props => ({
    ...((baseTheme.getStyle && baseTheme.getStyle(props)) || {}),
    fontWeight:
      props.interactionState &&
      props.interactionState.type === InteractionType.Activated
        ? getFontWeight(FontWeight.Medium)
        : getFontWeight(FontWeight.Regular),
  }),
});

const renderList = ({ breakpoints, dimensions }: RfxViewProps): JSX.Element => (
  <ComponentsThemeContext.Consumer>
    {componentsTheme => (
      <ComponentsThemeContext.Provider
        value={{
          ...componentsTheme,
          text: {
            ...(componentsTheme.text as RfxTextVariantsTheme),
            paragraph1: createParagraph1Theme(
              (componentsTheme.text as RfxTextVariantsTheme).paragraph1,
            ),
          },
        }}
      >
        <List maxWidth={getListMaxWidth({ breakpoints, dimensions })}>
          <TouchableSurface
            activated
            contained={false}
            onPress={onListItemPress}
          >
            <ListItem size={Size.M}>
              <Column marginHorizontal={Size.S}>
                <InboxIcon />
              </Column>
              <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
            </ListItem>
          </TouchableSurface>
          <TouchableSurface contained={false} onPress={onListItemPress}>
            <ListItem size={Size.M}>
              <Column marginHorizontal={Size.S}>
                <StarIcon />
              </Column>
              <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
            </ListItem>
          </TouchableSurface>
          <TouchableSurface
            contained={false}
            disabled
            onPress={onListItemPress}
          >
            <ListItem size={Size.M}>
              <Column marginHorizontal={Size.S}>
                <WatchLaterIcon />
              </Column>
              <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
              <Column flexGrow={1} />
              <Button
                onPress={onListItemIconPress}
                variant={ButtonVariant.Icon}
              >
                <MoreVertIcon />
              </Button>
              <Caption marginHorizontal={Size.XS}>Jan 26, 2019</Caption>
            </ListItem>
          </TouchableSurface>
          <TouchableSurface contained={false} onPress={onListItemPress}>
            <ListItem size={Size.M}>
              <Column marginHorizontal={Size.S}>
                <LabelIcon />
              </Column>
              <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
              <Column flexGrow={1} />
              <Button
                onPress={onListItemIconPress}
                variant={ButtonVariant.Icon}
              >
                <MoreVertIcon />
              </Button>
              <Caption marginHorizontal={Size.XS}>Jan 26, 2019</Caption>
            </ListItem>
          </TouchableSurface>
        </List>
      </ComponentsThemeContext.Provider>
    )}
  </ComponentsThemeContext.Consumer>
);

const MediumListIconCustomThemeScreen: React.SFC = (): JSX.Element => (
  <Screen>
    <AppBar>
      <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>List & ListItem</AppBarTitle>
    </AppBar>
    <ScrollView>
      <Paragraph2 margin={Size.L}>
        {'<List maxWidth={listMaxWidth}>'}
        {'\n'}
        {'<ListItem size={Size.M}>'}
        {'\n'}
        {'We also provides a custom theme for <Paragraph1>'}
      </Paragraph2>
      <Column>{renderList}</Column>
    </ScrollView>
  </Screen>
);

MediumListIconCustomThemeScreen.displayName = 'MediumListIconCustomThemeScreen';

export { MediumListIconCustomThemeScreen };
