import * as React from 'react';
import 'react-platform-material-design/src/components/icons/Font';

import { withAppLogic } from './application/shared';
import { AppNavigation } from './navigation/Navigation.web';

const WithAppLogic = withAppLogic(AppNavigation);
export const App = () => <WithAppLogic />;
