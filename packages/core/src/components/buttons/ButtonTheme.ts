import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import {
  InteractiveSubTheme,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalSubTheme,
  SizedSubTheme,
  SubTheme,
} from '../subcomponents';
import { OptionalTouchableTheme, TouchableTheme } from '../touchable';
import { OptionalTextTheme, TextTheme } from '../typography';
import { OptionalViewTheme, ViewTheme } from '../views';
import { ButtonProps } from './ButtonProps';

export interface ButtonTheme {
  readonly container: SubTheme<ButtonProps, ViewProps> &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly icon: SizedSubTheme<InteractiveSubTheme<TextTheme<ButtonProps>>>;
  readonly iconContainer: SubTheme<ButtonProps, ViewProps> &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly leadingIcon: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly leadingIconContainer: SubTheme<ButtonProps, ViewProps> &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly text: SubTheme<ButtonProps, TextProps> &
    SizedSubTheme<InteractiveSubTheme<TextTheme<ButtonProps>>>;
  readonly touchable: SubTheme<ButtonProps, TouchableWithoutFeedbackProps> &
    SizedSubTheme<InteractiveSubTheme<TouchableTheme<ButtonProps>>>;
  readonly trailingIcon: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly trailingIconContainer: SubTheme<ButtonProps, ViewProps> &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
}

export interface OptionalButtonTheme {
  readonly container?: OptionalSubTheme<ButtonProps, ViewProps> &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly icon?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly iconContainer?: OptionalSubTheme<ButtonProps, ViewProps> &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly leadingIcon?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly leadingIconContainer?: OptionalSubTheme<ButtonProps, ViewProps> &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly text?: OptionalSubTheme<ButtonProps, TextProps> &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
    >;
  readonly touchable?: OptionalSubTheme<
    ButtonProps,
    TouchableWithoutFeedbackProps
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalTouchableTheme<ButtonProps>>
    >;
  readonly trailingIcon?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly trailingIconContainer?: OptionalSubTheme<ButtonProps, ViewProps> &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
}
