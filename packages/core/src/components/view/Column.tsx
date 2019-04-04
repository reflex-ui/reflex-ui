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
import { renderRfxViewComponent } from './renderRfxViewComponent';
import { RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultColumnProps } from './useDefaultColumnProps';
import { useShouldProvideColorTheme } from './useShouldProvideColorTheme';

let Column: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  let newProps = useDefaultColumnProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const shouldProvideColorTheme = useShouldProvideColorTheme(props);
  return renderRfxViewComponent(newProps, shouldProvideColorTheme);
};

Column = processComponent<RfxViewPropsOptional>(Column, {
  name: 'Column',
});

export { Column };
