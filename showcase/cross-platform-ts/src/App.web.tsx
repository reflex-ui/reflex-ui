import '@reflex-ui/material-design/src/icons/Font';
import * as React from 'react';

import { withAppLogic } from './application/shared';
import { AppNavigation } from './navigation/Navigation.web';

const WithAppLogic = withAppLogic(AppNavigation);
export const App = () => <WithAppLogic />;
