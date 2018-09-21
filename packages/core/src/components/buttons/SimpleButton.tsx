import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedbackProps } from 'react-native';

import { InteractivityProps } from '../../interactivity';
import { OptionalThemed, Themed } from '../../styles';
import {
  getRegisteredTextStyle,
  getRegisteredViewStyle,
} from '../../styles/themes/PurpleTealTheme';
import { isAndroid, transformText } from '../../utils';
import { Size } from '../Size';
import { ButtonVariant } from './ButtonVariant';

export interface SpecialButtonProps extends InteractivityProps, Themed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size: Size;
  variant: ButtonVariant;
}

export interface OptionalSpecialButtonProps
  extends InteractivityProps,
    OptionalThemed {
  children?: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: Size;
  variant?: ButtonVariant;
}

export interface ButtonProps
  extends SpecialButtonProps,
    TouchableWithoutFeedbackProps {}

export interface OptionalButtonProps
  extends OptionalSpecialButtonProps,
    TouchableWithoutFeedbackProps {}

const extractSpecialButtonProps = (
  props: SpecialButtonProps,
): SpecialButtonProps => {
  const {
    children,
    colorTheme,
    fullWidth,
    interactivityState,
    leftIcon,
    rightIcon,
    size,
    theme,
    variant,
  } = props;

  return {
    children,
    colorTheme,
    fullWidth,
    interactivityState,
    leftIcon,
    rightIcon,
    size,
    theme,
    variant,
  };
};

const extractTouchableProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
    fullWidth,
    interactivityState,
    leftIcon,
    rightIcon,
    size,
    theme,
    variant,
    ...touchableProps
  } = props;

  return touchableProps;
};

const transformButtonChildren = (
  props: SpecialButtonProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return undefined;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean'
  ) {
    return transformToButtonText(children.toString(), props);
  }

  return children;
};

const transformToButtonText = (
  children: string,
  props: SpecialButtonProps,
): JSX.Element => {
  const textStyle = getRegisteredTextStyle(props);
  let transformedString = children;

  if (isAndroid) {
    transformedString = transformText({
      text: transformedString,
      transformation: StyleSheet.flatten(textStyle.text).textTransform,
    });
  }

  const { Text } = props.theme.components.button[props.variant].subComponents;

  return (
    <Text style={textStyle.text} {...props}>
      {transformedString}
    </Text>
  );
};

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant } = props;
  const buttonTheme = props.theme.components.button;
  const { Touchable, View } = buttonTheme[variant].subComponents;
  const specialProps = extractSpecialButtonProps(props);
  const touchableProps = extractTouchableProps(props);
  const viewStyle = getRegisteredViewStyle(specialProps);

  return (
    <Touchable {...touchableProps}>
      <View style={viewStyle.view} {...specialProps}>
        {children && transformButtonChildren(specialProps)}
      </View>
    </Touchable>
  );
};
