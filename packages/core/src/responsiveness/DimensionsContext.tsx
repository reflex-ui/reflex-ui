/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Dimensions } from 'react-native';

import { defaultBreakpoints } from './defaultBreakpoints';
import { DimensionsProps } from './DimensionsProps';

export const DimensionsContext = React.createContext<DimensionsProps>({
  breakpoints: defaultBreakpoints,
  dimensions: {
    screen: Dimensions.get('screen'),
    window: Dimensions.get('window'),
  },
});
