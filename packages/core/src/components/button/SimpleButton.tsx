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
import { BuiltInChildProps, resolveChildProps } from '../children';
import { reflexComponent } from '../reflexComponent';
import { RfxSvgPropsOptional } from '../svg/RfxSvgProps';
import { SvgChildTheme } from '../svg/SvgChildTheme';
import { DefaultTextChild } from '../text/DefaultTextChild';
// tslint:disable-next-line:max-line-length
import { handleAndroidTextTransformation } from '../text/handleAndroidTextTransformation';
import { DefaultTouchableChild } from '../touchable/DefaultTouchableChild';
import { DefaultViewChild } from '../view/DefaultViewChild';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { ButtonChildrenProps } from './ButtonChildrenProps';
import { ButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';

export const extractTouchablePropsFromButtonProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
    fullWidth,
    getChildrenProps,
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
  userChildrenProps: ButtonChildrenProps,
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
      userChildrenProps,
    );
  }

  if (
    props.variant === ButtonVariant.Fab ||
    props.variant === ButtonVariant.Icon
  ) {
    return handleButtonIcon({
      Container: props.theme.iconContainer.component || DefaultViewChild,
      containerTheme: props.theme.iconContainer,
      icon: children as React.ReactElement<RfxSvgPropsOptional>,
      iconTheme: props.theme.icon,
      props,
      userContainerProps: userChildrenProps.iconContainer,
      userIconProps: userChildrenProps.icon,
    });
  }

  return children;
};

export const transformButtonStringChildrenIntoComponent = (
  children: string,
  props: ButtonProps,
  userChildrenProps: ButtonChildrenProps,
): JSX.Element => {
  const Text = props.theme.text.component || DefaultTextChild;

  const textProps = resolveChildProps<ButtonProps, TextProps, TextStyle>({
    componentProps: props,
    theme: props.theme.text,
    userProps: userChildrenProps.text,
  });

  return (
    <Text componentProps={props} {...textProps}>
      {handleAndroidTextTransformation(children, textProps.style)}
    </Text>
  );
};

export interface HandleButtonIconData {
  readonly Container: React.ComponentType<
    BuiltInChildProps<ButtonProps> & ViewProps
  >;
  readonly containerTheme: BuiltInViewChildTheme<ButtonProps>;
  readonly icon: React.ReactElement<RfxSvgPropsOptional>;
  readonly iconTheme: SvgChildTheme<ButtonProps>;
  readonly props: ButtonProps;
  readonly userContainerProps?: ViewProps;
  readonly userIconProps?: TextProps;
}

export const handleButtonIcon = (
  data: HandleButtonIconData,
): JSX.Element | undefined => {
  const containerProps = resolveChildProps<ButtonProps, ViewProps, ViewStyle>({
    componentProps: data.props,
    theme: data.containerTheme,
    userProps: data.userContainerProps,
  });

  const iconProps: RfxSvgPropsOptional = {
    colorTheme: data.props.colorTheme,
    getChildrenProps: () => ({
      svg: {
        ...resolveChildProps<ButtonProps, SvgProps, ViewStyle>({
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
  userChildrenProps: ButtonChildrenProps,
): JSX.Element | undefined =>
  handleButtonIcon({
    Container: props.theme.leadingIconContainer.component || DefaultViewChild,
    containerTheme: props.theme.leadingIconContainer,
    icon: props.leadingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme: props.theme.leadingIcon,
    props,
    userContainerProps: userChildrenProps.leadingIconContainer,
    userIconProps: userChildrenProps.leadingIcon,
  });

export const handleTrailingIcon = (
  props: ButtonProps,
  userChildrenProps: ButtonChildrenProps,
): JSX.Element | undefined =>
  handleButtonIcon({
    Container: props.theme.trailingIconContainer.component || DefaultViewChild,
    containerTheme: props.theme.trailingIconContainer,
    icon: props.trailingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme: props.theme.trailingIcon,
    props,
    userContainerProps: userChildrenProps.trailingIconContainer,
    userIconProps: userChildrenProps.trailingIcon,
  });

export const SimpleButton = reflexComponent<ButtonProps>({
  name: 'SimpleButton',
})((props: ButtonProps) => {
  const { children } = props;
  const userChildrenProps = props.getChildrenProps
    ? props.getChildrenProps(props)
    : {};
  const touchableProps = extractTouchablePropsFromButtonProps(props);

  const Container = props.theme.container.component || DefaultViewChild;
  const Touchable = props.theme.touchable.component || DefaultTouchableChild;

  const containerProps = resolveChildProps<ButtonProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.container,
    userProps: userChildrenProps.container,
  });

  return (
    <Touchable componentProps={props} {...touchableProps}>
      <Container componentProps={props} {...containerProps}>
        {props.leadingIcon && handleLeadingIcon(props, userChildrenProps)}
        {children && handleButtonChildren(props, userChildrenProps)}
        {props.trailingIcon && handleTrailingIcon(props, userChildrenProps)}
      </Container>
    </Touchable>
  );
});
