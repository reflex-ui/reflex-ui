/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps } from 'react-native';

import { SuperViewProps } from './SuperViewProps';

export interface SuperViewSubProps {
  readonly container?: ViewProps;
  readonly props?: SuperViewProps;
}
