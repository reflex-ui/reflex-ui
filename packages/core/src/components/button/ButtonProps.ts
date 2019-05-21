/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';

import { InteractionProps } from '../../interaction';
import { SurfacePropsBase } from '../surface/SurfaceProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonPropsBase<Props, Theme>
  extends InteractionProps,
    SurfacePropsBase<Props, Theme>,
    TouchableWithoutFeedbackProps {
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
