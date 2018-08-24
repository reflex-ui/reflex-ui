import * as React from 'react';

import { withAppLogic } from './application/shared';
import NavigationWeb from './navigation/Navigation.web';

const App = withAppLogic(NavigationWeb);
export default () => <App />;
