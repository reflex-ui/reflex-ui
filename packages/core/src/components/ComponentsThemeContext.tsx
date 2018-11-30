/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { ComponentsTheme } from './ComponentsTheme';
import { rawComponentsTheme } from './raw/rawComponentsTheme';

export const ComponentsThemeContext = React.createContext<ComponentsTheme>(
  rawComponentsTheme,
);
