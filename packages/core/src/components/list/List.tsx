/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useOnLayout } from '../../responsiveness/useOnLayout';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useShouldProvideColorTheme } from '../view/useShouldProvideColorTheme';
import { ListPropsOptional } from './ListProps';
import { useDefaultListProps } from './useDefaultListProps';

let List: React.ComponentType<ListPropsOptional> = (
  props: ListPropsOptional,
) => {
  let newProps = useDefaultListProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const shouldProvideColorTheme = useShouldProvideColorTheme(newProps);
  return renderRfxViewComponent(newProps, shouldProvideColorTheme);
};

List = processComponent<ListPropsOptional>(List, {
  name: 'List',
});

export { List };
