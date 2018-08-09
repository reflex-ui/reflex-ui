import * as React from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

const welcomeSignedOutScreen = () => (
  <View style={{ backgroundColor: 'white' }}>
    <Text>WelcomeSignedOutScreen YEP! 123</Text>
  </View>
);

const registerScreens = () => {
  Navigation.registerComponent(
    'navigation.24beeps.WelcomeSignedOutScreen',
    () => welcomeSignedOutScreen,
  );
};

export default () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'navigation.24beeps.WelcomeSignedOutScreen',
        },
      },
    });
  });
};
