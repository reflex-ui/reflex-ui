/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { processComponent } from '../processComponent';
import { renderRfxViewComponent } from './renderRfxViewComponent';
import { RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultRowProps } from './useDefaultRowProps';
import { useRfxViewPropsPipe } from './useRfxViewPropsPipe';
import { useShouldProvideColorTheme } from './useShouldProvideColorTheme';

let Row: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  let newProps = useDefaultRowProps(props);
  newProps = useRfxViewPropsPipe(newProps);

  const shouldProvideColorTheme = useShouldProvideColorTheme(props);
  return renderRfxViewComponent(newProps, shouldProvideColorTheme);
};

Row = processComponent<RfxViewPropsOptional>(Row, {
  name: 'Row',
});

export { Row };
