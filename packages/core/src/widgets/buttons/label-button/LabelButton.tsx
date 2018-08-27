import * as React from 'react';
import {
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';

export interface ILabelButtonStyle {
  innerContainer: ViewStyle;
  label: TextStyle;
  outerContainer: ViewStyle;
}

export interface ILabelButtonProps extends TouchableWithoutFeedbackProps {
  children?: React.ReactNode;
  customStyle?: ILabelButtonStyle;
  leftIcon?: JSX.Element;
  onPress: () => any;
  rightIcon?: JSX.Element;
}

const Button: React.SFC<ILabelButtonProps> = ({
  children,
  customStyle = { innerContainer: {}, label: {}, outerContainer: {} },
  leftIcon,
  onPress,
  rightIcon,
  ...buttonProps // tslint:disable-line:trailing-comma
}: ILabelButtonProps): JSX.Element => (
  <View style={customStyle.outerContainer}>
    <TouchableWithoutFeedback {...buttonProps}>
      <View style={customStyle.innerContainer}>
        {leftIcon}
        {children && <Text style={customStyle.label}>{children}</Text>}
        {rightIcon}
      </View>
    </TouchableWithoutFeedback>
  </View>
);

Button.displayName = 'LabelButton';

export default Button;
