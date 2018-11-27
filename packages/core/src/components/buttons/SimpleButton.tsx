import * as React from 'react';
import {
  TextProps,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { cloneElement } from '../../utils';
import { OptionalIconWrapperProps } from '../icons';
import { PrimitiveTheme } from '../PrimitiveTheme';
import {
  getInteractiveSubProps,
  InteractiveSubTheme,
  SizedSubTheme,
  SubProps,
} from '../subcomponents';
// prettier-ignore
import {
  handleAndroidTextTransformation,
} from '../typography/handleAndroidTextTransformation';
import { ButtonProps } from './ButtonProps';
import { ButtonSubProps } from './ButtonSubProps';
import { ButtonVariant } from './ButtonVariant';

export const extractTouchablePropsFromButtonProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    allVariantsTheme,
    children,
    colorTheme,
    fullWidth,
    getSubProps,
    interactivityState,
    leadingIcon,
    paletteTheme,
    trailingIcon,
    size,
    theme,
    variant,
    ...touchableProps
  } = props;

  return touchableProps;
};

export const handleButtonChildren = (
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
    return transformButtonStringChildrenIntoComponent(
      children.toString(),
      props,
      userSubProps,
    );
  }

  if (
    props.variant === ButtonVariant.FAB ||
    props.variant === ButtonVariant.ICON
  ) {
    return handleButtonIcon({
      Container: props.theme.iconContainer.component,
      containerThemes: [
        props.allVariantsTheme.iconContainer,
        props.theme.iconContainer,
      ],
      icon: children as React.ReactElement<OptionalIconWrapperProps>,
      iconThemes: [props.allVariantsTheme.icon, props.theme.icon],
      props,
      userContainerProps: userSubProps.iconContainer,
      userIconProps: userSubProps.icon,
    });
  }

  return children;
};

export const transformButtonStringChildrenIntoComponent = (
  children: string,
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element => {
  const Text = props.theme.text.component;

  const textProps = getInteractiveSubProps<
    ButtonProps,
    TextProps,
    TextStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: props,
    themes: [props.allVariantsTheme.text, props.theme.text],
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
): JSX.Element | undefined =>
  handleButtonIcon({
    Container: props.theme.leadingIconContainer.component,
    containerThemes: [
      props.allVariantsTheme.leadingIconContainer,
      props.theme.leadingIconContainer,
    ],
    icon: props.leadingIcon as React.ReactElement<OptionalIconWrapperProps>,
    iconThemes: [props.allVariantsTheme.leadingIcon, props.theme.leadingIcon],
    props,
    userContainerProps: userSubProps.leadingIconContainer,
    userIconProps: userSubProps.leadingIcon,
  });

export const handleTrailingIcon = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element | undefined =>
  handleButtonIcon({
    Container: props.theme.trailingIconContainer.component,
    containerThemes: [
      props.allVariantsTheme.trailingIconContainer,
      props.theme.trailingIconContainer,
    ],
    icon: props.trailingIcon as React.ReactElement<OptionalIconWrapperProps>,
    iconThemes: [props.allVariantsTheme.trailingIcon, props.theme.trailingIcon],
    props,
    userContainerProps: userSubProps.trailingIconContainer,
    userIconProps: userSubProps.trailingIcon,
  });

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children } = props;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  const touchableProps = extractTouchablePropsFromButtonProps(props);

  const Container = props.theme.container.component;
  const Touchable = props.theme.touchable.component;

  const containerProps = getInteractiveSubProps<
    ButtonProps,
    ViewProps,
    ViewStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: props,
    themes: [props.allVariantsTheme.container, props.theme.container],
    userProps: userSubProps.container,
  });

  return (
    <Touchable componentProps={props} {...touchableProps}>
      <Container componentProps={props} {...containerProps}>
        {props.leadingIcon && handleLeadingIcon(props, userSubProps)}
        {children && handleButtonChildren(props, userSubProps)}
        {props.trailingIcon && handleTrailingIcon(props, userSubProps)}
      </Container>
    </Touchable>
  );
};
