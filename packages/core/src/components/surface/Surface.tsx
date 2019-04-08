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
import { SurfacePropsOptional } from './SurfaceProps';
import { useDefaultSurfaceProps } from './useDefaultSurfaceProps';

let Surface: React.ComponentType<SurfacePropsOptional> = (
  props: SurfacePropsOptional,
) => {
  let newProps = useDefaultSurfaceProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const shouldProvideColor = useShouldProvideColor(newProps);
  return renderRfxViewComponent(newProps, shouldProvideColor);
};

Surface = processComponent<SurfacePropsOptional>(Surface, {
  name: 'Surface',
});

export { Surface };
