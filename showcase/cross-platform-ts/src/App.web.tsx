import '@reflex-ui/material-design/src/icons/Font';
import * as React from 'react';

import { AppNavigation } from './navigation/Navigation.web';
import { withAppLogic } from './withAppLogic';

const WithAppLogic = withAppLogic(AppNavigation);
export const App = () => <WithAppLogic />;
