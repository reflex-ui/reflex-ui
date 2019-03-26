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
// tslint:disable-next-line:max-line-length
import { handleSimpleComponentThemeProps } from '../handleSimpleComponentThemeProps';
// tslint:disable-next-line:max-line-length
import { handleSimpleComponentThemeStyle } from '../handleSimpleComponentThemeStyle';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { renderRfxViewContainer } from './RfxView';
import { RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultRfxViewProps } from './useDefaultRfxViewProps';

let Column: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);
  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.views) {
      throw new MissingComponentThemeError('<Column>');
    }
    theme = componentsTheme.views.column;
  }

  validateNoStyleProps(props);
  let newProps = useDefaultRfxViewProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = { ...newProps, theme };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleSimpleComponentThemeProps(newProps);
  newProps = handleSimpleComponentThemeStyle(newProps);

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderRfxViewContainer(newProps)}
    </ColorThemeContext.Provider>
  );
};

Column = processComponent<RfxViewPropsOptional>(Column, {
  name: 'Column',
});

export { Column };
