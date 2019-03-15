/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { ListProps } from './ListProps';
import { ListPropsOptionalGetter } from './ListPropsGetter';

export interface ListTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewChildTheme<ListProps>;
  readonly getProps?: ListPropsOptionalGetter<ListProps>;
}
