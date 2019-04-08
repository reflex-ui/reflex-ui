/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorArrangement, PaletteTheme } from '../../palette';
import { ButtonVariant } from './ButtonVariant';

export const getButtonVariantColor = (
  variant: ButtonVariant,
  paletteTheme: PaletteTheme,
): PaletteColorArrangement =>
  variant === ButtonVariant.Fab || variant === ButtonVariant.XFab
    ? paletteTheme.secondary.normal
    : paletteTheme.primary.normal;
