/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { ListItemProps } from './ListItemProps';
import { ListItemPropsOptionalGetter } from './ListItemPropsGetter';

export interface ListItemTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewChildTheme<ListItemProps>;
  readonly getProps?: ListItemPropsOptionalGetter<ListItemProps>;
}
