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

import { cloneElement } from '../../utils';
import { mergeThemes } from '../children/mergeThemes';
import { resolveChildProps } from '../children/resolveChildProps';
import { reflexComponent } from '../reflexComponent';
import { RfxSvgPropsOptional } from '../svg/RfxSvgProps';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { DefaultTextChild } from '../text/DefaultTextChild';
// tslint:disable-next-line:max-line-length
import { handleAndroidTextTransformation } from '../text/handleAndroidTextTransformation';
import { DefaultTouchableChild } from '../touchable/DefaultTouchableChild';
import { DefaultViewChild } from '../view/DefaultViewChild';
import { ButtonProps } from './ButtonProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export const extractTouchablePropsFromButtonProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
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

export const handleButtonChildren = (
  props: ButtonProps,
  patchTheme: ButtonTheme | undefined,
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
      patchTheme,
    );
  }

  if (
    props.variant === ButtonVariant.Fab ||
    props.variant === ButtonVariant.Icon
  ) {
    return handleButtonIcon({
      icon: children as React.ReactElement<RfxSvgPropsOptional>,
      iconTheme: props.theme.getIcon && props.theme.getIcon(props),
      patchIconTheme:
        patchTheme && patchTheme.getIcon && patchTheme.getIcon(props),
      props,
    });
  }

  return children;
};

export const transformButtonStringChildrenIntoComponent = (
  children: string,
  props: ButtonProps,
  patchTheme: ButtonTheme | undefined,
): JSX.Element => {
  const Text =
    (patchTheme && patchTheme.text && patchTheme.text.component) ||
    (props.theme.text && props.theme.text.component) ||
    DefaultTextChild;

  const textProps = resolveChildProps<ButtonProps, TextProps, TextStyle>({
    componentProps: props,
    patchTheme: patchTheme && patchTheme.text,
    theme: props.theme.text,
  });

  return (
    <Text componentProps={props} {...textProps}>
      {handleAndroidTextTransformation(children, textProps.style)}
    </Text>
  );
};

export interface ButtonIconHandlerInput {
  readonly icon: React.ReactElement<RfxSvgPropsOptional>;
  readonly iconTheme?: RfxSvgTheme;
  readonly patchIconTheme?: RfxSvgTheme;
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

  if (data.iconTheme || data.patchIconTheme) {
    const mergedThemes = mergeThemes(
      data.iconTheme,
      data.patchIconTheme,
    ) as RfxSvgTheme;

    newIcon = {
      ...newIcon,
      props: {
        ...newIcon.props,
        getPatchTheme: props =>
          (data.icon.props.getPatchTheme &&
            (mergeThemes(
              mergedThemes,
              data.icon.props.getPatchTheme(props),
            ) as RfxSvgTheme)) ||
          mergedThemes,
      },
    };
  }

  return newIcon;
};

export const handleLeadingIcon = (
  props: ButtonProps,
  patchTheme: ButtonTheme | undefined,
): JSX.Element | undefined =>
  handleButtonIcon({
    icon: props.leadingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme: props.theme.getLeadingIcon && props.theme.getLeadingIcon(props),
    patchIconTheme:
      patchTheme &&
      patchTheme.getLeadingIcon &&
      patchTheme.getLeadingIcon(props),
    props,
  });

export const handleTrailingIcon = (
  props: ButtonProps,
  patchTheme: ButtonTheme | undefined,
): JSX.Element | undefined =>
  handleButtonIcon({
    icon: props.trailingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme:
      props.theme.getTrailingIcon && props.theme.getTrailingIcon(props),
    patchIconTheme:
      patchTheme &&
      patchTheme.getTrailingIcon &&
      patchTheme.getTrailingIcon(props),
    props,
  });

export const SimpleButton = reflexComponent<ButtonProps>({
  name: 'SimpleButton',
})((props: ButtonProps) => {
  const { children } = props;
  const patchTheme = props.getPatchTheme && props.getPatchTheme(props);

  let newProps = props;
  if (props.theme.getProps || (patchTheme && patchTheme.getProps)) {
    newProps = {
      ...newProps,
      ...((props.theme.getProps && props.theme.getProps(props)) || {}),
      ...((patchTheme && patchTheme.getProps && patchTheme.getProps(props)) ||
        {}),
    };
  }

  const touchableProps = extractTouchablePropsFromButtonProps(newProps);

  const Container =
    (patchTheme && patchTheme.container && patchTheme.container.component) ||
    (newProps.theme.container && newProps.theme.container.component) ||
    DefaultViewChild;

  const Touchable =
    (patchTheme && patchTheme.touchable && patchTheme.touchable.component) ||
    (newProps.theme.touchable && newProps.theme.touchable.component) ||
    DefaultTouchableChild;

  const containerProps = resolveChildProps<ButtonProps, ViewProps, ViewStyle>({
    componentProps: newProps,
    patchTheme: patchTheme && patchTheme.container,
    theme: newProps.theme.container,
  });

  return (
    <Touchable componentProps={newProps} {...touchableProps}>
      <Container componentProps={newProps} {...containerProps}>
        {newProps.leadingIcon && handleLeadingIcon(newProps, patchTheme)}
        {children && handleButtonChildren(newProps, patchTheme)}
        {newProps.trailingIcon && handleTrailingIcon(newProps, patchTheme)}
      </Container>
    </Touchable>
  );
});
