import * as React from 'react';
import { Text, View } from 'react-native';

import createBrowserHistory from 'history/createBrowserHistory';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

const navigator = createBrowserHistory();

const welcomeSignedOutScreen = () => (
  <View>
    <Text>WelcomeSignedOutScreen 123</Text>
  </View>
);

export default () => (
  <Router history={navigator}>
    <Switch>
      <Route exact path="/welcome" component={welcomeSignedOutScreen} />
      <Redirect from="/*" to="/welcome" />
    </Switch>
  </Router>
);
