/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { processComponent } from '../processComponent';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useRfxViewPropsPipe } from '../view/useRfxViewPropsPipe';
import { useShouldProvideColorTheme } from '../view/useShouldProvideColorTheme';
import { SurfacePropsOptional } from './SurfaceProps';
import { useDefaultSurfaceProps } from './useDefaultSurfaceProps';

let Surface: React.ComponentType<SurfacePropsOptional> = (
  props: SurfacePropsOptional,
) => {
  let newProps = useDefaultSurfaceProps(props);
  newProps = useRfxViewPropsPipe(newProps);

  const shouldProvideColorTheme = useShouldProvideColorTheme(newProps);
  return renderRfxViewComponent(newProps, shouldProvideColorTheme);
};

Surface = processComponent<SurfacePropsOptional>(Surface, {
  name: 'Surface',
});

export { Surface };
