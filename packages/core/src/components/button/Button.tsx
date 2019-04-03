/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { InteractionStateContext } from '../../interaction';
import { useInteraction } from '../../interaction/useInteraction';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { cloneElement } from '../../utils/cloneElement';
import { filterOutInteractionProps } from '../../utils/props';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeAndStyleProps } from '../handleThemeAndStyleProps';
import { mergeThemes } from '../mergeThemes';
import { processComponent } from '../processComponent';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import { RfxSvgPropsOptional } from '../svg/RfxSvgProps';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { renderTextComponent } from '../text';
// tslint:disable-next-line:max-line-length
import { renderTouchableComponent } from '../touchable/renderTouchableComponent';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';
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
    const Text = props.theme.text && props.theme.text.component;
    const textProps = {
      ...getPropsAndStyleFromTheme(props, props.theme.text),
      children: children.toString(),
      key: 'text',
    };
    return renderTextComponent(props, textProps, Text);
  }

  if (
    props.variant === ButtonVariant.Fab ||
    props.variant === ButtonVariant.Icon
  ) {
    return handleButtonIcon({
      icon: children as React.ReactElement<RfxSvgPropsOptional>,
      iconTheme: theme.getIcon && theme.getIcon(props),
      mergeProps: { key: 'icon' },
    });
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
        getPatchTheme: props =>
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
): JSX.Element | undefined =>
  handleButtonIcon({
    icon: props.leadingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme: props.theme.getLeadingIcon && props.theme.getLeadingIcon(props),
    mergeProps: { key: 'leadingIcon' },
  });

export const handleTrailingIcon = (
  props: ButtonProps,
): JSX.Element | undefined =>
  handleButtonIcon({
    icon: props.trailingIcon as React.ReactElement<RfxSvgPropsOptional>,
    iconTheme:
      props.theme.getTrailingIcon && props.theme.getTrailingIcon(props),
    mergeProps: { key: 'trailingIcon' },
  });

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
  surfaceProps = {
    ...surfaceProps,
    interactionState: props.interactionState,
  };

  const surfaceTheme = props.theme.surface && props.theme.surface(props);

  if (surfaceTheme !== undefined) {
    surfaceProps = {
      ...surfaceProps,
      getPatchTheme: () => surfaceTheme,
    };
  }

  return surfaceProps;
};

let Button: React.ComponentType<ButtonPropsOptional> = (
  props: ButtonPropsOptional,
) => {
  let newProps = useDefaultButtonProps(props);
  newProps = { ...newProps, ...useInteraction(newProps) };
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleThemeAndStyleProps(newProps, newProps.theme.touchable);

  const Touchable =
    newProps.theme.touchable && newProps.theme.touchable.component;

  const surfaceProps = extractSurfacePropsFromButtonProps(newProps);
  const surface = (
    <Surface {...surfaceProps}>
      {newProps.leadingIcon && handleLeadingIcon(newProps)}
      {newProps.children && handleButtonChildren(newProps)}
      {newProps.trailingIcon && handleTrailingIcon(newProps)}
    </Surface>
  );
  newProps = { ...newProps, children: surface };

  return (
    <InteractionStateContext.Provider value={newProps.interactionState}>
      {renderTouchableComponent(newProps, Touchable)}
    </InteractionStateContext.Provider>
  );
};

Button = processComponent<ButtonPropsOptional>(Button, {
  name: 'Button',
});

export { Button };
