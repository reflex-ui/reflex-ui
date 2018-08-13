import * as React from 'react';
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

export interface ILabelButtonStyle {
  button: ViewStyle;
  container: ViewStyle;
  label: TextStyle;
}

export interface ILabelButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  customStyle?: ILabelButtonStyle;
  leftIcon?: JSX.Element;
  onPress: () => any;
  rightIcon?: JSX.Element;
}

const Button: React.SFC<ILabelButtonProps> = ({
  children,
  customStyle = { button: {}, container: {}, label: {} },
  leftIcon,
  onPress,
  rightIcon,
  ...buttonProps // tslint:disable-line:trailing-comma
}: ILabelButtonProps): JSX.Element => (
  <View style={customStyle.container}>
    <TouchableOpacity
      onPress={onPress}
      style={customStyle.button}
      {...buttonProps}
    >
      {leftIcon}
      {children && <Text style={customStyle.label}>{children}</Text>}
      {rightIcon}
    </TouchableOpacity>
  </View>
);

Button.displayName = 'LabelButton';

export default Button;
