import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import {
  LabelButton,
  LabelButtonVariant,
  RowView,
  // Size,
} from 'react-platform-material-design';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('WelcomeSignedOutScreen().onButtonPress()');
};

export const WelcomeSignedOutScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Text>WelcomeSignedOutScreen 1234567</Text>
    <RowView>
      <LabelButton
        onPress={onButtonPress}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
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
