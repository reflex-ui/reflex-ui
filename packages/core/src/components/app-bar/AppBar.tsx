/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View, ViewProps } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { getPropsFromTheme } from '../getPropsFromTheme';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import { renderViewComponent } from '../view/renderViewComponent';
import { AppBarProps, AppBarPropsOptional } from './AppBarProps';
import { AppBarTheme } from './AppBarTheme';
import { AppBarVariant } from './AppBarVariant';
import { useDefaultAppBarProps } from './useDefaultAppBarProps';

export const extractSurfacePropsFromAppBarProps = (
  props: AppBarProps,
): SurfacePropsOptional => {
  const { children, getPatchTheme, theme, variant, ...otherProps } = props;

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

export const renderAppBarCenterArea = (props: AppBarProps): React.ReactNode => {
  if (
    props.children === undefined ||
    props.children === null ||
    !Array.isArray(props.children) ||
    props.children.length < 2
  ) {
    return undefined;
  }

  const children = props.children[1];
  const { theme } = props;
  const viewProps: React.PropsWithChildren<ViewProps> = {
    ...getPropsFromTheme(props, theme.centerArea),
    children,
    style: getStyleFromTheme(props, theme.centerArea),
  };

  const Component =
    theme.centerArea &&
    theme.centerArea.getComponent &&
    theme.centerArea.getComponent(props);
  return renderViewComponent({ props, viewProps, Component });
};

export const renderAppBarLeadingArea = (
  props: AppBarProps,
): React.ReactNode => {
  if (props.children === undefined || props.children === null) {
    return props.children;
  }

  const children = Array.isArray(props.children)
    ? props.children[0]
    : props.children;

  const { theme } = props;

  const viewProps: React.PropsWithChildren<ViewProps> = {
    ...getPropsFromTheme(props, theme.leadingArea),
    children,
    style: getStyleFromTheme(props, theme.leadingArea),
  };

  const Component =
    theme.leadingArea &&
    theme.leadingArea.getComponent &&
    theme.leadingArea.getComponent(props);
  return renderViewComponent({ props, viewProps, Component });
};

export const renderAppBarTrailingArea = (
  props: AppBarProps,
): React.ReactNode => {
  if (
    props.children === undefined ||
    props.children === null ||
    !Array.isArray(props.children) ||
    props.children.length < 3
  ) {
    return undefined;
  }

  const children = props.children[2];
  const { theme } = props;
  const viewProps: React.PropsWithChildren<ViewProps> = {
    ...getPropsFromTheme(props, theme.trailingArea),
    children,
    style: getStyleFromTheme(props, theme.trailingArea),
  };

  const Component =
    theme.trailingArea &&
    theme.trailingArea.getComponent &&
    theme.trailingArea.getComponent(props);
  return renderViewComponent({ props, viewProps, Component });
};

const useTheme = (
  theme?: AppBarTheme,
  variant?: AppBarVariant,
): AppBarTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.appBar === undefined || componentsTheme.appBar === null) {
    throw new MissingComponentThemeError('<AppBar>');
  }

  return componentsTheme.appBar[variant || AppBarVariant.Default];
};

let AppBar: React.ComponentType<AppBarPropsOptional> = forwardRef(
  (props: AppBarPropsOptional, ref: Ref<View>) => {
    let newProps = useDefaultAppBarProps(
      props,
      useTheme(props.theme, props.variant),
    );
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);

    if (Array.isArray(newProps.children) && newProps.children.length > 3) {
      throw new Error(
        [
          'Rfx: SimpleAppBar.children cannot take more than 3 top-level nodes.',
          'You probably forgot to wrap some components into e.g. a <Row>.',
        ].join(' '),
      );
    }

    return (
      <Surface {...extractSurfacePropsFromAppBarProps(newProps)} ref={ref}>
        {renderAppBarLeadingArea(newProps)}
        {renderAppBarCenterArea(newProps)}
        {renderAppBarTrailingArea(newProps)}
      </Surface>
    );
  },
);

AppBar = processComponent<AppBarPropsOptional>(AppBar, {
  name: 'AppBar',
});

export { AppBar };
