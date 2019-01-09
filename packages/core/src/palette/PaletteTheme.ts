/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractivityPaletteColor,
  OptionalInteractivityPaletteColor,
} from './InteractivityPaletteColor';

export interface PaletteTheme {
  readonly background: InteractivityPaletteColor;
  readonly error: InteractivityPaletteColor;
  readonly primary: InteractivityPaletteColor;
  readonly secondary: InteractivityPaletteColor;
  readonly success: InteractivityPaletteColor;
  readonly surface: InteractivityPaletteColor;
  readonly warning: InteractivityPaletteColor;
}

export type OptionalPaletteTheme = {
  [P in keyof PaletteTheme]?: OptionalInteractivityPaletteColor
};
