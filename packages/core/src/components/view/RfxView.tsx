/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useOnLayout } from '../../responsiveness/useOnLayout';
import { propsPipe } from '../../utils/propsPipe';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultRfxViewProps } from './useDefaultRfxViewProps';

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

export const renderRfxViewContainer = (props: RfxViewProps): JSX.Element => {
  const { children, onLayout, theme } = props;

  const Container = theme.component || View;
  const viewProps = {
    ...extractViewPropsFromRfxViewProps(props),
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

let RfxView: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultRfxViewProps(props);
  newProps = propsPipe<RfxViewProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(newProps);
  newProps = {
    ...newProps,
    ...useOnLayout(newProps),
  };
  return renderRfxViewContainer(newProps);
};

RfxView = processComponent<RfxViewPropsOptional>(RfxView, {
  name: 'View',
});

export { RfxView };
