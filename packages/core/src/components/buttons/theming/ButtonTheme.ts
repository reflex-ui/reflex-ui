import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import { SubProps } from '../../';
import {
  InteractiveSubTheme,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalSubTheme,
  SizedSubTheme,
  SubTheme,
} from '../../../theming';
import { OptionalTouchableTheme, TouchableTheme } from '../../touchable';
import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';
import { ButtonSubName } from '../ButtonSubName';

export interface ButtonTheme {
  readonly [ButtonSubName.CONTAINER]: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly [ButtonSubName.ICON]: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly [ButtonSubName.LEADING_ICON]: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
  readonly [ButtonSubName.TEXT]: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & TextProps>
  > &
    SizedSubTheme<InteractiveSubTheme<TextTheme<ButtonProps>>>;
  readonly [ButtonSubName.TOUCHABLE]: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & TouchableWithoutFeedbackProps>
  > &
    SizedSubTheme<InteractiveSubTheme<TouchableTheme<ButtonProps>>>;
  readonly [ButtonSubName.TRAILING_ICON]: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]: SubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    SizedSubTheme<InteractiveSubTheme<ViewTheme<ButtonProps>>>;
}

export interface OptionalButtonTheme {
  readonly [ButtonSubName.CONTAINER]?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly [ButtonSubName.ICON]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly [ButtonSubName.LEADING_ICON]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
  readonly [ButtonSubName.TEXT]?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & TextProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
    >;
  readonly [ButtonSubName.TOUCHABLE]?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & TouchableWithoutFeedbackProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalTouchableTheme<ButtonProps>>
    >;
  readonly [ButtonSubName.TRAILING_ICON]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: OptionalSubTheme<
    React.ComponentType<SubProps<ButtonProps> & ViewProps>
  > &
    OptionalSizedSubTheme<
      OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
    >;
}
