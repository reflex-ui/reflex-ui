import { Navigation } from 'react-native-navigation';

import { withAppLogic } from '../application/shared';
import { WelcomeSignedOutScreen } from '../application/welcome';

const registerScreens = () => {
  Navigation.registerComponent(
    'navigation.24beeps.WelcomeSignedOutScreen',
    () => withAppLogic(WelcomeSignedOutScreen),
  );
};

export const AppNavigation = () => {
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
