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
import { propsPipe } from '../../utils/propsPipe';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { renderRfxViewContainer } from './RfxView';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';
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

  validateNoStyleProps(props);
  let newProps = useDefaultRfxViewProps(props);
  newProps = propsPipe<RfxViewProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(newProps);
  newProps = {
    ...newProps,
    ...useOnLayout(newProps),
    theme,
  };

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderRfxViewContainer(newProps)}
    </ColorThemeContext.Provider>
  );
};

Row = processComponent<RfxViewPropsOptional>(Row, {
  name: 'Row',
});

export { Row };
