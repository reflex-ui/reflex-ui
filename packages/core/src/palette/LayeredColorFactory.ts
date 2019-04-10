/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from './LayeredColor';
import { LayeredColorFactoryInput } from './LayeredColorFactoryInput';

export type LayeredColorFactory = (
  config: LayeredColorFactoryInput,
) => LayeredColor;
