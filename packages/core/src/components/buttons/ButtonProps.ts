import {
  InteractivityProps,
  OptionalInteractivityProps,
} from '../../interactivity';
import { MarginProps } from '../../margin';
import { Size } from '../../Size';
import { OptionalThemed, Themed } from '../../theming';
import { ButtonSubPropsGetter } from './ButtonSubPropsGetter';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps extends InteractivityProps, MarginProps, Themed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getSubProps?: ButtonSubPropsGetter;
  leadingIcon?: JSX.Element;
  size: Size;
  trailingIcon?: JSX.Element;
  variant: ButtonVariant;
}

export interface OptionalButtonProps
  extends OptionalInteractivityProps,
    MarginProps,
    OptionalThemed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getSubProps?: ButtonSubPropsGetter;
  leadingIcon?: JSX.Element;
  size?: Size;
  trailingIcon?: JSX.Element;
  variant?: ButtonVariant;
}
