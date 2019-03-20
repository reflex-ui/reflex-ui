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
import { ListProps } from './ListProps';

export const extractViewPropsFromListProps = (props: ListProps): ViewProps => {
  const {
    children,
    colorTheme,
    getPatchTheme,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginStart,
    marginTop,
    marginVertical,
    paletteTheme,
    theme,
    ...viewProps
  } = props;

  return viewProps;
};

export const SimpleList = reflexComponent<ListProps>({
  name: 'SimpleList',
})((props: ListProps) => {
  validateNoStyleProps(props);
  const newProps = propsPipe<ListProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { children, onLayout, theme } = newProps;

  const Container = theme.component || View;
  const viewProps = {
    ...extractViewPropsFromListProps(newProps),
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
