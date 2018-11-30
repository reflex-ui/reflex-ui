/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveTheme } from '../PrimitiveTheme';

export const getRawPrimitiveTheme = <PrimitiveProps>(): PrimitiveTheme<
  {},
  PrimitiveProps
> => ({
  getProps: () => ({} as PrimitiveProps),
  props: {} as PrimitiveProps,
});
