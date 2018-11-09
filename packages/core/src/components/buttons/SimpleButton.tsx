import * as React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { cloneElement } from '../../utils';
import { OptionalIconWrapperProps } from '../icons';
// prettier-ignore
import {
  handleAndroidTextTransformation,
} from '../typography/handleAndroidTextTransformation';
import { ButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';
import {
  getButtonContainerProps,
  getButtonIconContainerProps,
  getButtonIconProps,
  getButtonLeadingIconContainerProps,
  getButtonLeadingIconProps,
  getButtonTextProps,
  getButtonTrailingIconContainerProps,
  getButtonTrailingIconProps,
} from './theming';

const extractTouchableProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
    componentsTheme,
    fullWidth,
    getSubProps,
    interactivityState,
    leadingIcon,
    paletteTheme,
    trailingIcon,
    size,
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

  if (
    props.variant === ButtonVariant.FAB ||
    props.variant === ButtonVariant.ICON
  ) {
    return handleIcon(props);
  }

  return children;
};

const transformStringChildrenIntoComponent = (
  children: string,
  props: ButtonProps,
): JSX.Element => {
  const textProps = getButtonTextProps(props);
  const { Text } = props.componentsTheme.button[props.variant].subComponents;

  return (
    <Text componentProps={props} {...textProps}>
      {handleAndroidTextTransformation(children, textProps.style)}
    </Text>
  );
};

const handleIcon = (props: ButtonProps): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;
  const { IconContainer } = buttonTheme[props.variant].subComponents;
  const containerProps = getButtonIconContainerProps(props);
  const iconProps = {
    noContainer: true,
    ...getButtonIconProps(props),
  };

  const children = props.children as React.ReactElement<
    OptionalIconWrapperProps
  >;
  const styledIcon = children
    ? cloneElement({ element: children, props: iconProps })
    : undefined;

  return (
    <IconContainer componentProps={props} {...containerProps}>
      {styledIcon}
    </IconContainer>
  );
};

const handleLeadingIcon = (props: ButtonProps): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;
  const { LeadingIconContainer } = buttonTheme[props.variant].subComponents;
  const containerProps = getButtonLeadingIconContainerProps(props);
  const iconProps = {
    noContainer: true,
    ...getButtonLeadingIconProps(props),
  };

  const styledIcon = props.leadingIcon
    ? cloneElement({ element: props.leadingIcon, props: iconProps })
    : undefined;

  return (
    <LeadingIconContainer componentProps={props} {...containerProps}>
      {styledIcon}
    </LeadingIconContainer>
  );
};

const handleTrailingIcon = (props: ButtonProps): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;
  const { TrailingIconContainer } = buttonTheme[props.variant].subComponents;
  const containerProps = getButtonTrailingIconContainerProps(props);
  const iconProps = {
    noContainer: true,
    ...getButtonTrailingIconProps(props),
  };

  const styledIcon = props.trailingIcon
    ? cloneElement({ element: props.trailingIcon, props: iconProps })
    : undefined;

  return (
    <TrailingIconContainer componentProps={props} {...containerProps}>
      {styledIcon}
    </TrailingIconContainer>
  );
};

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant } = props;
  const buttonTheme = props.componentsTheme.button;
  const { Container, Touchable } = buttonTheme[variant].subComponents;
  const touchableProps = extractTouchableProps(props);
  const containerProps = getButtonContainerProps(props);

  return (
    <Touchable componentProps={props} {...touchableProps}>
      <Container componentProps={props} {...containerProps}>
        {props.leadingIcon && handleLeadingIcon(props)}
        {children && transformButtonChildren(props)}
        {props.trailingIcon && handleTrailingIcon(props)}
      </Container>
    </Touchable>
  );
};
