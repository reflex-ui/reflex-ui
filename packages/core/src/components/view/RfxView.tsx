/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { propsPipe } from '../../utils/propsPipe';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { reflexComponent } from '../reflexComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { RfxViewProps } from './RfxViewProps';

export const extractViewPropsFromRfxViewProps = (
  props: RfxViewProps,
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

export const RfxView = reflexComponent<RfxViewProps>({
  name: 'View',
})((props: RfxViewProps) => {
  validateNoStyleProps(props);
  const newProps = propsPipe<RfxViewProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { children, onLayout, theme } = newProps;

  const Container = theme.component || View;
  const viewProps = {
    ...extractViewPropsFromRfxViewProps(newProps),
    onLayout,
    style: getStyleFromTheme(newProps, theme),
  };

  if (Container === View) {
    return <Container {...viewProps}>{children}</Container>;
  }

  return (
    <Container complexComponentProps={newProps} {...viewProps}>
      {children}
    </Container>
  );
});
