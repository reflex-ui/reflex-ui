import { SpecialButtonProps } from '../../buttons';
import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';

export interface ButtonSubComponentsTheme {
  readonly leftIcon: TextTheme<SpecialButtonProps>;
  readonly leftIconContainer: ViewTheme<SpecialButtonProps>;
  readonly text: TextTheme<SpecialButtonProps>;
  readonly view: ViewTheme<SpecialButtonProps>;
}

export interface OptionalButtonSubComponentsTheme {
  readonly leftIcon?: OptionalTextTheme<SpecialButtonProps>;
  readonly leftIconContainer?: OptionalViewTheme<SpecialButtonProps>;
  readonly text?: OptionalTextTheme<SpecialButtonProps>;
  readonly view?: OptionalViewTheme<SpecialButtonProps>;
}
