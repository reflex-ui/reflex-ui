/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonChildrenPropsGetter,
  ButtonVariant,
  ColorTheme,
  Size,
} from '@reflex-ui/core';

export interface ButtonCollectionProps {
  readonly colorTheme: ColorTheme;
  readonly getChildrenProps?: ButtonChildrenPropsGetter;
  readonly invertColor?: boolean;
  readonly onPress?: () => void;
  readonly showDisabled?: boolean;
  readonly size?: Size;
  readonly variant: ButtonVariant;
}
