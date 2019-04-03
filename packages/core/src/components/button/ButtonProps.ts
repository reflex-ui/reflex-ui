/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionProps } from '../../interaction';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { SurfacePropsBase } from '../surface/SurfaceProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps
  extends ComponentChildrenProps<ButtonProps>,
    ComponentThemeProps<ButtonProps, ButtonTheme>,
    InteractionProps,
    SurfacePropsBase {
  readonly leadingIcon?: JSX.Element;
  readonly trailingIcon?: JSX.Element;
  readonly variant: ButtonVariant;
}

export type ButtonPropsOptional = Partial<ButtonProps>;
