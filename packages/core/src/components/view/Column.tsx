/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { processComponent } from '../processComponent';
import { renderRfxViewComponent } from './renderRfxViewComponent';
import { RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultColumnProps } from './useDefaultColumnProps';
import { useRfxViewPropsPipe } from './useRfxViewPropsPipe';
import { useShouldProvideColorTheme } from './useShouldProvideColorTheme';

let Column: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  let newProps = useDefaultColumnProps(props);
  newProps = useRfxViewPropsPipe(newProps);

  const shouldProvideColorTheme = useShouldProvideColorTheme(props);
  return renderRfxViewComponent(newProps, shouldProvideColorTheme);
};

Column = processComponent<RfxViewPropsOptional>(Column, {
  name: 'Column',
});

export { Column };
