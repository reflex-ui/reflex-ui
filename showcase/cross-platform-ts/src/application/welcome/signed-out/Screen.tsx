import {
  Button,
  // ButtonProps,
  ButtonVariant,
  // InteractivityType,
  RowView,
  Size,
} from '@reflex-ui/core';
import { FavoriteIcon, MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('WelcomeSignedOutScreen().onButtonPress()');
};

/*
const getContainerProps = (props: ButtonProps) => ({
  style: {
    backgroundColor:
      props.interactivityState &&
      props.interactivityState.type === InteractivityType.PRESSED
        ? 'green'
        : 'red',
  },
});
*/

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
      props.interactivityState &&
      props.interactivityState.type === InteractivityType.PRESSED
        ? 'green'
        : 'red',
  },
});
*/

export const WelcomeSignedOutScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <RowView>
      <Button
        // getContainerProps={getContainerProps}
        // getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.DEFAULT}
      >
        Sign In
      </Button>
      <Button
        // getLeftIconContainerProps={getLeftIconContainerProps}
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.DEFAULT}
      >
        Favorite
      </Button>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.DEFAULT}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.OUTLINED}>
        Sign In
      </Button>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.OUTLINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button onPress={onButtonPress} variant={ButtonVariant.CONTAINED}>
        Sign In
      </Button>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
      <Button
        onPress={onButtonPress}
        rightIcon={<FavoriteIcon />}
        variant={ButtonVariant.CONTAINED}
      >
        Favorite
      </Button>
    </RowView>
    <RowView>
      <Button
        // getContainerProps={getContainerProps}
        // getTextProps={getTextProps}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </Button>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        variant={ButtonVariant.CONTAINED_RAISED}
      >
        Favorite
      </Button>
      <Button
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
        onPress={onButtonPress}
        size={Size.XSMALL}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        onPress={onButtonPress}
        size={Size.SMALL}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button onPress={onButtonPress} variant={ButtonVariant.FAB}>
        <FavoriteIcon />
      </Button>
      <Button
        onPress={onButtonPress}
        size={Size.LARGE}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
      <Button
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={ButtonVariant.FAB}
      >
        <FavoriteIcon />
      </Button>
    </RowView>
    <RowView>
      <FavoriteIcon size={Size.XSMALL} />
      <MenuIcon size={Size.XSMALL} />
    </RowView>
    <RowView>
      <FavoriteIcon size={Size.SMALL} />
      <MenuIcon size={Size.SMALL} />
    </RowView>
    <RowView>
      <FavoriteIcon />
      <MenuIcon />
    </RowView>
    <RowView>
      <FavoriteIcon size={Size.LARGE} />
      <MenuIcon size={Size.LARGE} />
    </RowView>
    <RowView>
      <FavoriteIcon size={Size.XLARGE} />
      <MenuIcon size={Size.XLARGE} />
    </RowView>
  </ScrollView>
);
