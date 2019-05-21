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
  ComponentsTheme,
  ComponentsThemeProvider,
  FontWeight,
  getFontWeight,
  InteractionType,
  List,
  ListItem,
  PaletteColor,
  Paragraph1,
  Paragraph2,
  RfxTextTheme,
  RfxTextVariantsTheme,
  Screen,
  Size,
  SurfacePropsOptional,
  Touchable,
  useComponentsTheme,
  usePalette,
  useResponsiveness,
} from '@reflex-ui/core';
import {
  InboxIcon,
  LabelIcon,
  MenuIcon,
  MoreVertIcon,
  StarIcon,
  WatchLaterIcon,
} from '@reflex-ui/icons-md';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { getListMaxWidth } from './getListMaxWidth';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListSizeXXSIconScreen().onButtonPress()');
};

const createCustomTheme = (componentsTheme: ComponentsTheme) => ({
  ...componentsTheme,
  text: {
    ...(componentsTheme.text as RfxTextVariantsTheme),
    paragraph1: createParagraph1Theme(
      (componentsTheme.text as RfxTextVariantsTheme).paragraph1,
    ),
  },
});

const createParagraph1Theme = (baseTheme: RfxTextTheme): RfxTextTheme => ({
  ...baseTheme,
  getStyle: props => ({
    ...((baseTheme.getStyle && baseTheme.getStyle(props)) || {}),
    fontWeight:
      props.interactionState &&
      props.interactionState.type === InteractionType.Activated
        ? getFontWeight(FontWeight.Bold)
        : getFontWeight(FontWeight.Regular),
  }),
});

const useCustomPaletteColor = (): PaletteColor => {
  const palette = usePalette().palette;
  return {
    color: {
      ...palette.surface.color,
      activated: {
        ...palette.surface.color.activated,
        uncontained: {
          color: palette.primary.color.activated.uncontainedInverted.color,
          onColor: palette.primary.color.enabled.uncontainedInverted.onColor,
        },
      },
    },
    name: 'My custom color',
  };
};

const MyList = (props: SurfacePropsOptional): JSX.Element => {
  const [activatedId, setActivatedId] = useState('inbox');

  const onListItemPress = (id: string) => {
    // tslint:disable-next-line:no-console
    console.log('ListSizeXXSIconScreen().onListItemPress()');
    setActivatedId(id);
  };

  const onListItemIconPress = () => {
    // tslint:disable-next-line:no-console
    console.log('ListSizeXXSIconScreen().onListItemIconPress()');
  };

  return (
    <ComponentsThemeProvider
      value={createCustomTheme(useComponentsTheme().componentsTheme)}
    >
      <List
        maxWidth={getListMaxWidth(useResponsiveness())}
        {...props}
        paletteColor={useCustomPaletteColor()}
      >
        <Touchable
          activated={activatedId === 'inbox'}
          onPress={() => onListItemPress('inbox')}
        >
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <InboxIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable
          activated={activatedId === 'starred'}
          onPress={() => onListItemPress('starred')}
        >
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <StarIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable
          activated={activatedId === 'snoozed'}
          disabled
          onPress={() => onListItemPress('snoozed')}
        >
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <WatchLaterIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
            <Column flexGrow={1} />
            <Button onPress={onListItemIconPress} variant={ButtonVariant.Icon}>
              <MoreVertIcon />
            </Button>
            <Caption marginHorizontal={Size.XS}>Jan 26, 2019</Caption>
          </ListItem>
        </Touchable>
        <Touchable
          activated={activatedId === 'important'}
          onPress={() => onListItemPress('important')}
        >
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <LabelIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
            <Column flexGrow={1} />
            <Button onPress={onListItemIconPress} variant={ButtonVariant.Icon}>
              <MoreVertIcon />
            </Button>
            <Caption marginHorizontal={Size.XS}>Jan 26, 2019</Caption>
          </ListItem>
        </Touchable>
      </List>
    </ComponentsThemeProvider>
  );
};

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
      <MyList />
    </ScrollView>
  </Screen>
);

MediumListIconCustomThemeScreen.displayName = 'MediumListIconCustomThemeScreen';

export { MediumListIconCustomThemeScreen };
