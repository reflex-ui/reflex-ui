/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarProps,
  AppBarTheme,
  AppBarTitle,
  AppBarVariant,
  Button,
  ButtonVariant,
  Column,
  ComponentThemeGetter,
  PaletteContext,
  Paragraph1,
  Paragraph2,
  Row,
  Screen,
  Size,
} from '@reflex-ui/core';
import {
  FavoriteIcon,
  MenuIcon,
  MoreVertIcon,
  SearchIcon,
} from '@reflex-ui/icons-md';
import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const getPatchTheme: ComponentThemeGetter<AppBarProps, AppBarTheme> = ({
  dimensions,
  breakpoints,
}): AppBarTheme => ({
  centerArea: {
    getStyle: () => ({
      marginStart: dimensions.window.width > breakpoints.largeHandset ? 10 : 4,
    }),
  },
});

const DefaultAppBarScreen: React.SFC = (): JSX.Element => {
  const palette = useContext(PaletteContext);
  const verticalMargin = 70;

  return (
    <Screen>
      <AppBar getPatchTheme={getPatchTheme} variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>AppBar</AppBarTitle>
      </AppBar>
      <ScrollView>
        <Column margin={Size.L} marginBottom={0}>
          <Paragraph1>
            This screen showcases the {'<AppBar>'} component.
          </Paragraph1>
          <Paragraph1 marginTop={Size.XS}>
            These are the most common props and their default values:
          </Paragraph1>
          <Paragraph2 marginStart={Size.XS} marginTop={Size.XXS}>
            {'paletteColor={palette.primary}'}
            {'\n'}
            {'variant={AppBarVariant.Default}'}
          </Paragraph2>
        </Column>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar>'}
        </Paragraph2>
        <AppBar>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
              <Row>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <FavoriteIcon />
                </Button>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <SearchIcon />
                </Button>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <MoreVertIcon />
                </Button>
              </Row>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar getPatchTheme={getPatchTheme}>'}
        </Paragraph2>
        <AppBar getPatchTheme={getPatchTheme}>
          <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
            <MenuIcon />
          </Button>
          <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar>'}
        </Paragraph2>
        <AppBar marginBottom={Size.XXL}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
              <Button onPress={onButtonPress}>Save As</Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar>'}
        </Paragraph2>
        <AppBar>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
              <Button
                invertColor
                onPress={onButtonPress}
                variant={ButtonVariant.Contained}
              >
                Save As
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar paletteColor={palette.primaryDark}>'}
        </Paragraph2>
        <AppBar paletteColor={palette.primaryDark}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis
              </AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar variant={AppBarVariant.Dense}>'}
        </Paragraph2>
        <AppBar variant={AppBarVariant.Dense}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar variant={AppBarVariant.Prominent}>'}
        </Paragraph2>
        <AppBar variant={AppBarVariant.Prominent}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle>My Application</AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar variant={AppBarVariant.Prominent}>'}
        </Paragraph2>
        <AppBar variant={AppBarVariant.Prominent}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle>
                Sed ut perspiciatis unde omnis iste natus error
              </AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar variant={AppBarVariant.Prominent}>'}
        </Paragraph2>
        <AppBar variant={AppBarVariant.Prominent}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque
                laudantium totam rem aperiam eaque ipsa quae ab illo inventore
                veritatis. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium totam rem aperiam
                eaque ipsa quae ab illo inventore veritatis. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
                inventore veritatis. Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium totam rem
                aperiam eaque ipsa quae ab illo inventore veritatis. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque
                laudantium totam rem aperiam eaque ipsa quae ab illo inventore
                veritatis. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium totam rem aperiam
                eaque ipsa quae ab illo inventore veritatis
              </AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar variant={AppBarVariant.ProminentDense}>'}
        </Paragraph2>
        <AppBar variant={AppBarVariant.ProminentDense}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle>My Application</AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar variant={AppBarVariant.ProminentDense}>'}
        </Paragraph2>
        <AppBar variant={AppBarVariant.ProminentDense}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle>
                Sed ut perspiciatis unde omnis iste natus error
              </AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar paletteColor={palette.secondary}>'}
        </Paragraph2>
        <AppBar paletteColor={palette.secondary}>
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>
                My Application Lorem Ipsum Dolor Sit Amet Consectum Lorem Ipsum
                Dolor Sit Amet Consectum Lorem Ipsum Dolor Sit Amet Consectum
              </AppBarTitle>
              <Row>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <FavoriteIcon />
                </Button>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <MenuIcon />
                </Button>
              </Row>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar paletteColor={palette.secondaryLight}>'}
        </Paragraph2>
        <AppBar paletteColor={palette.secondaryLight}>
          <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
            <MenuIcon />
          </Button>
          <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar>'}
        </Paragraph2>
        <AppBar>
          <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
            <MenuIcon />
          </Button>
          <View />
          <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
            <FavoriteIcon />
          </Button>
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar>'}
        </Paragraph2>
        <AppBar>
          <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
            <MenuIcon />
          </Button>
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {'<AppBar paletteColor={palette.warning}>'}
        </Paragraph2>
        <AppBar paletteColor={palette.warning}>
          {() => <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {[
            '<AppBar paletteColor={palette.secondary}',
            'variant={AppBarVariant.Prominent}>',
          ].join(' ')}
        </Paragraph2>
        <AppBar
          paletteColor={palette.secondary}
          variant={AppBarVariant.Prominent}
        >
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <FavoriteIcon />
              </Button>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {[
            '<AppBar paletteColor={palette.secondaryDark}',
            'variant={AppBarVariant.Prominent}>',
          ].join(' ')}
        </Paragraph2>
        <AppBar
          paletteColor={palette.secondaryDark}
          variant={AppBarVariant.Prominent}
        >
          {() => (
            <React.Fragment>
              <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                <MenuIcon />
              </Button>
              <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
              <Row>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <FavoriteIcon />
                </Button>
                <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
                  <MenuIcon />
                </Button>
              </Row>
            </React.Fragment>
          )}
        </AppBar>
        <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
          {[
            '<AppBar paletteColor={palette.secondaryLight}',
            'variant={AppBarVariant.Prominent}>',
          ].join(' ')}
        </Paragraph2>
        <AppBar
          paletteColor={palette.secondaryLight}
          variant={AppBarVariant.Prominent}
        >
          <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
            <MenuIcon />
          </Button>
          <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
        </AppBar>
      </ScrollView>
    </Screen>
  );
};

DefaultAppBarScreen.displayName = 'DefaultAppBarScreen';

export { DefaultAppBarScreen };
