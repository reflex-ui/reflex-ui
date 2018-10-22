import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';

export interface ButtonSubComponentsTheme {
  readonly container: ViewTheme<ButtonProps>;
  readonly leftIcon: TextTheme<ButtonProps>;
  readonly leftIconContainer: ViewTheme<ButtonProps>;
  readonly text: TextTheme<ButtonProps>;
}

export interface OptionalButtonSubComponentsTheme {
  readonly container?: OptionalViewTheme<ButtonProps>;
  readonly leftIcon?: OptionalTextTheme<ButtonProps>;
  readonly leftIconContainer?: OptionalViewTheme<ButtonProps>;
  readonly text?: OptionalTextTheme<ButtonProps>;
}
