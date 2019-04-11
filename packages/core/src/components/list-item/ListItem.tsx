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
import { useShouldProvideColor } from '../view/useShouldProvideColor';
import { ListItemPropsOptional } from './ListItemProps';
import { useDefaultListItemProps } from './useDefaultListItemProps';

let ListItem: React.ComponentType<ListItemPropsOptional> = (
  props: ListItemPropsOptional,
) => {
  let newProps = useDefaultListItemProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const shouldProvideColor = useShouldProvideColor(props);
  return renderRfxViewComponent(newProps, shouldProvideColor);
};

ListItem = processComponent<ListItemPropsOptional>(ListItem, {
  name: 'ListItem',
});

export { ListItem };
