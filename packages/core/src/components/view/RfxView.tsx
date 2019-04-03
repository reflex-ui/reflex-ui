/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:import-name
import React, { useContext } from 'react';

import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeAndStyleProps } from '../handleThemeAndStyleProps';
import { processComponent } from '../processComponent';
import { renderViewComponent } from './renderViewComponent';
import { RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultRfxViewProps } from './useDefaultRfxViewProps';

let RfxView: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  const colorThemeFromCtx = useContext(ColorThemeContext);
  let newProps = useDefaultRfxViewProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleThemeAndStyleProps(newProps, newProps.theme);

  const renderedView = renderViewComponent(newProps, newProps.theme.component);

  if (
    props.colorTheme !== undefined &&
    props.colorTheme !== null &&
    props.colorTheme !== colorThemeFromCtx
  ) {
    return (
      <ColorThemeContext.Provider value={props.colorTheme}>
        {renderedView}
      </ColorThemeContext.Provider>
    );
  }

  return renderedView;
};

RfxView = processComponent<RfxViewPropsOptional>(RfxView, {
  name: 'View',
});

export { RfxView };
