import {
  InteractivityProps,
  OptionalInteractivityProps,
} from '../../interactivity';
import { MarginProps } from '../../margin';
import { Size } from '../../Size';
import { OptionalThemed, Themed } from '../../theming';
import { SubcomponentPropsGetter } from '../SubcomponentPropsGetter';
import { ButtonProps } from './ButtonProps';
import { ButtonSubProps } from './ButtonSubProps';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps extends InteractivityProps, MarginProps, Themed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  getSubProps?: SubcomponentPropsGetter<ButtonProps, ButtonSubProps>;
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
  getSubProps?: SubcomponentPropsGetter<ButtonProps, ButtonSubProps>;
  leadingIcon?: JSX.Element;
  size?: Size;
  trailingIcon?: JSX.Element;
  variant?: ButtonVariant;
}
