import { InteractivityProps } from '../../interactivity';
import { MarginProps } from '../../margin';
import { SizeProps } from '../../SizeProps';
import { Themed } from '../../theming';
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

export type OptionalButtonProps = Partial<ButtonProps>;
