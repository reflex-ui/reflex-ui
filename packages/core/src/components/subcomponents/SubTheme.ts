/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { StyleGetter } from '../StyleGetter';

export interface SubTheme<ComponentProps, OutputProps, OutputStyle> {
  readonly getProps: PropsGetter<ComponentProps, OutputProps>;
  readonly getStyle: StyleGetter<ComponentProps, OutputStyle>;
}

export type SubThemeOptional<
  ComponentProps,
  OutputProps,
  OutputStyle
> = Partial<SubTheme<ComponentProps, OutputProps, OutputStyle>>;
