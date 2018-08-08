import * as React from 'react';
import { View, Text } from 'react-native';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const navigator = createHistory();

const WelcomeSignedOutScreen = () => (
  <View>
    <Text>WelcomeSignedOutScreen</Text>
  </View>
);

export default (): React.ReactElement<{}> => (
  <Router history={navigator}>
    <Switch>
      <Route exact path="/welcome" component={WelcomeSignedOutScreen} />
      <Redirect from="/*" to="/welcome" />
    </Switch>
  </Router>
);
