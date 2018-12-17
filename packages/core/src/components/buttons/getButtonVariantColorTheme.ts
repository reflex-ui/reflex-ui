/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorTheme } from '../../palette';
import { ButtonVariant } from './ButtonVariant';

export const getButtonVariantColorTheme = (
  variant: ButtonVariant,
): ColorTheme =>
  variant === ButtonVariant.FAB || variant === ButtonVariant.XFAB
    ? ColorTheme.SECONDARY_NORMAL
    : ColorTheme.PRIMARY_NORMAL_INVERTED;
