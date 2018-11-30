/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyle } from 'react-native';

const totalElevation: number = 24;
const elevationStyles: { [key: number]: ViewStyle } = {};
let x: number = 0;
while (x < totalElevation) {
  elevationStyles[x] = { elevation: x };
  x += 1;
}

export { elevationStyles };
