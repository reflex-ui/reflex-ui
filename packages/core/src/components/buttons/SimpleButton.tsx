import flattenDepth from 'lodash/flattenDepth';
import merge from 'lodash/merge';
import * as React from 'react';
import {
  StyleSheet,
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
import { IconWrapperSubProps, OptionalIconWrapperProps } from '../icons';
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
  const iconProps = {
    noContainer: true,
    ...getButtonSubProps<TextProps, TextStyle>({
      props,
      subName: ButtonSubName.ICON,
      userProps: userSubProps.icon,
    }),
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

const mergePrimitiveProps = <PrimitiveProps extends TextProps | ViewProps>(
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'.
  props1: PrimitiveProps = {},
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'.
  props2: PrimitiveProps = {},
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'.
  props3: PrimitiveProps = {},
): PrimitiveProps => {
  const style1 = props1.style;
  // @ts-ignore Spread types may only be created from object types.
  const otherProps1 = { ...props1 };
  delete otherProps1.style;

  const style2 = props2.style;
  // @ts-ignore Spread types may only be created from object types.
  const otherProps2 = { ...props2 };
  delete otherProps2.style;

  const style3 = props3.style;
  // @ts-ignore Spread types may only be created from object types.
  const otherProps3 = { ...props3 };
  delete otherProps3.style;

  const merged = merge({}, otherProps1, otherProps2, otherProps3);
  if (style1 || style2 || style3) merged.style = [];
  if (style1) merged.style.push(style1);
  if (style2) merged.style.push(style2);
  if (style3) merged.style.push(style3);

  merged.style = flattenDepth(merged.style, 1);

  return merged;
};

const mergeIconWrapperProps = (
  props1: OptionalIconWrapperProps,
  props2: OptionalIconWrapperProps,
) => {
  console.log('SimpleButton().mergeIconWrapperProps() - props1: ', props1);

  console.log('SimpleButton().mergeIconWrapperProps() - props2: ', props2);

  const merged: OptionalIconWrapperProps = merge({}, props1, props2);

  merged.getSubProps = props => {
    const subProps1 = props1.getSubProps ? props1.getSubProps(props) : {};

    /*
    let styleContainer1;
    if (subProps1.container) {
      styleContainer1 = subProps1.container.style;
      delete subProps1.container.style;
    }

    let styleIcon1;
    if (subProps1.icon) {
      styleIcon1 = subProps1.icon.style;
      delete subProps1.icon.style;
    }
    */

    const subProps2 = props2.getSubProps ? props2.getSubProps(props) : {};

    /*
    let styleContainer2;
    if (subProps2.container) {
      styleContainer2 = subProps2.container.style;
      delete subProps2.container.style;
    }

    let styleIcon2;
    if (subProps2.icon) {
      styleIcon2 = subProps2.icon.style;
      delete subProps2.icon.style;
    }
    */

    const subProps3: IconWrapperSubProps = { icon: {} };
    if (props.color) {
      (subProps3.icon as TextProps).style = StyleSheet.create({
        style: { color: props.color },
      }).style;
    }

    const containerProps = mergePrimitiveProps(
      subProps1.container,
      subProps2.container,
    );

    const iconProps = mergePrimitiveProps(
      subProps1.icon,
      subProps2.icon,
      subProps3.icon,
    );

    console.log(
      'SimpleButton().mergeIconWrapperProps() - iconProps: ',
      iconProps,
    );

    console.log(
      'SimpleButton().mergeIconWrapperProps() - iconProps.style: ',
      StyleSheet.flatten(iconProps.style),
    );

    return {
      container: containerProps,
      icon: iconProps,
    };

    /*
    const mergedSubProps = merge({}, subProps1, subProps2);
    if (mergedSubProps.icon) mergedSubProps.icon.style;
    return mergedSubProps;
    */
    // return merge({}, subProps1, subProps2, subProps3);
  };

  return merged;
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
  /*
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
  */
  const buttonIconProps: OptionalIconWrapperProps = {
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
  const iconProps = mergeIconWrapperProps(
    buttonIconProps,
    (props.leadingIcon as JSX.Element).props,
  );

  const styledIcon = props.leadingIcon
    ? cloneElement({ element: props.leadingIcon, props: iconProps })
    : undefined;

  if (props.leadingIcon && props.leadingIcon.props.color) {
    console.log(
      'SimpleButton.handleLeadingIcon() - props.leadingIcon: ',
      props.leadingIcon,
    );
    console.log('SimpleButton.handleLeadingIcon() - iconProps: ', iconProps);
    /*
    console.log(
      'SimpleButton.handleLeadingIcon() - iconProps.style: ',
      StyleSheet.flatten(iconProps.style),
    );
    */
  }

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
