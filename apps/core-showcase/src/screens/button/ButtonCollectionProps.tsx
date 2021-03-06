/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ButtonTheme,
  ButtonVariant,
  ComponentThemeGetter,
  PaletteColor,
  Size,
} from '@reflex-ui/core';

export interface ButtonCollectionProps {
  readonly getPatchTheme?: ComponentThemeGetter<ButtonProps, ButtonTheme>;
  readonly invertColor?: boolean;
  readonly onPress?: () => void;
  readonly paletteColor: PaletteColor;
  readonly showDisabled?: boolean;
  readonly size?: Size;
  readonly variant: ButtonVariant;
}
