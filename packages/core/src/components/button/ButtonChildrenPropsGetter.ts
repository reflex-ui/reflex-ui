/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonChildrenProps } from './ButtonChildrenProps';
import { ButtonProps } from './ButtonProps';

export type ButtonChildrenPropsGetter = (
  props: ButtonProps,
) => ButtonChildrenProps;
