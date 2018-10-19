import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedbackProps } from 'react-native';

import { InteractivityProps } from '../../interactivity';
import { isAndroid } from '../../utils';
import { transformText } from '../typography';
import {
  OptionalSpecialButtonProps,
  SpecialButtonProps,
} from './SpecialButtonProps';
import {
  getButtonLeftIconContainerProps,
  getButtonLeftIconProps,
  getButtonTextProps,
  getButtonViewProps,
} from './theming';

export interface ButtonProps extends SpecialButtonProps, InteractivityProps {}

export interface OptionalButtonProps
  extends OptionalSpecialButtonProps,
    InteractivityProps {}

const extractSpecialButtonProps = (
  props: SpecialButtonProps,
): SpecialButtonProps => {
  const {
    children,
    colorTheme,
    fullWidth,
    getLeftIconContainerProps,
    getTextProps,
    getViewProps,
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
    getLeftIconContainerProps,
    getTextProps,
    getViewProps,
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
    getLeftIconContainerProps,
    getTextProps,
    getViewProps,
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
    return transformStringChildrenIntoComponent(children.toString(), props);
  }

  return children;
};

const transformStringChildrenIntoComponent = (
  children: string,
  props: SpecialButtonProps,
): JSX.Element => {
  const textProps = getButtonTextProps(props);
  let transformedString = children;

  if (isAndroid) {
    transformedString = transformText({
      text: transformedString,
      transformation: StyleSheet.flatten(textProps.style).textTransform,
    });
  }

  const { Text } = props.theme.components.button[props.variant].subComponents;

  return (
    <Text {...textProps} {...props}>
      {transformedString}
    </Text>
  );
};

const handleLeftIcon = (props: SpecialButtonProps): JSX.Element | undefined => {
  const buttonTheme = props.theme.components.button;
  const { LeftIconContainer } = buttonTheme[props.variant].subComponents;
  const containerProps = getButtonLeftIconContainerProps(props);
  const iconProps = getButtonLeftIconProps(props);

  let styledIcon;
  if (props.leftIcon) {
    styledIcon = React.cloneElement(props.leftIcon, iconProps);
  }

  return (
    <LeftIconContainer {...containerProps} {...props}>
      {styledIcon}
    </LeftIconContainer>
  );
};

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant } = props;
  const buttonTheme = props.theme.components.button;
  const { Touchable, View } = buttonTheme[variant].subComponents;
  const specialProps = extractSpecialButtonProps(props);
  const touchableProps = extractTouchableProps(props);
  const viewProps = getButtonViewProps(specialProps);

  return (
    <Touchable {...touchableProps}>
      <View {...viewProps} {...specialProps}>
        {specialProps.leftIcon && handleLeftIcon(specialProps)}
        {children && transformButtonChildren(specialProps)}
      </View>
    </Touchable>
  );
};
