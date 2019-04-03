/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { useOnLayout } from '../../responsiveness/useOnLayout';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { processComponent } from '../processComponent';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import { renderViewComponent } from '../view/renderViewComponent';
import { AppBarProps, AppBarPropsOptional } from './AppBarProps';
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
  const { children, theme } = props;
  if (!children || !Array.isArray(children) || children.length < 2) {
    return undefined;
  }

  const ViewComponent = theme.centerArea && theme.centerArea.component;
  const viewProps = {
    ...getPropsAndStyleFromTheme(props, theme.centerArea),
    children: children[1],
  };
  return renderViewComponent(props, viewProps, ViewComponent);
};

export const renderAppBarLeadingArea = (
  props: AppBarProps,
): React.ReactNode => {
  const { children, theme } = props;
  if (!children) return children;

  const leadingChildren = Array.isArray(children) ? children[0] : children;

  const ViewComponent = theme.leadingArea && theme.leadingArea.component;
  const viewProps = {
    ...getPropsAndStyleFromTheme(props, theme.leadingArea),
    children: leadingChildren,
  };
  return renderViewComponent(props, viewProps, ViewComponent);
};

export const renderAppBarTrailingArea = (
  props: AppBarProps,
): React.ReactNode => {
  const { children, theme } = props;
  if (!children || !Array.isArray(children) || children.length < 3) {
    return undefined;
  }

  const ViewComponent = theme.trailingArea && theme.trailingArea.component;
  const viewProps = {
    ...getPropsAndStyleFromTheme(props, theme.trailingArea),
    children: children[2],
  };
  return renderViewComponent(props, viewProps, ViewComponent);
};

let AppBar: React.ComponentType<AppBarPropsOptional> = (
  props: AppBarPropsOptional,
) => {
  let newProps = useDefaultAppBarProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);

  if (Array.isArray(newProps.children) && newProps.children.length > 3) {
    throw new Error(
      [
        'Rfx: SimpleAppBar.children cannot take more than 3 top-level nodes. ',
        'You probably forgot to wrap some components into e.g. a <Row>.',
      ].join(''),
    );
  }

  return (
    <Surface {...extractSurfacePropsFromAppBarProps(newProps)}>
      {renderAppBarLeadingArea(newProps)}
      {renderAppBarCenterArea(newProps)}
      {renderAppBarTrailingArea(newProps)}
    </Surface>
  );
};

AppBar = processComponent<AppBarPropsOptional>(AppBar, {
  name: 'AppBar',
});

export { AppBar };
