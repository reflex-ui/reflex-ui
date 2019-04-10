/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { PaletteColor } from './PaletteColor';

const PaletteColorContext = React.createContext<PaletteColor | undefined>(
  undefined,
);
PaletteColorContext.displayName = 'PaletteColorContext';

export { PaletteColorContext };
