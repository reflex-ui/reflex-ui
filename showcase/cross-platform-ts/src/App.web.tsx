import * as React from 'react';

import { withAppLogic } from './application/shared';
import NavigationWeb from './navigation/Navigation.web';

// export default () => NavigationWeb();
const App = withAppLogic(NavigationWeb);
export default () => <App />;
