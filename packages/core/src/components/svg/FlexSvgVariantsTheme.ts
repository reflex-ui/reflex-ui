/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FlexSvgTheme, OptionalFlexSvgTheme } from './FlexSvgTheme';

export interface FlexSvgVariantsTheme {
  readonly flexSvg: FlexSvgTheme;
  readonly svgIcon: FlexSvgTheme;
}

export type OptionalFlexSvgVariantsTheme = {
  [P in keyof FlexSvgVariantsTheme]?: OptionalFlexSvgTheme
};
