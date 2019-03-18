/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { ListItemProps } from './ListItemProps';
import { ListItemPropsOptionalGetter } from './ListItemPropsGetter';

export interface ListItemTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewTheme<ListItemProps>;
  readonly getProps?: ListItemPropsOptionalGetter<ListItemProps>;
}
