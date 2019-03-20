/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../utils-ts/Function1';
import { BuiltInSimpleComponentProps } from './BuiltInSimpleComponentProps';
import { StyleGetter } from './StyleGetter';

export interface SimpleComponentTheme<
  ComponentProps,
  OutputProps,
  OutputStyle
> {
  readonly getProps?: Function1<ComponentProps, OutputProps>;
  readonly getStyle?: StyleGetter<ComponentProps, OutputStyle>;
}

export interface BuiltInSimpleComponentTheme<
  ComponentProps,
  OutputProps,
  OutputStyle
> extends SimpleComponentTheme<ComponentProps, OutputProps, OutputStyle> {
  readonly component?: React.ComponentType<
    BuiltInSimpleComponentProps<ComponentProps> & OutputProps
  >;
}
