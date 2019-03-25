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
import { ListItemProps, ListItemPropsOptional } from './ListItemProps';
import { useDefaultListItemProps } from './useDefaultListItemProps';

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

export const renderListItemView = (props: ListItemProps): JSX.Element => {
  const { children, onLayout, theme } = props;

  const Container = theme.component || View;
  const viewProps = {
    ...extractViewPropsFromListItemProps(props),
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

let ListItem: React.ComponentType<ListItemPropsOptional> = (
  props: ListItemPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultListItemProps(props);
  newProps = propsPipe<ListItemProps>([
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
      {renderListItemView(newProps)}
    </ColorThemeContext.Provider>
  );
};

ListItem = processComponent<ListItemPropsOptional>(ListItem, {
  name: 'ListItem',
});

export { ListItem };
