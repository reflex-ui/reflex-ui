import { Size, TextPropsGetter, ViewPropsGetter } from '../';
import {
  InteractivityProps,
  OptionalInteractivityProps,
} from '../../interactivity';
import { OptionalThemed, Themed } from '../../theming';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps extends InteractivityProps, Themed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getContainerProps?: ViewPropsGetter<ButtonProps>;
  getFabIconContainerProps?: ViewPropsGetter<ButtonProps>;
  getLeftIconContainerProps?: ViewPropsGetter<ButtonProps>;
  getRightIconContainerProps?: ViewPropsGetter<ButtonProps>;
  getTextProps?: TextPropsGetter<ButtonProps>;
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
  getContainerProps?: ViewPropsGetter<ButtonProps>;
  getFabIconContainerProps?: ViewPropsGetter<ButtonProps>;
  getLeftIconContainerProps?: ViewPropsGetter<ButtonProps>;
  getRightIconContainerProps?: ViewPropsGetter<ButtonProps>;
  getTextProps?: TextPropsGetter<ButtonProps>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: Size;
  variant?: ButtonVariant;
}
