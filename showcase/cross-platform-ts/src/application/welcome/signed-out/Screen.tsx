import {
  Button,
  ButtonProps,
  ButtonVariant,
  ColorTheme,
  InteractivityType,
  RowView,
  Size,
} from '@reflex-ui/core';
import {
  disabledPaletteColor,
  FavoriteIcon,
  getInlayColorByInteractivity,
  getOverlayColorByInteractivity,
} from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView, Text } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('WelcomeSignedOutScreen().onButtonPress()');
};

const getContainedContainerProps = (props: ButtonProps) => ({
  style: {
    backgroundColor: getInlayColorByInteractivity({
      color: '#c70ad0',
      type: props.interactivityState.type,
    }),
  },
});

const getDefaultContainerProps = (props: ButtonProps) => ({
  style: {
    backgroundColor: getOverlayColorByInteractivity({
      color: '#c70ad0',
      type: props.interactivityState.type,
    }),
  },
});

const getFabTextProps = (props: ButtonProps) => ({
  style: {
    color:
      props.interactivityState.type === InteractivityType.DISABLED
        ? disabledPaletteColor.normal.onColor
        : '#ffffff',
  },
});

const getOutlinedContainerProps = (props: ButtonProps) => ({
  style: {
    backgroundColor: getDefaultContainerProps(props).style.backgroundColor,
    borderColor:
      props.interactivityState.type === InteractivityType.DISABLED
        ? disabledPaletteColor.normal.onColor
        : '#c70ad0',
  },
});

const getTextProps = (props: ButtonProps) => ({
  style: {
    color:
      props.interactivityState.type === InteractivityType.DISABLED
        ? disabledPaletteColor.normal.onColor
        : '#c70ad0',
  },
});

/*
const getLeftIconContainerProps = () => ({
  style: {
    marginRight: 30,
  },
});
*/

/*
const getTextProps = (props: ButtonProps) => ({
  style: {
    color:
      props.interactivityState.type === InteractivityType.PRESSED
        ? 'green'
        : 'red',
  },
});
*/

export const WelcomeSignedOutScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress}>Sign In</Button>
      <Button disabled onPress={onButtonPress}>
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button leftIcon={<FavoriteIcon />} onPress={onButtonPress}>
        Favorite
      </Button>
      <Button disabled leftIcon={<FavoriteIcon />} onPress={onButtonPress}>
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} rightIcon={<FavoriteIcon />}>
        Favorite
      </Button>
      <Button disabled onPress={onButtonPress} rightIcon={<FavoriteIcon />}>
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </RowView>
    <RowView>
      <Button colorTheme={ColorTheme.SECONDARY_NORMAL} onPress={onButtonPress}>
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
      >
        Sign In
      </Button>
      <Button
        disabled
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
      <Button
        getContainerProps={getDefaultContainerProps}
        disabled
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        getContainerProps={getDefaultContainerProps}
        disabled
        getTextProps={getTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.OUTLINED}>
        Sign In
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.OUTLINED}>
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getOutlinedContainerProps}
        getTextProps={getTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.CONTAINED_RAISED}>
        Sign In
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL (default)</Text>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <FavoriteIcon />
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <FavoriteIcon />
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDARY_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
      <Button
        disabled
        getContainerProps={getDefaultContainerProps}
        getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDARY_NORMAL (default)</Text>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.FAB}>
        <FavoriteIcon />
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.FAB}>
        <FavoriteIcon />
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDAY_NORMAL (default)</Text>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.XFAB}>
        Sign In
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.XFAB}>
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button fullWidth onPress={onButtonPress} variant={ButtonVariant.XFAB}>
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.PRIMARY_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getContainerProps={getContainedContainerProps}
        getTextProps={getFabTextProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <FavoriteIcon size={Size.XSMALL} />
      <FavoriteIcon size={Size.SMALL} />
      <FavoriteIcon />
      <FavoriteIcon size={Size.LARGE} />
      <FavoriteIcon size={Size.XLARGE} />
    </RowView>
  </ScrollView>
);
