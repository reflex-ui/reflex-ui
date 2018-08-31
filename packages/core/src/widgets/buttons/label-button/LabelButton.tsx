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

export interface ILabelButtonStyleAndChildren {
  children?: React.ReactNode;
  styles: ILabelButtonStyle;
}

export interface ILabelButtonProps extends TouchableWithoutFeedbackProps {
  customStyle?: ILabelButtonStyleAndChildren;
  leftIcon?: JSX.Element;
  // onPress: () => any;
  rightIcon?: JSX.Element;
}

export const Button: React.SFC<ILabelButtonProps> = ({
  customStyle = {
    styles: { innerContainer: {}, label: {}, outerContainer: {} },
  },
  leftIcon,
  onPress,
  rightIcon,
  ...buttonProps // tslint:disable-line:trailing-comma
}: ILabelButtonProps): JSX.Element => (
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

Button.displayName = 'LabelButton';
