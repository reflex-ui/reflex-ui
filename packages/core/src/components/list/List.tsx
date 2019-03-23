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
import { propsPipe } from '../../utils/propsPipe';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { ListProps, ListPropsOptional } from './ListProps';
import { useDefaultListProps } from './useDefaultListProps';

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

export const renderListView = (props: ListProps): JSX.Element => {
  const { children, onLayout, theme } = props;

  const Container = theme.component || View;
  const viewProps = {
    ...extractViewPropsFromListProps(props),
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

let List: React.ComponentType<ListPropsOptional> = (
  props: ListPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultListProps(props);
  newProps = propsPipe<ListProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(newProps);
  newProps = {
    ...newProps,
    ...useOnLayout(newProps),
  };

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderListView(newProps)}
    </ColorThemeContext.Provider>
  );
};

List = processComponent<ListPropsOptional>(List, {
  name: 'List',
});

export { List };
