import {
  InteractivityProps,
  OptionalInteractivityProps,
} from '../../interactivity';
import { MarginProps } from '../../margin';
import { OptionalSizeProps, SizeProps } from '../../SizeProps';
import { OptionalThemed, Themed } from '../../theming';
import { ButtonProps } from './ButtonProps';
import { ButtonSubPropsGetter } from './ButtonSubPropsGetter';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps
  extends InteractivityProps,
    MarginProps,
    SizeProps,
    Themed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getSubProps?: ButtonSubPropsGetter;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
  variant: ButtonVariant;
}

export interface OptionalButtonProps
  extends OptionalInteractivityProps,
    MarginProps,
    OptionalSizeProps,
    OptionalThemed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getSubProps?: ButtonSubPropsGetter;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
  variant?: ButtonVariant;
}
