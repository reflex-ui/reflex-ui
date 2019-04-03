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
import { extractViewProps } from '../../utils/props';
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
  const colorThemeFromCtx = useContext(ColorThemeContext);
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

  const viewProps = {
    ...extractViewProps(newProps),
    children: newProps.children,
  };
  const renderedView = renderViewComponent(
    newProps,
    viewProps,
    newProps.theme.component,
  );

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

Row = processComponent<RfxViewPropsOptional>(Row, {
  name: 'Row',
});

export { Row };
