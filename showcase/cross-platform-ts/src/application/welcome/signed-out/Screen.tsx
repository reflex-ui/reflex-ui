import {
  Button,
  ButtonProps,
  ButtonSubProps,
  ButtonSubPropsGetter,
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

const getDefaultButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor: getOverlayColorByInteractivity({
        color: '#c70ad0',
        type: props.interactivityState.type,
      }),
    },
  },
  text: {
    style: {
      color:
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledPaletteColor.normal.onColor
          : '#c70ad0',
    },
  },
});

const getContainedButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor: getInlayColorByInteractivity({
        color: '#c70ad0',
        type: props.interactivityState.type,
      }),
    },
  },
});

const getFabButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor: getInlayColorByInteractivity({
        color: '#c70ad0',
        type: props.interactivityState.type,
      }),
    },
  },
  text: {
    style: {
      color:
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledPaletteColor.normal.onColor
          : '#ffffff',
    },
  },
});

const getOutlinedButtonProps = (props: ButtonProps): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor: getOverlayColorByInteractivity({
        color: '#c70ad0',
        type: props.interactivityState.type,
      }),
      borderColor:
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledPaletteColor.normal.onColor
          : '#c70ad0',
    },
  },
  text: {
    style: {
      color:
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledPaletteColor.normal.onColor
          : '#c70ad0',
    },
  },
});

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
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
      <Button colorTheme={ColorTheme.ERROR_NORMAL} onPress={onButtonPress}>
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
      <Button colorTheme={ColorTheme.SUCCESS_NORMAL} onPress={onButtonPress}>
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
      <Button colorTheme={ColorTheme.WARNING_NORMAL} onPress={onButtonPress}>
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
    </RowView>
    <RowView>
      <Button
        getSubProps={getDefaultButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getDefaultButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getDefaultButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
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
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
    </RowView>
    <RowView>
      <Button
        getSubProps={getOutlinedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getOutlinedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getOutlinedButtonProps}
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
        getSubProps={getOutlinedButtonProps}
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
        getSubProps={getOutlinedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getSubProps={getOutlinedButtonProps}
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
        getSubProps={getOutlinedButtonProps}
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
        getSubProps={getOutlinedButtonProps}
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
        getSubProps={getOutlinedButtonProps}
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
        getSubProps={getOutlinedButtonProps}
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
        getSubProps={getOutlinedButtonProps}
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
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
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
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
        getSubProps={getContainedButtonProps}
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
      <Button onPress={onButtonPress} variant={ButtonVariant.SHAPED}>
        Sign In
      </Button>
      <Button disabled onPress={onButtonPress} variant={ButtonVariant.SHAPED}>
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button fullWidth onPress={onButtonPress} variant={ButtonVariant.SHAPED}>
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
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
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        disabled
        fullWidth
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        fullWidth
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        disabled
        fullWidth
        getSubProps={getContainedButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.SHAPED}
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
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getSubProps={getDefaultButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.ICON}
      >
        <FavoriteIcon />
      </Button>
      <Button
        disabled
        getSubProps={getDefaultButtonProps}
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
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
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
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
        colorTheme={ColorTheme.ERROR_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.ERROR_NORMAL}
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
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
        colorTheme={ColorTheme.SUCCESS_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.SUCCESS_NORMAL}
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
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
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
    </RowView>
    <RowView>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
        colorTheme={ColorTheme.WARNING_NORMAL}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        colorTheme={ColorTheme.WARNING_NORMAL}
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
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <Button
        getSubProps={getFabButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
      <Button
        disabled
        getSubProps={getFabButtonProps}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Sign In
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getFabButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getFabButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getFabButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getFabButtonProps}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        getSubProps={getFabButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
      <Button
        disabled
        getSubProps={getFabButtonProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.XFAB}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Text>ColorTheme.SECONDARY_NORMAL (default)</Text>
    </RowView>
    <RowView>
      <FavoriteIcon size={Size.XS} />
      <FavoriteIcon size={Size.S} />
      <FavoriteIcon />
      <FavoriteIcon size={Size.L} />
      <FavoriteIcon size={Size.XL} />
    </RowView>
    <RowView>
      <Text>ColorTheme.PRIMARY_NORMAL</Text>
    </RowView>
    <RowView>
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.PRIMARY_NORMAL} size={Size.XL} />
    </RowView>
    <RowView>
      <Text>ColorTheme.ERROR_NORMAL</Text>
    </RowView>
    <RowView>
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.ERROR_NORMAL} size={Size.XL} />
    </RowView>
    <RowView>
      <Text>ColorTheme.SUCCESS_NORMAL</Text>
    </RowView>
    <RowView>
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.SUCCESS_NORMAL} size={Size.XL} />
    </RowView>
    <RowView>
      <Text>ColorTheme.WARNING_NORMAL</Text>
    </RowView>
    <RowView>
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.XS} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.S} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.L} />
      <FavoriteIcon colorTheme={ColorTheme.WARNING_NORMAL} size={Size.XL} />
    </RowView>
    <RowView>
      <Text>Custom color</Text>
    </RowView>
    <RowView>
      <FavoriteIcon color="#c70ad0" size={Size.XS} />
      <FavoriteIcon color="#c70ad0" size={Size.S} />
      <FavoriteIcon color="#c70ad0" />
      <FavoriteIcon color="#c70ad0" size={Size.L} />
      <FavoriteIcon color="#c70ad0" size={Size.XL} />
    </RowView>
  </ScrollView>
);
