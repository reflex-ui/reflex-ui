/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { SurfaceProps, SurfacePropsOptional } from './SurfaceProps';
import { useDefaultSurfaceProps } from './useDefaultSurfaceProps';

export const extractViewPropsFromSurfaceProps = (
  props: SurfaceProps,
): ViewProps => {
  const {
    alignContent,
    alignItems,
    alignSelf,
    children,
    colorTheme,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    getPatchTheme,
    justifyContent,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginStart,
    marginTop,
    marginVertical,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingStart,
    paddingTop,
    paddingVertical,
    paletteTheme,
    theme,
    ...viewProps
  } = props;

  return viewProps;
};

export const renderSurfaceView = (props: SurfaceProps): JSX.Element => {
  const { children, onLayout, theme } = props;

  const Container = theme.component || View;
  const viewProps = {
    ...extractViewPropsFromSurfaceProps(props),
    onLayout,
    style: getStyleFromTheme(props, theme),
  };

  if (Container === View) {
    return <Container {...viewProps}>{children}</Container>;
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {children}
    </Container>
  );
};

let Surface: React.ComponentType<SurfacePropsOptional> = (
  props: SurfacePropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultSurfaceProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderSurfaceView(newProps)}
    </ColorThemeContext.Provider>
  );
};

Surface = processComponent<SurfacePropsOptional>(Surface, {
  name: 'Surface',
});

export { Surface };
