/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SubTheme } from '../subcomponents/SubTheme';

export const getRawSubTheme = <OutputProps, OutputStyle>(): SubTheme<
  {},
  OutputProps,
  OutputStyle
> => ({
  getProps: () => ({} as OutputProps),
  getStyle: () => ({} as OutputStyle),
});
