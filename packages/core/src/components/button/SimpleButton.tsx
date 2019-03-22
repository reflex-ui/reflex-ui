/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import {
  Text as RNText,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';

import { cloneElement } from '../../utils/cloneElement';
import { propsPipe } from '../../utils/propsPipe';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { mergeThemes } from '../mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { RfxSvgPropsOptional } from '../svg/RfxSvgProps';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { ButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';

export const extractTouchablePropsFromButtonProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
    contained,
    fullWidth,
    getPatchTheme,
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

export const handleButtonChildren = (props: ButtonProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children) return undefined;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean'
  ) {
    return transformButtonStringChildrenIntoComponent(
      children.toString(),
      props,
    );
  }

  if (
    props.variant === ButtonVariant.Fab ||
    props.variant === ButtonVariant.Icon
  ) {
    return handleButtonIcon({
      icon: children as React.ReactElement<RfxSvgPropsOptional>,
      iconTheme: theme.getIcon && theme.getIcon(props),
      props,
    });
  }

  return children;
};

export const transformButtonStringChildrenIntoComponent = (
  children: string,
  props: ButtonProps,
): JSX.Element => {
  const Text = (props.theme.text && props.theme.text.component) || RNText;
  const textProps = getPropsAndStyleFromTheme(props, props.theme.text);

  if (Text === RNText) {
    return <Text {...textProps}>{children}</Text>;
  }

  return (
    <Text complexComponentProps={props} {...textProps}>
      {children}
    </Text>
  );
};

export interface ButtonIconHandlerInput {
  readonly icon: React.ReactElement<RfxSvgPropsOptional>;
  readonly iconTheme?: RfxSvgTheme;
  readonly props: ButtonProps;
}

export const handleButtonIcon = (
  data: ButtonIconHandlerInput,
): JSX.Element | undefined => {
  const iconProps: RfxSvgPropsOptional = {
    colorTheme: data.props.colorTheme,
  };

  let newIcon =
    data.icon &&
    cloneElement<RfxSvgPropsOptional>({
      element: data.icon,
      props: iconProps,
    });

  if (data.iconTheme) {
    newIcon = {
      ...newIcon,
      props: {
        ...newIcon.props,
        getPatchTheme: props =>
          (data.icon.props.getPatchTheme &&
            mergeThemes(
              // data.iconTheme is validated above so this seems a TS issue.
              // @ts-ignore Argument of type 'RfxSvgTheme | undefined' is not
              // assignable to parameter of type 'CompositeComponentTheme'.
              // Type 'undefined' is not assignable to type
              // 'CompositeComponentTheme'.ts(2345)
              data.iconTheme,
              data.icon.props.getPatchTheme(props),
            )) ||
          data.iconTheme,
      },
    };
  }

  return newIcon;
};

export const handleLeadingIcon = (
  props: ButtonProps,
): JSX.Element | undefined =>
  handleButtonIcon({
    icon: props.leadingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme: props.theme.getLeadingIcon && props.theme.getLeadingIcon(props),
    props,
  });

export const handleTrailingIcon = (
  props: ButtonProps,
): JSX.Element | undefined =>
  handleButtonIcon({
    icon: props.trailingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme:
      props.theme.getTrailingIcon && props.theme.getTrailingIcon(props),
    props,
  });

export const renderButtonContainer = (props: ButtonProps) => {
  const { theme } = props;
  const Container = (theme.container && theme.container.component) || View;
  const viewProps = getPropsAndStyleFromTheme(props, theme.container);

  const children = (
    <React.Fragment>
      {props.leadingIcon && handleLeadingIcon(props)}
      {props.children && handleButtonChildren(props)}
      {props.trailingIcon && handleTrailingIcon(props)}
    </React.Fragment>
  );

  if (Container === View) {
    return <Container {...viewProps}>{children}</Container>;
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {children}
    </Container>
  );
};

export const renderButtonTouchable = (props: ButtonProps) => {
  const { theme } = props;

  const Touchable =
    (theme.touchable && theme.touchable.component) || TouchableWithoutFeedback;

  const touchablePropsFromTheme = getPropsAndStyleFromTheme(
    props,
    theme.touchable,
  );
  const touchableProps = extractTouchablePropsFromButtonProps(props);
  const mergedTouchableProps = merge(
    {},
    touchablePropsFromTheme,
    touchableProps,
  );

  const containerElement = renderButtonContainer(props);

  if (Touchable === TouchableWithoutFeedback) {
    return <Touchable {...mergedTouchableProps}>{containerElement}</Touchable>;
  }

  return (
    <Touchable complexComponentProps={props} {...mergedTouchableProps}>
      {containerElement}
    </Touchable>
  );
};

export const SimpleButton = reflexComponent<ButtonProps>({
  name: 'SimpleButton',
})((props: ButtonProps) => {
  validateNoStyleProps(props);
  const newProps = propsPipe<ButtonProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  return renderButtonTouchable(newProps);
});
