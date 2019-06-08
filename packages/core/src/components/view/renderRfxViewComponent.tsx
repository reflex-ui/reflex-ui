/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Ref } from 'react';
import { View, ViewProps } from 'react-native';

import { PaletteColorProvider } from '../../color/PaletteColor';
import { extractViewProps } from '../../utils/props';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { PrimitiveComponentProps } from '../PrimitiveComponentProps';
import { renderViewComponent } from './renderViewComponent';
import { RfxViewPropsBase } from './RfxViewProps';

export interface RfxViewComponentRendererInput<Props> {
  readonly Component?:
    | typeof View
    | React.ComponentType<PrimitiveComponentProps<Props>> & ViewProps;
  readonly props: Props;
  readonly ref?: Ref<View>;
  readonly shouldProvideColor?: boolean;
}

export const renderRfxViewComponent = <
  Props extends RfxViewPropsBase<Props, Theme> &
    ComponentThemeProps<Props, Theme> &
    ComponentChildrenProps<Props>,
  Theme
>(
  input: RfxViewComponentRendererInput<Props>,
): React.ReactElement => {
  const { Component, props, ref, shouldProvideColor } = input;
  const { children, paletteColor } = props;
  const viewProps: React.PropsWithChildren<ViewProps> = {
    ...extractViewProps(props),
    children,
  };
  const renderedView = renderViewComponent({
    Component,
    props,
    ref,
    viewProps,
  });

  if (shouldProvideColor && props.shouldProvideColor) {
    return (
      <PaletteColorProvider value={paletteColor}>
        {renderedView}
      </PaletteColorProvider>
    );
  }

  return renderedView;
};
