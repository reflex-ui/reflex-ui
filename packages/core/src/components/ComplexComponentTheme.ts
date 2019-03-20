/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../utils-ts/Function1';
import { BuiltInSimpleComponentTheme } from './SimpleComponentTheme';

export interface ComplexComponentTheme {
  // It's fine to ignore type safety here.
  [key: string]:  // tslint:disable-next-line:no-any
    | BuiltInSimpleComponentTheme<any, any, any>
    // tslint:disable-next-line:no-any
    | Function1<any, any>
    // tslint:disable-next-line:no-any
    | Function1<any, any>
    | undefined;
}
