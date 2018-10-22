import * as React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

// prettier-ignore
import {
  handleAndroidTextTransformation,
} from '../typography/handleAndroidTextTransformation';
import { ButtonProps } from './ButtonProps';
import {
  getButtonContainerProps,
  getButtonLeftIconContainerProps,
  getButtonLeftIconProps,
  getButtonTextProps,
} from './theming';

const extractTouchableProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
    fullWidth,
    getContainerProps,
    getLeftIconContainerProps,
    getTextProps,
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

const transformButtonChildren = (props: ButtonProps): React.ReactNode => {
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
  props: ButtonProps,
): JSX.Element => {
  const textProps = getButtonTextProps(props);
  const { Text } = props.theme.components.button[props.variant].subComponents;

  return (
    <Text componentProps={props} {...textProps}>
      {handleAndroidTextTransformation(children, textProps.style)}
    </Text>
  );
};

const handleLeftIcon = (props: ButtonProps): JSX.Element | undefined => {
  const buttonTheme = props.theme.components.button;
  const { LeftIconContainer } = buttonTheme[props.variant].subComponents;
  const containerProps = getButtonLeftIconContainerProps(props);
  const iconProps = getButtonLeftIconProps(props);

  let styledIcon;
  if (props.leftIcon) {
    styledIcon = React.cloneElement(props.leftIcon, iconProps);
  }

  return (
    <LeftIconContainer componentProps={props} {...containerProps}>
      {styledIcon}
    </LeftIconContainer>
  );
};

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant } = props;
  const buttonTheme = props.theme.components.button;
  const { Container, Touchable } = buttonTheme[variant].subComponents;
  const touchableProps = extractTouchableProps(props);
  const containerProps = getButtonContainerProps(props);

  return (
    <Touchable componentProps={props} {...touchableProps}>
      <Container componentProps={props} {...containerProps}>
        {props.leftIcon && handleLeftIcon(props)}
        {children && transformButtonChildren(props)}
      </Container>
    </Touchable>
  );
};
