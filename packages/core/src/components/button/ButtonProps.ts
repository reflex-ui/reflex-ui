/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { TouchableSurfacePropsBase } from '../touchable-surface/TouchableSurfaceProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonPropsBase<Props, Theme>
  extends TouchableSurfacePropsBase<Props, Theme> {
  readonly leadingIcon?: JSX.Element;
  readonly trailingIcon?: JSX.Element;
  readonly variant: ButtonVariant;
}

export type ButtonPropsBaseOptional<Props, Theme> = Partial<
  ButtonPropsBase<Props, Theme>
>;

export interface ButtonProps
  extends ButtonPropsBase<ButtonProps, ButtonTheme> {}

export type ButtonPropsOptional = Partial<ButtonProps>;
