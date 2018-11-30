/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyleGetter } from '../components/views';
import { MarginProps } from './MarginProps';
import { SizedMarginStyle } from './SizedMarginStyle';

export type SizedMarginStyleGetter = (
  style: SizedMarginStyle,
) => ViewStyleGetter<MarginProps>;
