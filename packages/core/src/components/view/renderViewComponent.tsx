/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Ref } from 'react';
import { View, ViewProps } from 'react-native';

import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';

export interface ViewComponentRendererInput<ComponentProps> {
  readonly Component?:
    | typeof View
    | React.ComponentType<BuiltInSimpleComponentProps<ComponentProps>> &
        ViewProps;
  readonly props: ComponentProps;
  readonly ref?: Ref<View>;
  readonly viewProps: ViewProps & Readonly<{ children?: React.ReactNode }>;
}

export const renderViewComponent = <ComponentProps extends {}>(
  input: ViewComponentRendererInput<ComponentProps>,
): JSX.Element => {
  const { Component, props, ref, viewProps } = input;
  if (Component === undefined || Component === View) {
    return <View {...viewProps} ref={ref} />;
  }
  return <Component complexComponentProps={props} {...viewProps} />;
};
