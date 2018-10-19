import {
  Button,
  ButtonVariant,
  FavoriteIcon,
  // InteractivityType,
  RowView,
  // Size,
  // SpecialButtonProps,
} from '@reflex-ui/core';
import * as React from 'react';
import { ScrollView, Text } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('WelcomeSignedOutScreen().onButtonPress()');
};
/*
const getViewProps = (props: SpecialButtonProps) => ({
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
const getTextProps = (props: SpecialButtonProps) => ({
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
    <Text>WelcomeSignedOutScreen 1234567</Text>
    <RowView>
      <Button
        // getTextProps={getTextProps}
        // getViewProps={getViewProps}
        onPress={onButtonPress}
        variant={ButtonVariant.DEFAULT}
      >
        Sign In
      </Button>
      <Button
        leftIcon={<FavoriteIcon />}
        onPress={onButtonPress}
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
    </RowView>
    <RowView>
      <Button
        // getTextProps={getTextProps}
        // getViewProps={getViewProps}
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
    </RowView>
    <RowView>
      <Text>Lorem</Text>
    </RowView>
  </ScrollView>
);

/*
export const WelcomeSignedOutScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Text>WelcomeSignedOutScreen 1234567</Text>
    <RowView>
      <LabelButton onPress={onButtonPress} size={Size.XSMALL}>
        Sign In
      </LabelButton>
      <LabelButton
        disabled
        onPress={onButtonPress}
        size={Size.XSMALL}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XSMALL}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XSMALL}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.XSMALL}>
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XSMALL}
        variant={LabelButtonVariant.OUTLINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XSMALL}
        variant={LabelButtonVariant.CONTAINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XSMALL}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Ok
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.SMALL}>
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.SMALL}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.SMALL}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.SMALL}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.SMALL}>
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.SMALL}
        variant={LabelButtonVariant.OUTLINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.SMALL}
        variant={LabelButtonVariant.CONTAINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.SMALL}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Ok
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null}>Sign In</LabelButton>
      <LabelButton
        onPress={onButtonPress}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null}>Ok</LabelButton>
      <LabelButton
        onPress={onButtonPress}
        variant={LabelButtonVariant.OUTLINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        variant={LabelButtonVariant.CONTAINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Ok
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.LARGE}>
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.LARGE}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.LARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.LARGE}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.LARGE}>
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.LARGE}
        variant={LabelButtonVariant.OUTLINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.LARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.LARGE}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Ok
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.XLARGE}>
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.XLARGE}>
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={LabelButtonVariant.OUTLINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Ok
      </LabelButton>
      <LabelButton
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Ok
      </LabelButton>
    </RowView>
    <View>
      <LabelButton
        fullWidth
        onPress={onButtonPress}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign Out
      </LabelButton>
    </View>
    <RowView>
      <LabelButton
        fullWidth
        onPress={onButtonPress}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign Out
      </LabelButton>
    </RowView>
  </ScrollView>
);
*/
