// app entry
import { AppRegistry } from 'react-native';
import { isWeb } from 'react-platform-material-design';

import { App } from './App';
import { config } from './config';

if (isWeb) {
  // register the app
  AppRegistry.registerComponent(config.app.name, () => App);
  AppRegistry.runApplication(config.app.name, {
    rootTag: document.getElementById(config.web.root),
  });
}
