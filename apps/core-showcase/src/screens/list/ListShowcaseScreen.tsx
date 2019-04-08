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
  PaletteThemeContext,
  Paragraph1,
  Paragraph2,
  RfxTextTheme,
  RfxTextVariantsTheme,
  Size,
  TouchableSurface,
} from '@reflex-ui/core';
import {
  AccountCircleIcon,
  InboxIcon,
  LabelIcon,
  MenuIcon,
  MoreVertIcon,
  StarIcon,
  WatchLaterIcon,
} from '@reflex-ui/icons-md';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListShowcaseScreen().onButtonPress()');
};

const onListItemPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListShowcaseScreen().onListItemPress()');
};

const onListItemIconPress = () => {
  // tslint:disable-next-line:no-console
  console.log('ListShowcaseScreen().onListItemIconPress()');
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

/*
 * numberOfLines={1} does not work very well on web,
 * and that's why the last Lists (starting with Brunch this weekend?)
 * overflows the container. By deleting it we can see the content wrapping
 * properly.
 */

const ListShowcaseScreen: React.SFC = (): JSX.Element => {
  const paletteTheme = useContext(PaletteThemeContext);

  return (
    <ScrollView>
      <Column>
        {({ breakpoints, dimensions }) => {
          const listMaxWidth =
            dimensions.window.width < breakpoints.largeTablet ? 'auto' : 360;
          const verticalMargin = 70;

          return (
            <React.Fragment>
              <AppBar>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <MenuIcon />
                </Button>
                <AppBarTitle numberOfLines={1}>List & ListItem</AppBarTitle>
              </AppBar>
              <Column margin={Size.L} marginBottom={0}>
                <Paragraph1>
                  This screen showcases the {'<List> and <ListItem>'}{' '}
                  components.
                </Paragraph1>
                <Paragraph1 marginTop={Size.XS}>
                  These are the most common props and their default values:
                </Paragraph1>
                <Paragraph2 marginStart={Size.XS} marginTop={Size.XXS}>
                  {'colorArrangement={paletteTheme.surface.normal}'}
                </Paragraph2>
                <Paragraph1 marginTop={Size.XL}>
                  We also pass {'maxWidth={listMaxWidth}'} to all lists in this
                  screen.
                  {'\n'}
                  The value of listMaxWidth is the result of the following
                  computation:
                </Paragraph1>
                <Paragraph1 marginTop={Size.M}>
                  {[
                    'dimensions.window.width < breakpoints.largeTablet',
                    "? 'auto' : 360",
                  ].join(' ')}
                </Paragraph1>
                <Paragraph1 marginTop={Size.M}>
                  That means we limit its size to 360 for large screens, and let
                  it grows to the size of its container for small screens.
                </Paragraph1>
              </Column>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.XXS}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface
                  activated
                  contained={false}
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XXS}>
                    <Paragraph2 marginHorizontal={Size.S}>Inbox</Paragraph2>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XXS}>
                    <Paragraph2 marginHorizontal={Size.S}>Starred</Paragraph2>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XXS}>
                    <Paragraph2 marginHorizontal={Size.S}>Snoozed</Paragraph2>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XXS}>
                    <Paragraph2 marginHorizontal={Size.S}>Important</Paragraph2>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.XXS}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface
                  activated
                  contained={false}
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XXS}>
                    <Column marginHorizontal={Size.S}>
                      <InboxIcon size={Size.S} />
                    </Column>
                    <Paragraph2 marginHorizontal={Size.S}>Inbox</Paragraph2>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XXS}>
                    <Column marginHorizontal={Size.S}>
                      <StarIcon size={Size.S} />
                    </Column>
                    <Paragraph2 marginHorizontal={Size.S}>Starred</Paragraph2>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XXS}>
                    <Column marginHorizontal={Size.S}>
                      <WatchLaterIcon size={Size.S} />
                    </Column>
                    <Paragraph2 marginHorizontal={Size.S}>Snoozed</Paragraph2>
                    <Column flexGrow={1} />
                    <Button
                      onPress={onListItemIconPress}
                      size={Size.XS}
                      variant={ButtonVariant.Icon}
                    >
                      <MoreVertIcon />
                    </Button>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XXS}>
                    <Column marginHorizontal={Size.S}>
                      <LabelIcon size={Size.S} />
                    </Column>
                    <Paragraph2 marginHorizontal={Size.S}>Important</Paragraph2>
                    <Column flexGrow={1} />
                    <Button
                      onPress={onListItemIconPress}
                      size={Size.XS}
                      variant={ButtonVariant.Icon}
                    >
                      <MoreVertIcon />
                    </Button>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.XS}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface
                  activated
                  contained={false}
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XS}>
                    <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XS}>
                    <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XS}>
                    <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XS}>
                    <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.XS}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface
                  activated
                  contained={false}
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XS}>
                    <Column marginHorizontal={Size.S}>
                      <InboxIcon size={Size.S} />
                    </Column>
                    <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XS}>
                    <Column marginHorizontal={Size.S}>
                      <StarIcon size={Size.S} />
                    </Column>
                    <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XS}>
                    <Column marginHorizontal={Size.S}>
                      <WatchLaterIcon size={Size.S} />
                    </Column>
                    <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
                    <Column flexGrow={1} />
                    <Button
                      onPress={onListItemIconPress}
                      size={Size.XS}
                      variant={ButtonVariant.Icon}
                    >
                      <MoreVertIcon />
                    </Button>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XS}>
                    <Column marginHorizontal={Size.S}>
                      <LabelIcon size={Size.S} />
                    </Column>
                    <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
                    <Column flexGrow={1} />
                    <Button
                      onPress={onListItemIconPress}
                      size={Size.XS}
                      variant={ButtonVariant.Icon}
                    >
                      <MoreVertIcon />
                    </Button>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.S}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface
                  activated
                  contained={false}
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.S}>
                    <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.S}>
                    <Paragraph1 marginHorizontal={Size.S}>Starred</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.S}>
                    <Paragraph1 marginHorizontal={Size.S}>Snoozed</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.S}>
                    <Paragraph1 marginHorizontal={Size.S}>Important</Paragraph1>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.S}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.S}>
                    <Column marginHorizontal={Size.S}>
                      <InboxIcon />
                    </Column>
                    <Paragraph1 marginHorizontal={Size.S}>Inbox</Paragraph1>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.S}>
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
                  <ListItem size={Size.S}>
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
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  activated
                  contained={false}
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.S}>
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
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.M}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
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
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {[
                  '<List colorArrangement={paletteTheme.primary.dark}',
                  'maxWidth={listMaxWidth}>',
                ].join(' ')}
                {'\n'}
                {'<ListItem size={Size.M}>'}
              </Paragraph2>
              <List
                colorArrangement={paletteTheme.primary.dark}
                maxWidth={listMaxWidth}
              >
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
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.M}>'}
                {'\n'}
                {'We also provides a custom theme for <Paragraph1>'}
              </Paragraph2>
              <ComponentsThemeContext.Consumer>
                {componentsTheme => (
                  <ComponentsThemeContext.Provider
                    value={{
                      ...componentsTheme,
                      text: {
                        ...(componentsTheme.text as RfxTextVariantsTheme),
                        paragraph1: createParagraph1Theme(
                          (componentsTheme.text as RfxTextVariantsTheme)
                            .paragraph1,
                        ),
                      },
                    }}
                  >
                    <List maxWidth={listMaxWidth}>
                      <TouchableSurface
                        activated
                        contained={false}
                        onPress={onListItemPress}
                      >
                        <ListItem size={Size.M}>
                          <Column marginHorizontal={Size.S}>
                            <InboxIcon />
                          </Column>
                          <Paragraph1 marginHorizontal={Size.S}>
                            Inbox
                          </Paragraph1>
                        </ListItem>
                      </TouchableSurface>
                      <TouchableSurface
                        contained={false}
                        onPress={onListItemPress}
                      >
                        <ListItem size={Size.M}>
                          <Column marginHorizontal={Size.S}>
                            <StarIcon />
                          </Column>
                          <Paragraph1 marginHorizontal={Size.S}>
                            Starred
                          </Paragraph1>
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
                          <Paragraph1 marginHorizontal={Size.S}>
                            Snoozed
                          </Paragraph1>
                          <Column flexGrow={1} />
                          <Button
                            onPress={onListItemIconPress}
                            variant={ButtonVariant.Icon}
                          >
                            <MoreVertIcon />
                          </Button>
                          <Caption marginHorizontal={Size.XS}>
                            Jan 26, 2019
                          </Caption>
                        </ListItem>
                      </TouchableSurface>
                      <TouchableSurface
                        contained={false}
                        onPress={onListItemPress}
                      >
                        <ListItem size={Size.M}>
                          <Column marginHorizontal={Size.S}>
                            <LabelIcon />
                          </Column>
                          <Paragraph1 marginHorizontal={Size.S}>
                            Important
                          </Paragraph1>
                          <Column flexGrow={1} />
                          <Button
                            onPress={onListItemIconPress}
                            variant={ButtonVariant.Icon}
                          >
                            <MoreVertIcon />
                          </Button>
                          <Caption marginHorizontal={Size.XS}>
                            Jan 26, 2019
                          </Caption>
                        </ListItem>
                      </TouchableSurface>
                    </List>
                  </ComponentsThemeContext.Provider>
                )}
              </ComponentsThemeContext.Consumer>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.M}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.M}>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>
                        Brunch this weekend?
                      </Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        Ali Connors -
                        <Paragraph2>
                          I'll be in your neighborhood doing errands this
                          weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.L}>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Summer BBQ</Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        to Alex, Scott, Jennifer -
                        <Paragraph2>
                          Wish I could come, but I'm out of town this weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.L}>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Birthday Gift</Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        Trevor Hansen -
                        <Paragraph2>
                          Have any ideas about what we should get Heidi for her
                          birthday?
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.L}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.L}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>
                        Brunch this weekend?
                      </Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        Ali Connors -
                        <Paragraph2>
                          I'll be in your neighborhood doing errands this
                          weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.L}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Summer BBQ</Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        to Alex, Scott, Jennifer -
                        <Paragraph2>
                          Wish I could come, but I'm out of town this weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.L}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Birthday Gift</Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        Trevor Hansen -
                        <Paragraph2>
                          Have any ideas about what we should get Heidi for her
                          birthday?
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.XL}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XL}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>
                        Brunch this weekend?
                      </Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        Ali Connors -
                        <Paragraph2>
                          I'll be in your neighborhood doing errands this
                          weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XL}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Summer BBQ</Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        to Alex, Scott, Jennifer -
                        <Paragraph2>
                          Wish I could come, but I'm out of town this weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XL}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Birthday Gift</Paragraph1>
                      <Paragraph2 numberOfLines={1}>
                        Trevor Hansen -
                        <Paragraph2>
                          Have any ideas about what we should get Heidi for her
                          birthday?
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
              </List>
              <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
                {'<List maxWidth={listMaxWidth}>'}
                {'\n'}
                {'<ListItem size={Size.XXL}>'}
              </Paragraph2>
              <List maxWidth={listMaxWidth}>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XXL}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>
                        Brunch this weekend?
                      </Paragraph1>
                      <Paragraph2 numberOfLines={2}>
                        Ali Connors -
                        <Paragraph2>
                          I'll be in your neighborhood doing errands this
                          weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface
                  contained={false}
                  disabled
                  onPress={onListItemPress}
                >
                  <ListItem size={Size.XXL}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Summer BBQ</Paragraph1>
                      <Paragraph2 numberOfLines={2}>
                        to Alex, Scott, Jennifer -
                        <Paragraph2>
                          Wish I could come, but I'm out of town this weekend.
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
                <TouchableSurface contained={false} onPress={onListItemPress}>
                  <ListItem size={Size.XXL}>
                    <Column marginHorizontal={Size.S}>
                      <AccountCircleIcon size={Size.XL} />
                    </Column>
                    <Column flexShrink={1} marginHorizontal={Size.S}>
                      <Paragraph1 numberOfLines={1}>Birthday Gift</Paragraph1>
                      <Paragraph2 numberOfLines={2}>
                        Trevor Hansen -
                        <Paragraph2>
                          Have any ideas about what we should get Heidi for her
                          birthday?
                        </Paragraph2>
                      </Paragraph2>
                    </Column>
                  </ListItem>
                </TouchableSurface>
              </List>
            </React.Fragment>
          );
        }}
      </Column>
    </ScrollView>
  );
};

ListShowcaseScreen.displayName = 'ListShowcaseScreen';

export { ListShowcaseScreen };
