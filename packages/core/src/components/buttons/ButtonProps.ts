/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityProps } from '../../interactivity';
import { MarginProps } from '../../margin';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { SizeProps } from '../../SizeProps';
import { ButtonProps } from './ButtonProps';
import { ButtonSubPropsGetter } from './ButtonSubPropsGetter';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps
  extends InteractivityProps,
    MarginProps,
    PaletteThemeProps,
    SizeProps {
  readonly children?: React.ReactNode;
  readonly fullWidth?: boolean;
  readonly getSubProps?: ButtonSubPropsGetter;
  readonly leadingIcon?: JSX.Element;
  readonly theme: ButtonTheme;
  readonly trailingIcon?: JSX.Element;
  readonly variant: ButtonVariant;
}

export type OptionalButtonProps = Partial<ButtonProps>;
