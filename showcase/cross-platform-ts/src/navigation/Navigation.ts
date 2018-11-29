import { Navigation } from 'react-native-navigation';

import { DefaultButtonScreen } from '../screens';
import { withAppLogic } from '../withAppLogic';

const registerScreens = () => {
  Navigation.registerComponent(
    'navigation.showcase.buttons.DefaultButtonScreen',
    () => withAppLogic(DefaultButtonScreen),
  );
};

export const AppNavigation = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'navigation.showcase.buttons.DefaultButtonScreen',
        },
      },
    });
  });
};
