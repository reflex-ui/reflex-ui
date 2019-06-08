/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ReactNode, Ref } from 'react';
import { ImageStyle, TextStyle, View, ViewStyle } from 'react-native';

import { ColorPropsOptional } from '../../color/ColorProps';
import { StyleProps } from '../../components/StyleProps';
import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { Size } from '../../sizing/Size';
import { cloneElement } from '../../utils/cloneElement';
import { useComponentsTheme } from '../ComponentsTheme';
import { getPropsFromTheme } from '../getPropsFromTheme';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import { renderTextComponent } from '../text';
import { AvatarProps, AvatarPropsOptional } from './AvatarProps';
import { AvatarTheme } from './AvatarTheme';
import { useDefaultAvatarProps } from './useDefaultAvatarProps';

export const extractSurfacePropsFromAvatarProps = (
  props: AvatarProps,
): SurfacePropsOptional => {
  const { getPatchTheme, theme, ...otherProps } = props;

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

export const handleAvatarChildren = (
  props: AvatarProps,
): ReactNode | undefined | null => {
  const { children, invertColor, size, theme } = props;
  if (children === undefined || children === null) return undefined;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean'
  ) {
    const Component =
      theme.text && theme.text.getComponent && theme.text.getComponent(props);
    const textProps = {
      ...getPropsFromTheme(props, theme.text),
      children: children.toString(),
      key: 'text',
      style: getStyleFromTheme(props, theme.text),
    };
    return renderTextComponent({ Component, props, textProps });
  }

  const mergeProps = {
    ...(invertColor && { invertColor }),
    ...(size && { size }),
  };

  return (
    children &&
    cloneElement<
      ColorPropsOptional &
        StyleProps<ViewStyle | TextStyle | ImageStyle> & { size?: Size }
    >({
      element: children as React.ReactElement<
        ColorPropsOptional &
          StyleProps<ViewStyle | TextStyle | ImageStyle> & { size?: Size }
      >,
      props: mergeProps,
    })
  );
};

const useTheme = (theme?: AvatarTheme): AvatarTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.avatar === undefined || componentsTheme.avatar === null) {
    throw new MissingComponentThemeError('<Avatar>');
  }

  return componentsTheme.avatar;
};

let Avatar: React.ComponentType<AvatarPropsOptional> = forwardRef(
  (props: AvatarPropsOptional, ref: Ref<View>) => {
    let newProps = useDefaultAvatarProps(props, useTheme(props.theme));
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);

    const surfaceProps = extractSurfacePropsFromAvatarProps(newProps);
    const surface = (
      <Surface {...surfaceProps} ref={ref}>
        {newProps.children && handleAvatarChildren(newProps)}
      </Surface>
    );
    newProps = { ...newProps, children: surface };

    return surface;
  },
);

Avatar = processComponent<AvatarPropsOptional>(Avatar, {
  name: 'Avatar',
});

export { Avatar };
