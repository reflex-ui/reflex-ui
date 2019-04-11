/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorGetterInput } from './ColorGetterInput';
import { getColor } from './getColor';

export const getOnColor = (input: ColorGetterInput): string =>
  getColor({ ...input, onColor: true });
