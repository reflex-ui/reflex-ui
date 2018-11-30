/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as android from './elevationStyles.android';
import * as ios from './elevationStyles.ios';
import * as web from './elevationStyles.web';

declare var _test: typeof android;
declare var _test: typeof ios;
declare var _test: typeof web;

export * from './elevationStyles.android';
