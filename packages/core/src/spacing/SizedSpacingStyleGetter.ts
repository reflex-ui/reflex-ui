/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyleGetter } from '../components/view/ViewStyleGetter';
import { SizedSpacing } from './SizedSpacing';

export type SizedSpacingStyleGetter<Props> = (
  sizedSpacing: SizedSpacing,
) => ViewStyleGetter<Props>;
