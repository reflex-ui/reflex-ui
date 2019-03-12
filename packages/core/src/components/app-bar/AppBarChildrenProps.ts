/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps } from 'react-native';

export interface AppBarChildrenProps {
  readonly centerArea?: ViewProps;
  readonly container?: ViewProps;
  readonly leadingArea?: ViewProps;
  readonly trailingArea?: ViewProps;
}
