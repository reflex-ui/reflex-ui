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
  InteractiveSubTheme,
  PrimitiveTheme,
  SizedSubTheme,
} from '../../theming';
import { cloneElement } from '../../utils';
import { OptionalIconWrapperProps } from '../icons';
import { SubProps } from '../SubProps';
// prettier-ignore
import {
  handleAndroidTextTransformation,
} from '../typography/handleAndroidTextTransformation';
import { ButtonProps } from './ButtonProps';
import { ButtonSubProps } from './ButtonSubProps';
import { ButtonVariant } from './ButtonVariant';

export const extractTouchableProps = (
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

export const transformButtonChildren = (
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
      Container: buttonTheme[props.variant].iconContainer.component,
      containerThemes: [
        buttonTheme.allVariants.iconContainer,
        buttonTheme[props.variant].iconContainer,
      ],
      icon: children as React.ReactElement<OptionalIconWrapperProps>,
      iconThemes: [
        buttonTheme.allVariants.icon,
        buttonTheme[props.variant].icon,
      ],
      props,
      userContainerProps: userSubProps.iconContainer,
      userIconProps: userSubProps.icon,
    });
  }

  return children;
};

export const transformStringChildrenIntoComponent = (
  children: string,
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element => {
  const buttonTheme = props.componentsTheme.button;
  const Text = buttonTheme[props.variant].text.component;

  const textProps = getInteractiveSubProps<
    ButtonProps,
    TextProps,
    TextStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: props,
    themes: [buttonTheme.allVariants.text, buttonTheme[props.variant].text],
    userProps: userSubProps.text,
  });

  return (
    <Text componentProps={props} {...textProps}>
      {handleAndroidTextTransformation(children, textProps.style)}
    </Text>
  );
};

export interface HandleButtonIconData {
  readonly Container: React.ComponentType<SubProps<ButtonProps> & ViewProps>;
  readonly containerThemes: SizedSubTheme<
    InteractiveSubTheme<PrimitiveTheme<ButtonProps, ViewProps>>
  >[];
  readonly icon: React.ReactElement<OptionalIconWrapperProps>;
  readonly iconThemes: SizedSubTheme<
    InteractiveSubTheme<PrimitiveTheme<ButtonProps, TextProps>>
  >[];
  readonly props: ButtonProps;
  readonly userContainerProps?: ViewProps;
  readonly userIconProps?: TextProps;
}

export const handleButtonIcon = (
  data: HandleButtonIconData,
): JSX.Element | undefined => {
  const containerProps = getInteractiveSubProps<
    ButtonProps,
    ViewProps,
    ViewStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: data.props,
    themes: data.containerThemes,
    userProps: data.userContainerProps,
  });

  const iconProps: OptionalIconWrapperProps = {
    getSubProps: () => ({
      icon: {
        ...getInteractiveSubProps<
          ButtonProps,
          TextProps,
          TextStyle
          // tslint:disable-next-line:ter-func-call-spacing
        >({
          componentProps: data.props,
          themes: data.iconThemes,
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
    <Container componentProps={data.props} {...containerProps}>
      {styledIcon}
    </Container>
  );
};

export const handleLeadingIcon = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;

  return handleButtonIcon({
    Container: buttonTheme[props.variant].leadingIconContainer.component,
    containerThemes: [
      buttonTheme.allVariants.leadingIconContainer,
      buttonTheme[props.variant].leadingIconContainer,
    ],
    icon: props.leadingIcon as React.ReactElement<OptionalIconWrapperProps>,
    iconThemes: [
      buttonTheme.allVariants.leadingIcon,
      buttonTheme[props.variant].leadingIcon,
    ],
    props,
    userContainerProps: userSubProps.leadingIconContainer,
    userIconProps: userSubProps.leadingIcon,
  });
};

export const handleTrailingIcon = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;

  return handleButtonIcon({
    Container: buttonTheme[props.variant].trailingIconContainer.component,
    containerThemes: [
      buttonTheme.allVariants.trailingIconContainer,
      buttonTheme[props.variant].trailingIconContainer,
    ],
    icon: props.trailingIcon as React.ReactElement<OptionalIconWrapperProps>,
    iconThemes: [
      buttonTheme.allVariants.trailingIcon,
      buttonTheme[props.variant].trailingIcon,
    ],
    props,
    userContainerProps: userSubProps.trailingIconContainer,
    userIconProps: userSubProps.trailingIcon,
  });
};

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant } = props;
  const buttonTheme = props.componentsTheme.button;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  const touchableProps = extractTouchableProps(props);

  const Container = buttonTheme[variant].container.component;
  const Touchable = buttonTheme[variant].touchable.component;

  const containerProps = getInteractiveSubProps<
    ButtonProps,
    ViewProps,
    ViewStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: props,
    themes: [
      buttonTheme.allVariants.container,
      buttonTheme[props.variant].container,
    ],
    userProps: userSubProps.container,
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
