/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { scrollable } from '@reflex-ui/core';
import * as React from 'react';

import { AppNavigation } from './navigation/Navigation.web';
import { withAppLogic } from './withAppLogic';

scrollable();

const WithAppLogic = withAppLogic(AppNavigation);
export const App = () => <WithAppLogic />;
