/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { cloneElement } from '../../utils';
import { extractPropsFromTheme } from '../children/extractPropsFromTheme';
import { mergeThemes } from '../children/mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { RfxSvgPropsOptional } from '../svg/RfxSvgProps';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { DefaultTextChild } from '../text/DefaultTextChild';
// tslint:disable-next-line:max-line-length
import { handleAndroidTextTransformation } from '../text/handleAndroidTextTransformation';
import { DefaultTouchableChild } from '../touchable/DefaultTouchableChild';
import { DefaultViewChild } from '../view/DefaultViewChild';
import { ButtonProps } from './ButtonProps';
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
  const Text =
    (props.theme.text && props.theme.text.component) || DefaultTextChild;
  const textProps = extractPropsFromTheme(props, props.theme.text);

  return (
    <Text componentProps={props} {...textProps}>
      {handleAndroidTextTransformation(children, textProps.style)}
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

export const SimpleButton = reflexComponent<ButtonProps>({
  name: 'SimpleButton',
})((props: ButtonProps) => {
  const { children } = props;
  let newProps = props;
  let mergedTheme = props.theme;

  if (props.getPatchTheme || props.theme.getProps) {
    mergedTheme = mergeThemes(
      props.theme,
      props.getPatchTheme && props.getPatchTheme(props),
    );

    newProps = {
      ...newProps,
      ...((mergedTheme.getProps && mergedTheme.getProps(props)) || {}),
      theme: mergedTheme,
    };
  }

  const Touchable =
    (mergedTheme.touchable && mergedTheme.touchable.component) ||
    DefaultTouchableChild;

  const touchableProps = extractPropsFromTheme(newProps, mergedTheme.touchable);
  const userTouchableProps = extractTouchablePropsFromButtonProps(newProps);

  if (userTouchableProps.style) {
    throw new Error(
      [
        "Rfx: It's not possible to pass style prop directly.",
        'You have to pass it as part of theme object.',
      ].join(' '),
    );
  }
  const mergedTouchableProps = merge({}, touchableProps, userTouchableProps);

  const Container =
    (mergedTheme.container && mergedTheme.container.component) ||
    DefaultViewChild;

  const containerProps = extractPropsFromTheme(newProps, mergedTheme.container);

  return (
    <Touchable componentProps={newProps} {...mergedTouchableProps}>
      <Container componentProps={newProps} {...containerProps}>
        {newProps.leadingIcon && handleLeadingIcon(newProps)}
        {children && handleButtonChildren(newProps)}
        {newProps.trailingIcon && handleTrailingIcon(newProps)}
      </Container>
    </Touchable>
  );
});
