/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
