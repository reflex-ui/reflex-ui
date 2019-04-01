/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:import-name
import React, { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeAndStyleProps } from '../handleThemeAndStyleProps';
import { processComponent } from '../processComponent';
import { renderViewComponent } from './renderViewComponent';
import { RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultRfxViewProps } from './useDefaultRfxViewProps';

let Row: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);
  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.views) {
      throw new MissingComponentThemeError('<Row>');
    }
    theme = componentsTheme.views.row;
  }

  let newProps = useDefaultRfxViewProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = { ...newProps, theme };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleThemeAndStyleProps(newProps, newProps.theme);

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderViewComponent(newProps, newProps.theme.component)}
    </ColorThemeContext.Provider>
  );
};

Row = processComponent<RfxViewPropsOptional>(Row, {
  name: 'Row',
});

export { Row };
