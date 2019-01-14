/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
} from '@reflex-ui/core';

export interface ButtonCollectionProps {
  readonly colorTheme: ColorTheme;
  readonly getSubProps?: ButtonSubPropsGetter;
  readonly invertColor?: boolean;
  readonly onPress?: () => void;
  readonly title: string;
  readonly variant: ButtonVariant;
}
