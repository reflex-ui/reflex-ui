/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { defaultPaletteTheme } from './defaultPaletteTheme';
import { PaletteTheme } from './PaletteTheme';

export const PaletteThemeContext = React.createContext<PaletteTheme>(
  defaultPaletteTheme,
);
