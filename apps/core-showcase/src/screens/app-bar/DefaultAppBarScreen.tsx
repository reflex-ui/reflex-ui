/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarSubProps,
  AppBarSubPropsGetter,
  AppBarTitle,
  AppBarVariant,
  Button,
  ButtonVariant,
  Caption,
  ColorTheme,
  Row,
  Size,
} from '@reflex-ui/core';
import {
  FavoriteIcon,
  MenuIcon,
  MoreVertIcon,
  SearchIcon,
} from '@reflex-ui/icons-md';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const getAppBarSubProps: AppBarSubPropsGetter = ({
  dimensions,
  breakpoints,
}): AppBarSubProps => ({
  centerArea: {
    style: {
      marginStart: dimensions.window.width > breakpoints.largeHandset ? 10 : 4,
    },
  },
});

const DefaultAppBarScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <AppBar getSubProps={getAppBarSubProps} variant={AppBarVariant.Default}>
      <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>AppBar</AppBarTitle>
    </AppBar>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
      <AppBar getSubProps={getAppBarSubProps} variant={AppBarVariant.Default}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
      <AppBar>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
      <AppBar colorTheme={ColorTheme.PrimaryDark}>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Dense, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Prominent, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Prominent, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Prominent, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.ProminentDense, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.ProminentDense, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.SecondaryNormal
    </Caption>
    <Row>
      <AppBar colorTheme={ColorTheme.SecondaryNormal}>
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.SecondaryLight
    </Caption>
    <Row>
      <AppBar colorTheme={ColorTheme.SecondaryLight}>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <View />
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <FavoriteIcon />
        </Button>
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.PrimaryNormal (default)
    </Caption>
    <Row>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Default, ColorTheme.WarningNormal
    </Caption>
    <Row>
      <AppBar colorTheme={ColorTheme.WarningNormal}>
        {() => <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Prominent, ColorTheme.SecondaryNormal (default)
    </Caption>
    <Row>
      <AppBar
        colorTheme={ColorTheme.SecondaryNormal}
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Prominent, ColorTheme.SecondaryDark
    </Caption>
    <Row>
      <AppBar
        colorTheme={ColorTheme.SecondaryDark}
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
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.Prominent, ColorTheme.SecondaryLight
    </Caption>
    <Row>
      <AppBar
        colorTheme={ColorTheme.SecondaryLight}
        variant={AppBarVariant.Prominent}
      >
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </Row>
  </ScrollView>
);

DefaultAppBarScreen.displayName = 'DefaultAppBarScreen';

export { DefaultAppBarScreen };
