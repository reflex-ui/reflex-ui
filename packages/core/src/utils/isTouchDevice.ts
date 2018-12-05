/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isAndroid } from './isAndroid';
import { isIOS } from './isIOS';

// TODO: implement a proper validation.

export const isTouchDevice = isAndroid || isIOS;
