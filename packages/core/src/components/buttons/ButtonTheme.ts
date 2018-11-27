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
  SubProps,
  SubTheme,
} from '../subcomponents';
import { OptionalTouchableTheme, TouchableTheme } from '../touchable';
import { OptionalTextTheme, TextTheme } from '../typography';
import { OptionalViewTheme, ViewTheme } from '../views';
import { ButtonProps } from './ButtonProps';

export interface ButtonTheme {
  readonly container: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly icon: SizedSubTheme<InteractiveSubTheme<TextTheme<ButtonProps>>>;
  readonly iconContainer: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly leadingIcon: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly leadingIconContainer: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly text: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & TextProps>
  > &
    SizedSubTheme<InteractiveSubTheme<TextTheme<ButtonProps>>>;
  readonly touchable: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & TouchableWithoutFeedbackProps>
  > &
    SizedSubTheme<InteractiveSubTheme<TouchableTheme<ButtonProps>>>;
  readonly trailingIcon: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly trailingIconContainer: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
}

export interface OptionalButtonTheme {
  readonly container?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly icon?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly iconContainer?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly leadingIcon?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly leadingIconContainer?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly text?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & TextProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
    >;
  readonly touchable?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & TouchableWithoutFeedbackProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalTouchableTheme<ButtonProps>>
    >;
  readonly trailingIcon?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly trailingIconContainer?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
}
