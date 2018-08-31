import * as React from 'react';
import {
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';

export interface ButtonStyle {
  innerContainer: ViewStyle;
  label: TextStyle;
  outerContainer: ViewStyle;
}

export interface ButtonStyleAndChildren {
  children?: React.ReactNode;
  styles: ButtonStyle;
}

export interface ButtonProps extends TouchableWithoutFeedbackProps {
  customStyle?: ButtonStyleAndChildren;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export const Button: React.SFC<ButtonProps> = ({
  customStyle = {
    styles: { innerContainer: {}, label: {}, outerContainer: {} },
  },
  leftIcon,
  onPress,
  rightIcon,
  ...buttonProps // tslint:disable-line:trailing-comma
}: ButtonProps): JSX.Element => (
  <View style={customStyle.styles.outerContainer}>
    <TouchableWithoutFeedback {...buttonProps}>
      <View style={customStyle.styles.innerContainer}>
        {leftIcon}
        {customStyle.children && (
          <Text style={customStyle.styles.label}>{customStyle.children}</Text>
        )}
        {rightIcon}
      </View>
    </TouchableWithoutFeedback>
  </View>
);

Button.displayName = 'Button';
