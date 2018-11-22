import * as React from 'react';
import {
  TextProps,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {
  getInteractiveSubProps,
  InteractivityStateTheme,
  PrimitiveTheme,
  SizedSubcomponentTheme,
} from '../../theming';
import { cloneElement } from '../../utils';
import { OptionalIconWrapperProps } from '../icons';
import { ReflexSubcomponent } from '../ReflexSubcomponent';
// prettier-ignore
import {
  handleAndroidTextTransformation,
} from '../typography/handleAndroidTextTransformation';
import { ButtonProps } from './ButtonProps';
import { ButtonSubName } from './ButtonSubName';
import { ButtonSubProps } from './ButtonSubProps';
import { ButtonVariant } from './ButtonVariant';

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

const transformButtonChildren = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return undefined;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean'
  ) {
    return transformStringChildrenIntoComponent(
      children.toString(),
      props,
      userSubProps,
    );
  }

  if (
    props.variant === ButtonVariant.FAB ||
    props.variant === ButtonVariant.ICON
  ) {
    const buttonTheme = props.componentsTheme.button;
    return handleButtonIcon({
      Container: buttonTheme[props.variant].subComponents.iconContainer,
      containerName: ButtonSubName.ICON_CONTAINER,
      icon: children as React.ReactElement<OptionalIconWrapperProps>,
      iconName: ButtonSubName.ICON,
      props,
      userContainerProps: userSubProps.iconContainer,
      userIconProps: userSubProps.icon,
    });
  }

  return children;
};

const transformStringChildrenIntoComponent = (
  children: string,
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element => {
  const buttonTheme = props.componentsTheme.button;
  const { text: Text } = buttonTheme[props.variant].subComponents;
  const textProps = getButtonSubProps<TextProps, TextStyle>({
    props,
    subName: ButtonSubName.TEXT,
    userProps: userSubProps.text,
  });

  return (
    <Text componentProps={props} {...textProps}>
      {handleAndroidTextTransformation(children, textProps.style)}
    </Text>
  );
};

export interface HandleButtonIconData {
  Container: React.ComponentType<ReflexSubcomponent<ButtonProps> & ViewProps>;
  containerName: ButtonSubName;
  icon: React.ReactElement<OptionalIconWrapperProps>;
  iconName: ButtonSubName;
  props: ButtonProps;
  userContainerProps?: ViewProps;
  userIconProps?: TextProps;
}

const handleButtonIcon = (
  data: HandleButtonIconData,
): JSX.Element | undefined => {
  const { props } = data;
  const containerProps = getButtonSubProps<ViewProps, ViewStyle>({
    props,
    subName: data.containerName,
    userProps: data.userContainerProps,
  });

  const iconProps: OptionalIconWrapperProps = {
    getSubProps: () => ({
      icon: {
        ...getButtonSubProps<TextProps, TextStyle>({
          props,
          subName: data.iconName,
          userProps: data.userIconProps,
        }),
      },
    }),
    noContainer: true,
  };

  const styledIcon = data.icon
    ? cloneElement({ element: data.icon, props: iconProps })
    : undefined;

  const { Container } = data;

  return (
    <Container componentProps={props} {...containerProps}>
      {styledIcon}
    </Container>
  );
};

const handleLeadingIcon = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;
  return handleButtonIcon({
    Container: buttonTheme[props.variant].subComponents.leadingIconContainer,
    containerName: ButtonSubName.LEADING_ICON_CONTAINER,
    icon: props.leadingIcon as React.ReactElement<OptionalIconWrapperProps>,
    iconName: ButtonSubName.LEADING_ICON,
    props,
    userContainerProps: userSubProps.leadingIconContainer,
    userIconProps: userSubProps.leadingIcon,
  });
};

const handleTrailingIcon = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;
  return handleButtonIcon({
    Container: buttonTheme[props.variant].subComponents.trailingIconContainer,
    containerName: ButtonSubName.TRAILING_ICON_CONTAINER,
    icon: props.trailingIcon as React.ReactElement<OptionalIconWrapperProps>,
    iconName: ButtonSubName.TRAILING_ICON,
    props,
    userContainerProps: userSubProps.trailingIconContainer,
    userIconProps: userSubProps.trailingIcon,
  });
};

export interface ButtonSubPropsGetterData<PrimitiveProps> {
  props: ButtonProps;
  subName: ButtonSubName;
  userProps?: PrimitiveProps;
}

export const getButtonSubProps = <PrimitiveProps, PrimitiveStyle>(
  data: ButtonSubPropsGetterData<PrimitiveProps>,
): PrimitiveProps => {
  const buttonTheme = data.props.componentsTheme.button;
  return getInteractiveSubProps<ButtonProps, PrimitiveProps, PrimitiveStyle>({
    componentProps: data.props,
    themes: [
      buttonTheme.allVariants[data.subName] as SizedSubcomponentTheme<
        InteractivityStateTheme<PrimitiveTheme<ButtonProps, PrimitiveProps>>
      >,
      buttonTheme[data.props.variant][data.subName] as SizedSubcomponentTheme<
        InteractivityStateTheme<PrimitiveTheme<ButtonProps, PrimitiveProps>>
      >,
    ],
    userProps: data.userProps,
  });
};

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant } = props;
  const buttonTheme = props.componentsTheme.button;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  const { subComponents } = buttonTheme[variant];
  const { container: Container, touchable: Touchable } = subComponents;
  const touchableProps = extractTouchableProps(props);

  const containerProps = getButtonSubProps<ViewProps, ViewStyle>({
    props,
    subName: ButtonSubName.CONTAINER,
    userProps: userSubProps.container || {},
  });

  return (
    <Touchable componentProps={props} {...touchableProps}>
      <Container componentProps={props} {...containerProps}>
        {props.leadingIcon && handleLeadingIcon(props, userSubProps)}
        {children && transformButtonChildren(props, userSubProps)}
        {props.trailingIcon && handleTrailingIcon(props, userSubProps)}
      </Container>
    </Touchable>
  );
};
