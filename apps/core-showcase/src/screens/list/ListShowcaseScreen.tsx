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
  ColorTheme,
  Column,
  List,
  ListItem,
  Paragraph1,
  Paragraph2,
  Size,
  TouchableSurface,
} from '@reflex-ui/core';
import {
  AccountCircleIcon,
  InboxIcon,
  MenuIcon,
  MoreVertIcon,
  StarIcon,
  WatchLaterIcon,
} from '@reflex-ui/icons-md';
import * as React from 'react';
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

const ListShowcaseScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Column>
      {({ breakpoints, dimensions }) => {
        const listMaxWidth =
          dimensions.window.width < breakpoints.largeTablet ? 'auto' : 360;

        return (
          <React.Fragment>
            <AppBar>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>List & ListItem</AppBarTitle>
            </AppBar>
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.XXS</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXS}>
                  <Paragraph2 marginHorizontal={Size.XS}>Inbox</Paragraph2>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXS}>
                  <Paragraph2 marginHorizontal={Size.XS}>Starred</Paragraph2>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXS}>
                  <Paragraph2 marginHorizontal={Size.XS}>Snoozed</Paragraph2>
                </ListItem>
              </TouchableSurface>
            </List>
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.XXS</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXS}>
                  <InboxIcon marginHorizontal={Size.XS} size={Size.S} />
                  <Paragraph2 marginHorizontal={Size.XS}>Inbox</Paragraph2>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXS}>
                  <StarIcon marginHorizontal={Size.XS} size={Size.S} />
                  <Paragraph2 marginHorizontal={Size.XS}>Starred</Paragraph2>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXS}>
                  <WatchLaterIcon marginHorizontal={Size.XS} size={Size.S} />
                  <Paragraph2 marginHorizontal={Size.XS}>Snoozed</Paragraph2>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.XS</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XS}>
                  <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XS}>
                  <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XS}>
                  <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
                </ListItem>
              </TouchableSurface>
            </List>
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.XS</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XS}>
                  <InboxIcon marginHorizontal={Size.XS} size={Size.S} />
                  <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XS}>
                  <StarIcon marginHorizontal={Size.XS} size={Size.S} />
                  <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XS}>
                  <WatchLaterIcon marginHorizontal={Size.XS} size={Size.S} />
                  <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.S</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.S}>
                  <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.S}>
                  <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.S}>
                  <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
                </ListItem>
              </TouchableSurface>
            </List>
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.S</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.S}>
                  <InboxIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.S}>
                  <StarIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface disabled onPress={onListItemPress}>
                <ListItem size={Size.S}>
                  <WatchLaterIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.M</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.M}>
                  <InboxIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.M}>
                  <StarIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.M}>
                  <WatchLaterIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.PrimaryNormal</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.M</Caption>
            </Column>
            <List colorTheme={ColorTheme.PrimaryDark} maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.M}>
                  <InboxIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Inbox</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.M}>
                  <StarIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Starred</Paragraph1>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.M}>
                  <WatchLaterIcon marginHorizontal={Size.XS} />
                  <Paragraph1 marginHorizontal={Size.XS}>Snoozed</Paragraph1>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.L</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.M}>
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
                    <Paragraph1 numberOfLines={1}>
                      Brunch this weekend?
                    </Paragraph1>
                    <Paragraph2 numberOfLines={1}>
                      Ali Connors -
                      <Paragraph2>
                        I'll be in your neighborhood doing errands this weekend.
                      </Paragraph2>
                    </Paragraph2>
                  </Column>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.L}>
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.L}>
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.L</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.L}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
                    <Paragraph1 numberOfLines={1}>
                      Brunch this weekend?
                    </Paragraph1>
                    <Paragraph2 numberOfLines={1}>
                      Ali Connors -
                      <Paragraph2>
                        I'll be in your neighborhood doing errands this weekend.
                      </Paragraph2>
                    </Paragraph2>
                  </Column>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.L}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.L}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.XL</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XL}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
                    <Paragraph1 numberOfLines={1}>
                      Brunch this weekend?
                    </Paragraph1>
                    <Paragraph2 numberOfLines={1}>
                      Ali Connors -
                      <Paragraph2>
                        I'll be in your neighborhood doing errands this weekend.
                      </Paragraph2>
                    </Paragraph2>
                  </Column>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XL}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XL}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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
            <Column margin={Size.L}>
              <Caption>List: ColorTheme.SurfaceNormal (default)</Caption>
              <Caption marginTop={Size.XXS}>ListItem: Size.XXL</Caption>
            </Column>
            <List maxWidth={listMaxWidth}>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXL}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
                    <Paragraph1 numberOfLines={1}>
                      Brunch this weekend?
                    </Paragraph1>
                    <Paragraph2 numberOfLines={2}>
                      Ali Connors -
                      <Paragraph2>
                        I'll be in your neighborhood doing errands this weekend.
                      </Paragraph2>
                    </Paragraph2>
                  </Column>
                </ListItem>
              </TouchableSurface>
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXL}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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
              <TouchableSurface onPress={onListItemPress}>
                <ListItem size={Size.XXL}>
                  <AccountCircleIcon
                    marginHorizontal={Size.XS}
                    size={Size.XL}
                  />
                  <Column flexShrink={1} marginHorizontal={Size.XS}>
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

ListShowcaseScreen.displayName = 'ListShowcaseScreen';

export { ListShowcaseScreen };
