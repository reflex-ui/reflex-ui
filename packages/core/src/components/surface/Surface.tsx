/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { renderRfxViewContainer } from '../view/RfxView';
import { SurfacePropsOptional } from './SurfaceProps';
import { useDefaultSurfaceProps } from './useDefaultSurfaceProps';

let Surface: React.ComponentType<SurfacePropsOptional> = (
  props: SurfacePropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultSurfaceProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderRfxViewContainer(newProps)}
    </ColorThemeContext.Provider>
  );
};

Surface = processComponent<SurfacePropsOptional>(Surface, {
  name: 'Surface',
});

export { Surface };
