import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';

export interface ButtonSubComponentsTheme {
  readonly container: ViewTheme<ButtonProps>;
  readonly icon: TextTheme<ButtonProps>;
  readonly iconContainer: ViewTheme<ButtonProps>;
  readonly leadingIcon: TextTheme<ButtonProps>;
  readonly leadingIconContainer: ViewTheme<ButtonProps>;
  readonly text: TextTheme<ButtonProps>;
  readonly trailingIcon: TextTheme<ButtonProps>;
  readonly trailingIconContainer: ViewTheme<ButtonProps>;
}

export interface OptionalButtonSubComponentsTheme {
  readonly container?: OptionalViewTheme<ButtonProps>;
  readonly icon?: OptionalTextTheme<ButtonProps>;
  readonly iconContainer?: OptionalViewTheme<ButtonProps>;
  readonly leadingIcon?: OptionalTextTheme<ButtonProps>;
  readonly leadingIconContainer?: OptionalViewTheme<ButtonProps>;
  readonly text?: OptionalTextTheme<ButtonProps>;
  readonly trailingIcon?: OptionalTextTheme<ButtonProps>;
  readonly trailingIconContainer?: OptionalViewTheme<ButtonProps>;
}
