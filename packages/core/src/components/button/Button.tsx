/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View, ViewProps } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { InteractionStateProvider } from '../../interaction';
import { useInteraction } from '../../interaction/useInteraction';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { cloneElement } from '../../utils/cloneElement';
import { filterOutInteractionProps } from '../../utils/props';
import { useComponentsTheme } from '../ComponentsTheme';
import { getPropsFromTheme } from '../getPropsFromTheme';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { mergeThemes } from '../mergeThemes';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import { RfxSvgProps, RfxSvgPropsOptional } from '../svg/RfxSvgProps';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { renderTextComponent } from '../text';
// tslint:disable-next-line:max-line-length
import { renderTouchableComponent } from '../touchable/renderTouchableComponent';
import { renderViewComponent } from '../view/renderViewComponent';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';
import { useDefaultButtonProps } from './useDefaultButtonProps';

export const handleButtonChildren = (props: ButtonProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children) return undefined;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean'
  ) {
    const Component =
      props.theme.text &&
      props.theme.text.getComponent &&
      props.theme.text.getComponent(props);
    const textProps = {
      ...getPropsFromTheme(props, props.theme.text),
      children: children.toString(),
      key: 'text',
      style: getStyleFromTheme(props, props.theme.text),
    };
    return renderTextComponent({ Component, props, textProps });
  }

  if (
    props.variant === ButtonVariant.Fab ||
    props.variant === ButtonVariant.Icon
  ) {
    const iconElement = handleButtonIcon({
      icon: children as React.ReactElement<RfxSvgPropsOptional>,
      iconTheme: theme.icon && theme.icon(props),
      mergeProps: { invertColor: props.invertColor, key: 'icon' },
    });

    const viewProps: React.PropsWithChildren<ViewProps> & { key?: string } = {
      ...getPropsFromTheme(props, theme.iconContainer),
      children: iconElement,
      key: 'iconContainer',
      style: getStyleFromTheme(props, theme.iconContainer),
    };

    const Component =
      theme.iconContainer &&
      theme.iconContainer.getComponent &&
      theme.iconContainer.getComponent(props);
    return renderViewComponent({ props, viewProps, Component });
  }

  return children;
};

export interface ButtonIconHandlerInput {
  readonly icon: React.ReactElement<RfxSvgPropsOptional>;
  readonly iconTheme?: RfxSvgTheme;
  readonly mergeProps?: RfxSvgPropsOptional & { key?: string };
}

export const handleButtonIcon = (
  data: ButtonIconHandlerInput,
): JSX.Element | undefined => {
  let newIcon =
    data.icon &&
    cloneElement<RfxSvgPropsOptional>({
      element: data.icon,
      props: data.mergeProps,
    });

  if (data.iconTheme) {
    newIcon = {
      ...newIcon,
      props: {
        ...newIcon.props,
        getPatchTheme: (props: RfxSvgProps) =>
          (data.icon.props.getPatchTheme &&
            mergeThemes(
              data.iconTheme,
              data.icon.props.getPatchTheme(props),
            )) ||
          (data.iconTheme as RfxSvgTheme),
      },
    };
  }

  return newIcon;
};

export const handleLeadingIcon = (
  props: ButtonProps,
): JSX.Element | undefined => {
  const iconElement = handleButtonIcon({
    icon: props.leadingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme: props.theme.leadingIcon && props.theme.leadingIcon(props),
    mergeProps: { invertColor: props.invertColor, key: 'leadingIcon' },
  });

  const { theme } = props;
  const viewProps: React.PropsWithChildren<ViewProps> & { key?: string } = {
    ...getPropsFromTheme(props, theme.leadingIconContainer),
    children: iconElement,
    key: 'leadingIconContainer',
    style: getStyleFromTheme(props, theme.leadingIconContainer),
  };

  const Component =
    theme.leadingIconContainer &&
    theme.leadingIconContainer.getComponent &&
    theme.leadingIconContainer.getComponent(props);
  return renderViewComponent({ props, viewProps, Component });
};

export const handleTrailingIcon = (
  props: ButtonProps,
): JSX.Element | undefined => {
  const iconElement = handleButtonIcon({
    icon: props.trailingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme: props.theme.trailingIcon && props.theme.trailingIcon(props),
    mergeProps: { invertColor: props.invertColor, key: 'trailingIcon' },
  });

  const { theme } = props;
  const viewProps: React.PropsWithChildren<ViewProps> & { key?: string } = {
    ...getPropsFromTheme(props, theme.trailingIconContainer),
    children: iconElement,
    key: 'trailingIconContainer',
    style: getStyleFromTheme(props, theme.trailingIconContainer),
  };

  const Component =
    theme.trailingIconContainer &&
    theme.trailingIconContainer.getComponent &&
    theme.trailingIconContainer.getComponent(props);
  return renderViewComponent({ props, viewProps, Component });
};

export const extractSurfacePropsFromButtonProps = (
  props: ButtonProps,
): SurfacePropsOptional => {
  const {
    getPatchTheme,
    leadingIcon,
    trailingIcon,
    theme,
    variant,
    ...otherProps
  } = filterOutInteractionProps(props);

  let surfaceProps = otherProps as SurfacePropsOptional;
  const surfaceTheme = props.theme.surface && props.theme.surface(props);

  if (surfaceTheme !== undefined) {
    surfaceProps = {
      ...surfaceProps,
      getPatchTheme: () => surfaceTheme,
    };
  }

  return surfaceProps;
};

const useTheme = (
  theme?: ButtonTheme,
  variant?: ButtonVariant,
): ButtonTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.button === undefined || componentsTheme.button === null) {
    throw new MissingComponentThemeError('<Button>');
  }

  return componentsTheme.button[variant || ButtonVariant.Default];
};

let Button: React.ComponentType<ButtonPropsOptional> = forwardRef(
  (props: ButtonPropsOptional, ref: Ref<View>) => {
    const theme = useTheme(props.theme, props.variant);

    let newProps: ButtonProps = useDefaultButtonProps(props, theme);
    newProps = { ...newProps, ...useInteraction(newProps) };
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, theme.touchable);

    const Touchable =
      theme.touchable &&
      theme.touchable.getComponent &&
      theme.touchable.getComponent(newProps);

    const surfaceProps = extractSurfacePropsFromButtonProps(newProps);
    const surface = (
      <Surface {...surfaceProps} ref={ref}>
        {newProps.leadingIcon && handleLeadingIcon(newProps)}
        {newProps.children && handleButtonChildren(newProps)}
        {newProps.trailingIcon && handleTrailingIcon(newProps)}
      </Surface>
    );
    newProps = { ...newProps, children: surface };

    return (
      <InteractionStateProvider value={newProps.interactionState}>
        {renderTouchableComponent(newProps, Touchable)}
      </InteractionStateProvider>
    );
  },
);

Button = processComponent<ButtonPropsOptional>(Button, {
  name: 'Button',
});

export { Button };
