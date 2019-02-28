/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getThemedColor } from './getThemedColor';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedOnColor: ThemedColorGetter = input =>
  getThemedColor({ ...input, onColor: true });
