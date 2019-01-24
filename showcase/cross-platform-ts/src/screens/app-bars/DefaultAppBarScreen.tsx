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
  Caption,
  ColorTheme,
  Row,
  Size,
} from '@reflex-ui/core';
import { FavoriteIcon, MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const DefaultAppBarScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button invertColor onPress={onButtonPress}>
              Save As
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.CONTAINED}
            >
              Save As
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis
            </AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DENSE, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar variant={AppBarVariant.DENSE}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle>My Application</AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle>
              Sed ut perspiciatis unde omnis iste natus error
            </AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
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
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT_DENSE, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT_DENSE}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle>My Application</AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT_DENSE, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT_DENSE}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle>
              Sed ut perspiciatis unde omnis iste natus error
            </AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.SECONDARY_NORMAL
    </Caption>
    <Row>
      <AppBar colorTheme={ColorTheme.SECONDARY_NORMAL}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>
              My Application Lorem Ipsum Dolor Sit Amet Consectum Lorem Ipsum
              Dolor Sit Amet Consectum Lorem Ipsum Dolor Sit Amet Consectum
            </AppBarTitle>
            <Row>
              <Button
                invertColor
                onPress={onButtonPress}
                variant={ButtonVariant.ICON}
              >
                <FavoriteIcon />
              </Button>
              <Button
                invertColor
                onPress={onButtonPress}
                variant={ButtonVariant.ICON}
              >
                <MenuIcon />
              </Button>
            </Row>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.SECONDARY_LIGHT
    </Caption>
    <Row>
      <AppBar colorTheme={ColorTheme.SECONDARY_LIGHT}>
        <Button
          invertColor
          onPress={onButtonPress}
          variant={ButtonVariant.ICON}
        >
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar>
        <Button
          invertColor
          onPress={onButtonPress}
          variant={ButtonVariant.ICON}
        >
          <MenuIcon />
        </Button>
        <View />
        <Button
          invertColor
          onPress={onButtonPress}
          variant={ButtonVariant.ICON}
        >
          <FavoriteIcon />
        </Button>
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar>
        <Button
          invertColor
          onPress={onButtonPress}
          variant={ButtonVariant.ICON}
        >
          <MenuIcon />
        </Button>
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.DEFAULT, ColorTheme.WARNING_NORMAL
    </Caption>
    <Row>
      <AppBar colorTheme={ColorTheme.WARNING_NORMAL}>
        {() => <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
    </Caption>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT, ColorTheme.SECONDARY_NORMAL
    </Caption>
    <Row>
      <AppBar
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        variant={AppBarVariant.PROMINENT}
      >
        {() => (
          <React.Fragment>
            <Button
              invertColor
              onPress={onButtonPress}
              variant={ButtonVariant.ICON}
            >
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Row>
              <Button
                invertColor
                onPress={onButtonPress}
                variant={ButtonVariant.ICON}
              >
                <FavoriteIcon />
              </Button>
              <Button
                invertColor
                onPress={onButtonPress}
                variant={ButtonVariant.ICON}
              >
                <MenuIcon />
              </Button>
            </Row>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Caption margin={Size.L}>
      AppBarVariant.PROMINENT, ColorTheme.SECONDARY_LIGHT
    </Caption>
    <Row>
      <AppBar
        colorTheme={ColorTheme.SECONDARY_LIGHT}
        variant={AppBarVariant.PROMINENT}
      >
        <Button
          invertColor
          onPress={onButtonPress}
          variant={ButtonVariant.ICON}
        >
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </Row>
  </ScrollView>
);

DefaultAppBarScreen.displayName = 'DefaultAppBarScreen';

export { DefaultAppBarScreen };
