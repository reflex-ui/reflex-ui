/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';

export type ButtonPropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  ButtonProps
>;

export type ButtonPropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  ButtonPropsOptional
>;
