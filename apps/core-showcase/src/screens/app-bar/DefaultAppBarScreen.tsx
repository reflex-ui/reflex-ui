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
  PaletteThemeContext,
  Paragraph1,
  Paragraph2,
  Row,
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
  const paletteTheme = useContext(PaletteThemeContext);
  const verticalMargin = 70;

  return (
    <ScrollView>
      <AppBar getPatchTheme={getPatchTheme} variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>AppBar</AppBarTitle>
      </AppBar>
      <Column margin={Size.L} marginBottom={0}>
        <Paragraph1>
          This screen showcases the {'<AppBar>'} component.
        </Paragraph1>
        <Paragraph1 marginTop={Size.XS}>
          These are the most common props and their default values:
        </Paragraph1>
        <Paragraph2 marginStart={Size.XS} marginTop={Size.XXS}>
          {'paletteColor={paletteTheme.primary}'}
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
        {'<AppBar paletteColor={paletteTheme.primaryDark}>'}
      </Paragraph2>
      <AppBar paletteColor={paletteTheme.primaryDark}>
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
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis
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
        {'<AppBar paletteColor={paletteTheme.secondary}>'}
      </Paragraph2>
      <AppBar paletteColor={paletteTheme.secondary}>
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
        {'<AppBar paletteColor={paletteTheme.secondaryLight}>'}
      </Paragraph2>
      <AppBar paletteColor={paletteTheme.secondaryLight}>
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
        {'<AppBar paletteColor={paletteTheme.warning}>'}
      </Paragraph2>
      <AppBar paletteColor={paletteTheme.warning}>
        {() => <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>}
      </AppBar>
      <Paragraph2 margin={Size.L} marginTop={verticalMargin}>
        {[
          '<AppBar paletteColor={paletteTheme.secondary}',
          'variant={AppBarVariant.Prominent}>',
        ].join(' ')}
      </Paragraph2>
      <AppBar
        paletteColor={paletteTheme.secondary}
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
          '<AppBar paletteColor={paletteTheme.secondaryDark}',
          'variant={AppBarVariant.Prominent}>',
        ].join(' ')}
      </Paragraph2>
      <AppBar
        paletteColor={paletteTheme.secondaryDark}
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
          '<AppBar paletteColor={paletteTheme.secondaryLight}',
          'variant={AppBarVariant.Prominent}>',
        ].join(' ')}
      </Paragraph2>
      <AppBar
        paletteColor={paletteTheme.secondaryLight}
        variant={AppBarVariant.Prominent}
      >
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </ScrollView>
  );
};

DefaultAppBarScreen.displayName = 'DefaultAppBarScreen';

export { DefaultAppBarScreen };
