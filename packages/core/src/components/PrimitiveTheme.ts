/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitivePropsGetter } from './PrimitivePropsGetter';

export interface PrimitiveTheme<ComponentProps, PrimitiveProps> {
  readonly getProps: PrimitivePropsGetter<ComponentProps, PrimitiveProps>;
  readonly props: PrimitiveProps;
}

export type OptionalPrimitiveTheme<ComponentProps, PrimitiveProps> = Partial<
  PrimitiveTheme<ComponentProps, PrimitiveProps>
>;
