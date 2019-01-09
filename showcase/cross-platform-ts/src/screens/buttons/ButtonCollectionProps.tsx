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
  MarginProps,
} from '@reflex-ui/core';

export interface ButtonCollectionProps extends MarginProps {
  colorTheme: ColorTheme;
  getSubProps?: ButtonSubPropsGetter;
  onPress?: () => void;
  title: string;
  variant: ButtonVariant;
}
