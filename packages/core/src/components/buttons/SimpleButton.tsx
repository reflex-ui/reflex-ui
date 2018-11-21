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
    return handleIcon(props, userSubProps);
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

const handleIcon = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;
  const { iconContainer: Container } = buttonTheme[props.variant].subComponents;
  const containerProps = getButtonSubProps<ViewProps, ViewStyle>({
    props,
    subName: ButtonSubName.ICON_CONTAINER,
    userProps: userSubProps.iconContainer,
  });

  const iconProps: OptionalIconWrapperProps = {
    getSubProps: () => ({
      icon: {
        ...getButtonSubProps<TextProps, TextStyle>({
          props,
          subName: ButtonSubName.ICON,
          userProps: userSubProps.icon,
        }),
      },
    }),
    noContainer: true,
  };

  const children = props.children as React.ReactElement<
    OptionalIconWrapperProps
  >;
  const styledIcon = children
    ? cloneElement({ element: children, props: iconProps })
    : undefined;

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
  // prettier-ignore
  const {
    leadingIconContainer: Container,
  } = buttonTheme[props.variant].subComponents;

  const containerProps = getButtonSubProps<ViewProps, ViewStyle>({
    props,
    subName: ButtonSubName.LEADING_ICON_CONTAINER,
    userProps: userSubProps.leadingIconContainer,
  });

  const iconProps: OptionalIconWrapperProps = {
    getSubProps: () => ({
      icon: {
        ...getButtonSubProps<TextProps, TextStyle>({
          props,
          subName: ButtonSubName.LEADING_ICON,
          userProps: userSubProps.leadingIcon,
        }),
      },
    }),
    noContainer: true,
  };

  const styledIcon = props.leadingIcon
    ? cloneElement({ element: props.leadingIcon, props: iconProps })
    : undefined;

  return (
    <Container componentProps={props} {...containerProps}>
      {styledIcon}
    </Container>
  );
};

const handleTrailingIcon = (
  props: ButtonProps,
  userSubProps: ButtonSubProps,
): JSX.Element | undefined => {
  const buttonTheme = props.componentsTheme.button;
  // prettier-ignore
  const {
    trailingIconContainer: Container,
  } = buttonTheme[props.variant].subComponents;

  const containerProps = getButtonSubProps<ViewProps, ViewStyle>({
    props,
    subName: ButtonSubName.TRAILING_ICON_CONTAINER,
    userProps: userSubProps.trailingIconContainer,
  });

  const iconProps: OptionalIconWrapperProps = {
    getSubProps: () => ({
      icon: {
        ...getButtonSubProps<TextProps, TextStyle>({
          props,
          subName: ButtonSubName.TRAILING_ICON,
          userProps: userSubProps.trailingIcon,
        }),
      },
    }),
    noContainer: true,
  };

  const styledIcon = props.trailingIcon
    ? cloneElement({ element: props.trailingIcon, props: iconProps })
    : undefined;

  return (
    <Container componentProps={props} {...containerProps}>
      {styledIcon}
    </Container>
  );
};

export interface ButtonSubPropsGetterData<PrimitiveProps> {
  props: ButtonProps;
  subName: ButtonSubName;
  userProps?: PrimitiveProps;
}

export const getButtonSubProps = <PrimitiveProps, PrimitiveStyle>(
  data: ButtonSubPropsGetterData<PrimitiveProps>,
): PrimitiveProps =>
  getInteractiveSubProps<ButtonProps, PrimitiveProps, PrimitiveStyle>({
    componentProps: data.props,
    themes: [
      // tslint:disable-next-line
      data.props.componentsTheme.button.allVariants[
        data.subName
        // tslint:disable-next-line
      ] as SizedSubcomponentTheme<
        InteractivityStateTheme<PrimitiveTheme<ButtonProps, PrimitiveProps>>
      >,
      data.props.componentsTheme.button[data.props.variant][
        data.subName
        // tslint:disable-next-line
      ] as SizedSubcomponentTheme<
        InteractivityStateTheme<PrimitiveTheme<ButtonProps, PrimitiveProps>>
      >,
    ],
    userProps: data.userProps,
  });

export const SimpleButton: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant } = props;
  const buttonTheme = props.componentsTheme.button;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  // prettier-ignore
  const {
    container: Container,
    touchable: Touchable,
  } = buttonTheme[variant].subComponents;
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
