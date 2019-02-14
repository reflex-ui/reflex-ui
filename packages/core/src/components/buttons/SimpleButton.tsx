/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {
  TextProps,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

import { cloneElement } from '../../utils';
import { reflexComponent } from '../reflexComponent';
import {
  getSubProps,
  InjectableSubTheme,
  SubProps,
  SubTheme,
} from '../subcomponents';
import { OptionalFlexSvgProps } from '../svg/FlexSvgProps';
// tslint:disable-next-line:max-line-length
import { handleAndroidTextTransformation } from '../typography/handleAndroidTextTransformation';
import { ButtonProps } from './ButtonProps';
import { ButtonSubProps } from './ButtonSubProps';
import { ButtonVariant } from './ButtonVariant';

export const extractTouchablePropsFromButtonProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
    fullWidth,
    // tslint:disable-next-line:no-shadowed-variable
    getSubProps,
    interactionState,
    invertColor,
    leadingIcon,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginStart,
    marginTop,
    marginVertical,
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
    props.variant === ButtonVariant.Fab ||
    props.variant === ButtonVariant.Icon
  ) {
    return handleButtonIcon({
      Container: props.theme.iconContainer.component,
      containerTheme: props.theme.iconContainer,
      icon: children as React.ReactElement<OptionalFlexSvgProps>,
      iconTheme: props.theme.icon,
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

  const textProps = getSubProps<ButtonProps, TextProps, TextStyle>({
    componentProps: props,
    theme: props.theme.text,
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
  readonly containerTheme: InjectableSubTheme<
    ButtonProps,
    ViewProps,
    ViewStyle
  >;
  readonly icon: React.ReactElement<OptionalFlexSvgProps>;
  readonly iconTheme: SubTheme<ButtonProps, TextProps, TextStyle>;
  readonly props: ButtonProps;
  readonly userContainerProps?: ViewProps;
  readonly userIconProps?: TextProps;
}

export const handleButtonIcon = (
  data: HandleButtonIconData,
): JSX.Element | undefined => {
  const containerProps = getSubProps<ButtonProps, ViewProps, ViewStyle>({
    componentProps: data.props,
    theme: data.containerTheme,
    userProps: data.userContainerProps,
  });

  const iconProps: OptionalFlexSvgProps = {
    colorTheme: data.props.colorTheme,
    getSubProps: () => ({
      svg: {
        ...getSubProps<ButtonProps, SvgProps, ViewStyle>({
          componentProps: data.props,
          theme: data.iconTheme,
          userProps: data.userIconProps,
        }),
      },
    }),
    skipContainer: true,
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
    containerTheme: props.theme.leadingIconContainer,
    icon: props.leadingIcon as React.ReactElement<OptionalFlexSvgProps>,
    iconTheme: props.theme.leadingIcon,
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
    containerTheme: props.theme.trailingIconContainer,
    icon: props.trailingIcon as React.ReactElement<OptionalFlexSvgProps>,
    iconTheme: props.theme.trailingIcon,
    props,
    userContainerProps: userSubProps.trailingIconContainer,
    userIconProps: userSubProps.trailingIcon,
  });

export const SimpleButton = reflexComponent<ButtonProps>({
  name: 'SimpleButton',
})((props: ButtonProps) => {
  const { children } = props;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  const touchableProps = extractTouchablePropsFromButtonProps(props);

  const Container = props.theme.container.component;
  const Touchable = props.theme.touchable.component;

  const containerProps = getSubProps<ButtonProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.container,
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
});
