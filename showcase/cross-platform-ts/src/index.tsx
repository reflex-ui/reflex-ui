/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// app entry point
import { isWeb } from '@reflex-ui/core';
import { AppRegistry } from 'react-native';

import { App } from './App';
import { config } from './config';

if (isWeb) {
  // register the app
  AppRegistry.registerComponent(config.app.name, () => App);
  AppRegistry.runApplication(config.app.name, {
    rootTag: document.getElementById(config.web.root),
  });
}
