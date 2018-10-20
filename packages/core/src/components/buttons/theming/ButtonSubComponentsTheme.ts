import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';

export interface ButtonSubComponentsTheme {
  readonly leftIcon: TextTheme<ButtonProps>;
  readonly leftIconContainer: ViewTheme<ButtonProps>;
  readonly text: TextTheme<ButtonProps>;
  readonly view: ViewTheme<ButtonProps>;
}

export interface OptionalButtonSubComponentsTheme {
  readonly leftIcon?: OptionalTextTheme<ButtonProps>;
  readonly leftIconContainer?: OptionalViewTheme<ButtonProps>;
  readonly text?: OptionalTextTheme<ButtonProps>;
  readonly view?: OptionalViewTheme<ButtonProps>;
}
