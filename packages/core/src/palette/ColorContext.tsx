/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { PaletteColorArrangement } from './PaletteColorArrangement';

const ColorContext = React.createContext<PaletteColorArrangement | undefined>(
  undefined,
);
ColorContext.displayName = 'ColorContext';

export { ColorContext };
