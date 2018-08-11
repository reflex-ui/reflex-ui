import { Navigation } from 'react-native-navigation';

import { WelcomeSignedOutScreen } from '../application/welcome';

const registerScreens = () => {
  Navigation.registerComponent(
    'navigation.24beeps.WelcomeSignedOutScreen',
    () => WelcomeSignedOutScreen,
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
