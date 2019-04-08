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
import { useDefaultRowProps } from './useDefaultRowProps';
import { useShouldProvideColor } from './useShouldProvideColor';

let Row: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  let newProps = useDefaultRowProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const shouldProvideColor = useShouldProvideColor(props);
  return renderRfxViewComponent(newProps, shouldProvideColor);
};

Row = processComponent<RfxViewPropsOptional>(Row, {
  name: 'Row',
});

export { Row };
