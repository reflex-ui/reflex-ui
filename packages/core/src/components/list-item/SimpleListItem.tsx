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
import { DefaultView } from '../view/DefaultView';
import { ListItemProps } from './ListItemProps';

export const extractViewPropsFromListItemProps = (
  props: ListItemProps,
): ViewProps => {
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

export const SimpleListItem = reflexComponent<ListItemProps>({
  name: 'SimpleListItem',
})((props: ListItemProps) => {
  validateNoStyleProps(props);
  const newProps = propsPipe<ListItemProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { theme } = newProps;

  const Container = theme.component || DefaultView;
  const viewProps = {
    ...extractViewPropsFromListItemProps(newProps),
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
