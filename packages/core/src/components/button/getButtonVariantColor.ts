/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Palette, PaletteColor } from '../../palette';
import { ButtonVariant } from './ButtonVariant';

export const getButtonVariantColor = (
  variant: ButtonVariant,
  palette: Palette,
): PaletteColor =>
  variant === ButtonVariant.Fab || variant === ButtonVariant.XFab
    ? palette.secondary
    : palette.primary;
