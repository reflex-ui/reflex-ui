import * as React from 'react';
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

// export type IGetTextStyle = (props: ILabelButtonProps) => TextStyle;
// export type IGetViewStyle = (props: ILabelButtonProps) => ViewStyle;

export interface ILabelButtonStyle {
  button: ViewStyle;
  container: ViewStyle;
  label: TextStyle;
}

// export type IGetLabelButtonStyle = (props: ILabelButtonProps) => ILabelButtonStyle;

// const emptyGetTextStyle: IGetLabelButtonStyle = (): ILabelButtonStyle => ({ label: {} });

export interface ILabelButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  customStyle?: ILabelButtonStyle;
  leftIcon?: JSX.Element;
  onPress: () => any;
  rightIcon?: JSX.Element;
}

const button: React.SFC<ILabelButtonProps> = ({
  children,
  customStyle = { button: {}, container: {}, label: {} },
  leftIcon,
  onPress,
  rightIcon,
  ...buttonProps // tslint:disable-line:trailing-comma
}: ILabelButtonProps): JSX.Element => (
  <View style={customStyle.container}>
    <TouchableOpacity onPress={onPress} style={customStyle.button} {...buttonProps}>
      {leftIcon}
      {children && <Text style={customStyle.label}>{children}</Text>}
      {rightIcon}
    </TouchableOpacity>
  </View>
);

button.displayName = 'LabelButton';

export default button;
