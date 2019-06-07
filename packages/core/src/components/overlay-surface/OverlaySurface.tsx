/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { Surface } from '../surface/Surface';
import { SurfacePropsOptional } from '../surface/SurfaceProps';
import {
  OverlaySurfaceProps,
  OverlaySurfacePropsOptional,
} from './OverlaySurfaceProps';
import { OverlaySurfaceTheme } from './OverlaySurfaceTheme';
import { useDefaultOverlaySurfaceProps } from './useDefaultOverlaySurfaceProps';

export const extractSurfacePropsFromOverlaySurfaceProps = (
  props: OverlaySurfaceProps,
): SurfacePropsOptional => {
  const { children, getPatchTheme, theme, ...otherProps } = props;

  let surfaceProps = otherProps as SurfacePropsOptional;
  const surfaceTheme = props.theme.surface && props.theme.surface(props);

  if (surfaceTheme !== undefined) {
    surfaceProps = {
      ...surfaceProps,
      getPatchTheme: () => surfaceTheme,
    };
  }

  console.log(
    'extractSurfacePropsFromOverlaySurfaceProps() - surfaceProps: ',
    surfaceProps,
  );
  return surfaceProps;
};

const useTheme = (theme?: OverlaySurfaceTheme): OverlaySurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.overlaySurface === undefined ||
    componentsTheme.overlaySurface === null
  ) {
    throw new MissingComponentThemeError('<OverlaySurface>');
  }

  return componentsTheme.overlaySurface;
};

let OverlaySurface: React.ComponentType<
  OverlaySurfacePropsOptional
  // @ts-ignore
> = forwardRef((props: OverlaySurfacePropsOptional, ref: Ref<View>) => {
  // @ts-ignore
  const theme = useTheme(props.theme);

  let newProps: OverlaySurfaceProps = useDefaultOverlaySurfaceProps(
    props,
    theme,
  );
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);

  return (
    <React.Fragment>
      {props.children}
      <Surface
        {...extractSurfacePropsFromOverlaySurfaceProps(newProps)}
        ref={ref}
      />
    </React.Fragment>
  );
});

OverlaySurface = processComponent<OverlaySurfacePropsOptional>(OverlaySurface, {
  name: 'OverlaySurface',
});

export { OverlaySurface };
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
import {
  OverlaySurfaceProps,
  OverlaySurfacePropsOptional,
} from './OverlaySurfaceProps';
import { OverlaySurfaceTheme } from './OverlaySurfaceTheme';
import { useDefaultOverlaySurfaceProps } from './useDefaultOverlaySurfaceProps';

export const extractSurfacePropsFromOverlaySurfaceProps = (
  props: OverlaySurfaceProps,
): SurfacePropsOptional => {
  const { children, getPatchTheme, theme, ...otherProps } = props;

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

const useTheme = (theme?: OverlaySurfaceTheme): OverlaySurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.overlaySurface === undefined ||
    componentsTheme.overlaySurface === null
  ) {
    throw new MissingComponentThemeError('<OverlaySurface>');
  }

  return componentsTheme.overlaySurface;
};

let OverlaySurface: React.ComponentType<
  OverlaySurfacePropsOptional
> = forwardRef((props: OverlaySurfacePropsOptional, ref: Ref<View>) => {
  const theme = useTheme(props.theme);

  let newProps: OverlaySurfaceProps = useDefaultOverlaySurfaceProps(
    props,
    theme,
  );
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);

  const newChildren = (
    <React.Fragment>
      {newProps.children}
      <Surface
        {...extractSurfacePropsFromOverlaySurfaceProps(newProps)}
        ref={ref}
      />
    </React.Fragment>
  );

  const viewProps: React.PropsWithChildren<ViewProps> = {
    ...getPropsFromTheme(newProps, theme.container),
    children: newChildren,
    style: getStyleFromTheme(newProps, theme.container),
  };

  const Component =
    theme.container &&
    theme.container.getComponent &&
    theme.container.getComponent(newProps);
  return renderViewComponent({ props: newProps, viewProps, Component });
});

OverlaySurface = processComponent<OverlaySurfacePropsOptional>(OverlaySurface, {
  name: 'OverlaySurface',
});

export { OverlaySurface };
