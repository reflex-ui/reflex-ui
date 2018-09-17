/*
import * as React from 'react';
import {
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface ButtonStyle {
  view: ViewStyle;
  label: TextStyle;
  outerContainer: ViewStyle;
}

export interface ButtonStyleAndChildren {
  children?: React.ReactNode;
  styles: ButtonStyle;
}

export interface ButtonProps extends TouchableWithoutFeedbackProps {
  ChildrenContainer?: React.ComponentType<{}>;
  customStyle?: ButtonStyleAndChildren;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const DefaultChildrenContainer: React.SFC<ViewProps> = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultChildrenContainer');
  // return <React.Fragment>{children}</React.Fragment>;
  return (
    <View>
      <Text>HELLOOOO</Text>
    </View>
  );
};

export const Button: React.SFC<ButtonProps> = ({
  ChildrenContainer = DefaultChildrenContainer,
  customStyle = {
    styles: { view: {}, label: {}, outerContainer: {} },
  },
  leftIcon,
  onPress,
  rightIcon,
  ...buttonProps // tslint:disable-line:trailing-comma
}: ButtonProps): JSX.Element => (
  <View style={customStyle.styles.outerContainer}>
    <TouchableWithoutFeedback {...buttonProps}>
      <View style={customStyle.styles.view}>
        <ChildrenContainer>
          {leftIcon}
          {customStyle.children && (
            <Text style={customStyle.styles.label}>{customStyle.children}</Text>
          )}
          {rightIcon}
        </ChildrenContainer>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

Button.displayName = 'Button';
*/
