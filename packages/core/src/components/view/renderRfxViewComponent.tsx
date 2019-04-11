/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { ViewProps } from 'react-native';

import { PaletteColorContext } from '../../color/PaletteColorContext';
import { extractViewProps } from '../../utils/props';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { BuiltInSimpleComponentTheme } from '../SimpleComponentTheme';
import { renderViewComponent } from './renderViewComponent';
import { RfxViewPropsBase } from './RfxViewProps';

export const renderRfxViewComponent = <
  Props extends RfxViewPropsBase &
    ComponentThemeProps<Props, Theme> &
    ComponentChildrenProps<Props>,
  Theme extends BuiltInSimpleComponentTheme<Props, unknown, unknown>
>(
  props: Props,
  shouldProvideColor: boolean = false,
): React.ReactElement => {
  const { children, paletteColor, theme } = props;
  const viewProps: React.PropsWithChildren<ViewProps> = {
    ...extractViewProps(props),
    children,
  };
  const renderedView = renderViewComponent(props, viewProps, theme.component);

  if (shouldProvideColor) {
    return (
      <PaletteColorContext.Provider value={paletteColor}>
        {renderedView}
      </PaletteColorContext.Provider>
    );
  }

  return renderedView;
};
