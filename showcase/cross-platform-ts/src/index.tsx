// app entry
import { AppRegistry } from 'react-native';
import App from './App';
import config from './config';
import { isWeb } from './infra/platform';

if (isWeb) {
  // register the app
  AppRegistry.registerComponent(config.app.name, () => App);
  AppRegistry.runApplication(config.app.name, {
    rootTag: document.getElementById(config.web.root),
  });
}
