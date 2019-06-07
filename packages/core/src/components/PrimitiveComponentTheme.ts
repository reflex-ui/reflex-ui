/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../utils-ts/Function1';
import { PrimitiveComponentProps } from './PrimitiveComponentProps';
import { StyleGetter } from './StyleGetter';

export interface PrimitiveComponentTheme<
  ComponentProps,
  OutputProps,
  OutputStyle
> {
  readonly getComponent?: Function1<
    ComponentProps,
    | undefined
    | React.ComponentType<PrimitiveComponentProps<ComponentProps> & OutputProps>
  >;
  readonly getProps?: Function1<ComponentProps, OutputProps>;
  readonly getStyle?: StyleGetter<ComponentProps, OutputStyle>;
}
