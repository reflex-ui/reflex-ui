/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
// tslint:disable-next-line:max-line-length
import { TouchableSurfacePropsBase } from '../touchable-surface/TouchableSurfaceProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonPropsBase extends TouchableSurfacePropsBase {
  readonly leadingIcon?: JSX.Element;
  readonly trailingIcon?: JSX.Element;
  readonly variant: ButtonVariant;
}

export type ButtonPropsBaseOptional = Partial<ButtonPropsBase>;

export interface ButtonProps
  extends ComponentChildrenProps<ButtonProps>,
    ComponentThemeProps<ButtonProps, ButtonTheme>,
    ButtonPropsBase {}

export type ButtonPropsOptional = Partial<ButtonProps>;
