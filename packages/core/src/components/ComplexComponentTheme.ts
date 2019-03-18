/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeGetter } from './ComponentThemeGetter';
import { PropsGetter } from './PropsGetter';
import { BuiltInSimpleComponentTheme } from './SimpleComponentTheme';

export interface ComplexComponentTheme {
  // It's fine to ignore type safety here.
  [key: string]:  // tslint:disable-next-line:no-any
    | BuiltInSimpleComponentTheme<any, any, any>
    // tslint:disable-next-line:no-any
    | ComponentThemeGetter<any, any>
    // tslint:disable-next-line:no-any
    | PropsGetter<any, any>
    | undefined;
}
