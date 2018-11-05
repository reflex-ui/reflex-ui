import { Size } from '../';
import {
  InteractivityProps,
  OptionalInteractivityProps,
} from '../../interactivity';
import { OptionalThemed, Themed } from '../../theming';
import { ButtonSubPropsGetter } from './ButtonSubPropsGetter';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps extends InteractivityProps, Themed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getSubProps?: ButtonSubPropsGetter;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size: Size;
  variant: ButtonVariant;
}

export interface OptionalButtonProps
  extends OptionalInteractivityProps,
    OptionalThemed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getSubProps?: ButtonSubPropsGetter;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: Size;
  variant?: ButtonVariant;
}
