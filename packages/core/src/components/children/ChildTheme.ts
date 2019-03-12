/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { StyleGetter } from '../StyleGetter';
import { BuiltInChildProps } from './BuiltInChildProps';

export interface ChildTheme<ComponentProps, OutputProps, OutputStyle> {
  readonly getProps?: PropsGetter<ComponentProps, OutputProps>;
  readonly getStyle?: StyleGetter<ComponentProps, OutputStyle>;
}

export interface BuiltInChildTheme<ComponentProps, OutputProps, OutputStyle>
  extends ChildTheme<ComponentProps, OutputProps, OutputStyle> {
  readonly component?: React.ComponentType<
    BuiltInChildProps<ComponentProps> & OutputProps
  >;
}
