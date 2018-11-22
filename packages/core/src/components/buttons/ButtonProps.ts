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
  readonly children?: React.ReactNode;
  readonly fullWidth?: boolean;
  readonly getSubProps?: ButtonSubPropsGetter;
  readonly leadingIcon?: JSX.Element;
  readonly trailingIcon?: JSX.Element;
  readonly variant: ButtonVariant;
}

export interface OptionalButtonProps
  extends OptionalInteractivityProps,
    MarginProps,
    OptionalSizeProps,
    OptionalThemed {
  readonly children?: React.ReactNode;
  readonly fullWidth?: boolean;
  readonly getSubProps?: ButtonSubPropsGetter;
  readonly leadingIcon?: JSX.Element;
  readonly trailingIcon?: JSX.Element;
  readonly variant?: ButtonVariant;
}
