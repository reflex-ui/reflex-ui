import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';

export interface ButtonSubComponentsTheme {
  readonly container: ViewTheme<ButtonProps>;
  readonly fabIcon: TextTheme<ButtonProps>;
  readonly fabIconContainer: ViewTheme<ButtonProps>;
  readonly leftIcon: TextTheme<ButtonProps>;
  readonly leftIconContainer: ViewTheme<ButtonProps>;
  readonly rightIcon: TextTheme<ButtonProps>;
  readonly rightIconContainer: ViewTheme<ButtonProps>;
  readonly text: TextTheme<ButtonProps>;
}

export interface OptionalButtonSubComponentsTheme {
  readonly container?: OptionalViewTheme<ButtonProps>;
  readonly fabIcon?: OptionalTextTheme<ButtonProps>;
  readonly fabIconContainer?: OptionalViewTheme<ButtonProps>;
  readonly leftIcon?: OptionalTextTheme<ButtonProps>;
  readonly leftIconContainer?: OptionalViewTheme<ButtonProps>;
  readonly rightIcon?: OptionalTextTheme<ButtonProps>;
  readonly rightIconContainer?: OptionalViewTheme<ButtonProps>;
  readonly text?: OptionalTextTheme<ButtonProps>;
}
