/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentsTheme } from '../ComponentsTheme';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
// tslint:disable-next-line:max-line-length
import { useDefaultSurfacePropsBase } from '../surface/useDefaultSurfacePropsBase';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useShouldProvideColor } from '../view/useShouldProvideColor';
import { ListProps, ListPropsOptional } from './ListProps';
import { ListTheme } from './ListTheme';

const getTheme = (
  props: ListPropsOptional,
  componentsTheme: ComponentsTheme,
): ListTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
  if (componentsTheme.list === undefined || componentsTheme.list === null) {
    throw new MissingComponentThemeError('<List>');
  }
  return componentsTheme.list;
};

let List: React.ComponentType<ListPropsOptional> = (
  props: ListPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);
  const theme = getTheme(props, componentsTheme);

  let newProps: ListProps = {
    ...useDefaultSurfacePropsBase(props),
    theme,
  };

  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const shouldProvideColor = useShouldProvideColor(newProps);
  return renderRfxViewComponent(newProps, shouldProvideColor);
};

List = processComponent<ListPropsOptional>(List, {
  name: 'List',
});

export { List };
