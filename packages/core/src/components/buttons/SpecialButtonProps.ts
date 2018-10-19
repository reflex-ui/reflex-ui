import { Size, TextPropsGetter, ViewPropsGetter } from '../';
import { InteractivityStateProps } from '../../interactivity';
import { OptionalThemed, Themed } from '../../theming';
import { ButtonVariant } from './ButtonVariant';

export interface SpecialButtonProps extends InteractivityStateProps, Themed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getLeftIconContainerProps?: ViewPropsGetter<SpecialButtonProps>;
  getTextProps?: TextPropsGetter<SpecialButtonProps>;
  getViewProps?: ViewPropsGetter<SpecialButtonProps>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size: Size;
  variant: ButtonVariant;
}

export interface OptionalSpecialButtonProps
  extends InteractivityStateProps,
    OptionalThemed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getLeftIconContainerProps?: ViewPropsGetter<SpecialButtonProps>;
  getTextProps?: TextPropsGetter<SpecialButtonProps>;
  getViewProps?: ViewPropsGetter<SpecialButtonProps>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: Size;
  variant?: ButtonVariant;
}
