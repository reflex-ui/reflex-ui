/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Ref } from 'react';
import { Text, TextProps } from 'react-native';

import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';

export interface TextComponentRendererInput<ComponentProps> {
  Component?:
    | typeof Text
    | React.ComponentType<BuiltInSimpleComponentProps<ComponentProps>> &
        TextProps;
  props: ComponentProps;
  ref?: Ref<Text>;
  textProps: TextProps & Readonly<{ children?: React.ReactNode }>;
}

export const renderTextComponent = <ComponentProps extends {}>(
  input: TextComponentRendererInput<ComponentProps>,
): JSX.Element => {
  const { Component, props, ref, textProps } = input;
  if (Component === undefined || Component === Text) {
    return <Text {...textProps} ref={ref} />;
  }
  return <Component complexComponentProps={props} {...textProps} />;
};
