// app entry
import { Platform, AppRegistry } from "react-native";
import { isWeb } from "./infra/platform";
import Config from "./commons/Config";
import App from "./App";

if (isWeb) {
  // register the app
  AppRegistry.registerComponent(Config.app.name, () => App);
  AppRegistry.runApplication(Config.app.name, {
    rootTag: document.getElementById(Config.web.root)
  });
}
