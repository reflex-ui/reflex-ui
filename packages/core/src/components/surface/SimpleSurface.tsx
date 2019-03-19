/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { ViewProps } from 'react-native';

import { propsPipe } from '../../utils/propsPipe';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { reflexComponent } from '../reflexComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { DefaultView } from '../view';
import { SurfaceProps } from './SurfaceProps';

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

export const SimpleSurface = reflexComponent<SurfaceProps>({
  name: 'SimpleSurface',
})((props: SurfaceProps) => {
  validateNoStyleProps(props);
  const newProps = propsPipe<SurfaceProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { theme } = newProps;

  const Container = theme.component || DefaultView;
  const viewProps = {
    ...extractViewPropsFromSurfaceProps(newProps),
    style: getStyleFromTheme(newProps, theme),
  };

  return (
    <Container
      complexComponentProps={newProps}
      onLayout={newProps.onLayout}
      {...viewProps}
    >
      {newProps.children}
    </Container>
  );
});
