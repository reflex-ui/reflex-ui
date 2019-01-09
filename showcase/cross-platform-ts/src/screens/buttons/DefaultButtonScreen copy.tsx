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
  ButtonProps,
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
  InteractivityType,
  registerStyle,
  Row,
  Size,
} from '@reflex-ui/core';
import {
  disabledPaletteColor,
  FavoriteIcon,
  getInlayColorByInteractivity,
  getOverlayColorByInteractivity,
  MenuIcon,
} from '@reflex-ui/material-design';
import * as React from 'react';
import {
  ScrollView,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const getDefaultButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => {
  const subProps: ButtonSubProps = {
    container: {
      style: registerStyle<ViewStyle>({
        backgroundColor: getOverlayColorByInteractivity({
          color: '#c70ad0',
          type: props.interactivityState.type,
        }),
      }),
    },
    text: {
      style: registerStyle<TextStyle>({
        color:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledPaletteColor.normal.onColor
            : '#c70ad0',
      }),
    },
  };

  return {
    ...subProps,
    leadingIcon: subProps.text,
    trailingIcon: subProps.text,
  };
};

const getContainedButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: registerStyle<ViewStyle>({
      backgroundColor:
      props.interactivityState.type === InteractivityType.DISABLED
        ? disabledPaletteColor.normal.color
        : getInlayColorByInteractivity({
          color: '#c70ad0',
          type: props.interactivityState.type,
        }),
    }),
  },
});

const getFabButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: registerStyle<ViewStyle>({
      backgroundColor:
      props.interactivityState.type === InteractivityType.DISABLED
        ? disabledPaletteColor.normal.color
        : getInlayColorByInteractivity({
          color: '#c70ad0',
          type: props.interactivityState.type,
        }),
    }),
  },
  icon: {
    style: registerStyle<TextStyle>({
      color:
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledPaletteColor.normal.onColor
          : '#ffffff',
    }),
  },
});

const getIconButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: registerStyle<ViewStyle>({
      backgroundColor: getOverlayColorByInteractivity({
        color: '#c70ad0',
        type: props.interactivityState.type,
      }),
    }),
  },
  icon: {
    style: registerStyle<TextStyle>({
      color:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledPaletteColor.normal.onColor
            : '#c70ad0',
    }),
  },
});

const getOutlinedButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => {
  const subProps: ButtonSubProps = {
    container: {
      style: registerStyle<ViewStyle>({
        backgroundColor: getOverlayColorByInteractivity({
          color: '#c70ad0',
          type: props.interactivityState.type,
        }),
        borderColor:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledPaletteColor.normal.onColor
            : '#c70ad0',
      }),
    },
    text: {
      style: registerStyle<TextStyle>({
        color:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledPaletteColor.normal.onColor
            : '#c70ad0',
      }),
    },
  };

  return {
    ...subProps,
    leadingIcon: subProps.text,
    trailingIcon: subProps.text,
  };
};

const getXFabButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => {
  const subProps: ButtonSubProps = {
    container: {
      style: registerStyle<ViewStyle>({
        backgroundColor:
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledPaletteColor.normal.color
          : getInlayColorByInteractivity({
            color: '#c70ad0',
            type: props.interactivityState.type,
          }),
      }),
    },
    text: {
      style: registerStyle<TextStyle>({
        color:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledPaletteColor.normal.onColor
            : '#ffffff',
      }),
    },
  };
  return {
    ...subProps,
    leadingIcon: subProps.text,
    trailingIcon: subProps.text,
  };
};

const DefaultButtonScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <AppBar>
      {() => (
        <React.Fragment>
          <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
            <MenuIcon />
          </Button>
          <AppBarTitle numberOfLines={1}>ButtonVariant.DEFAULT</AppBarTitle>
        </React.Fragment>
      )}
    </AppBar>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button getSubProps={getDefaultButtonProps} onPress={onButtonPress}>
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
        onPress={onButtonPress}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getDefaultButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getDefaultButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getDefaultButtonProps}
        leadingIcon={<FavoriteIcon color="#c70ad0" />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.OUTLINED}>
        Sign In
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.OUTLINED}>
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.OUTLINED_SHAPED}>
        Sign In
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getOutlinedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.CONTAINED}>
        Sign In
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.CONTAINED_SHAPED}>
        Sign In
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_SHAPED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.HIGHLIGHTED}>
        Sign In
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.HIGHLIGHTED}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <FavoriteIcon />
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getIconButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
      <Button
        disabled
        getSubProps={getIconButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.FAB}>
        <FavoriteIcon />
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.FAB}>
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getFabButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        disabled
        getSubProps={getFabButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDAY_NORMAL (default)</Text>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.XFAB}>
        Sign In
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.XFAB}>
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <Button
        getSubProps={getXFabButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getXFabButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getXFabButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getXFabButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getXFabButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getXFabButtonProps}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button
        getSubProps={getXFabButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getXFabButtonProps}
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Text>ColorTheme.SECONDARY_NORMAL (default)</Text>
    </Row>
    <Row>
      <FavoriteIcon size={Size.XS} />
      <FavoriteIcon size={Size.S} />
      <FavoriteIcon />
      <FavoriteIcon size={Size.L} />
      <FavoriteIcon size={Size.XL} />
    </Row>
    <Row>
      <Text>ColorTheme.PRIMARY_NORMAL</Text>
    </Row>
    <Row>
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.XL} />
    </Row>
    <Row>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </Row>
    <Row>
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.XL} />
    </Row>
    <Row>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </Row>
    <Row>
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.XL} />
    </Row>
    <Row>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </Row>
    <Row>
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.XL} />
    </Row>
    <Row>
      <Text>Custom color</Text>
    </Row>
    <Row>
      <FavoriteIcon color="#c70ad0" size={Size.XS} />
      <FavoriteIcon color="#c70ad0" size={Size.S} />
      <FavoriteIcon color="#c70ad0" />
      <FavoriteIcon color="#c70ad0" size={Size.L} />
      <FavoriteIcon color="#c70ad0" size={Size.XL} />
    </Row>
  </ScrollView>
);

DefaultButtonScreen.displayName = 'DefaultButtonScreen';

export { DefaultButtonScreen };

/*
import { Button, ButtonVariant, Row } from '@reflex-ui/core';
import { FavoriteIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const DefaultButtonScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <FavoriteIcon />
      </Button>
    </Row>
  </ScrollView>
);

DefaultButtonScreen.displayName = 'DefaultButtonScreen';

export { DefaultButtonScreen };
*/
/*
import {
  Button,
  ButtonProps,
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  InteractivityType,
  registerStyle,
  Row,
} from '@reflex-ui/core';
import {
  disabledPaletteColor,
  getOverlayColorByInteractivity,
} from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView, TextStyle, ViewStyle } from 'react-native';

const getDefaultButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => {
  const subProps: ButtonSubProps = {
    container: {
      style: registerStyle<ViewStyle>({
        backgroundColor: getOverlayColorByInteractivity({
          color: '#c70ad0',
          type: props.interactivityState.type,
        }),
      }),
    },
    text: {
      style: registerStyle<TextStyle>({
        color:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledPaletteColor.normal.onColor
            : '#c70ad0',
      }),
    },
  };

  return {
    ...subProps,
    leadingIcon: subProps.text,
    trailingIcon: subProps.text,
  };
};

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const DefaultButtonScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Row>
      <Button
        getSubProps={getDefaultButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.DEFAULT}
      >
        Sign In
      </Button>
    </Row>
  </ScrollView>
);

DefaultButtonScreen.displayName = 'DefaultButtonScreen';

export { DefaultButtonScreen };
*/
/*
import {
  Button,
  ButtonTheme,
  ButtonVariant,
  OptionalButtonTheme,
  Row,
} from '@reflex-ui/core';
import {
  animatedContainedButtonTheme,
  getAnimatedContainedButtonContainerStyle,
} from '@reflex-ui/material-design';
import merge from 'lodash/merge';
import * as React from 'react';
import { ScrollView } from 'react-native';

const myContainedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, animatedContainedButtonTheme, {
  container: {
    getStyle: props => ({
      ...getAnimatedContainedButtonContainerStyle(props),
      borderRadius: 0,
    }),
  },
});

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const DefaultButtonScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Row>
      <Button
        onPress={onButtonPress}
        theme={myContainedButtonTheme}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </Row>
  </ScrollView>
);

DefaultButtonScreen.displayName = 'DefaultButtonScreen';

export { DefaultButtonScreen };
*/
