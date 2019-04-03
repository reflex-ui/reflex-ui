/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Text, TextProps } from 'react-native';

import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';

export const renderTextComponent = <ComponentProps extends {}>(
  props: ComponentProps,
  textProps: TextProps & Readonly<{ children?: React.ReactNode }>,
  Component:
    | typeof Text
    | React.ComponentType<BuiltInSimpleComponentProps<ComponentProps>> &
        TextProps = Text,
): JSX.Element => {
  if (Component === Text) return <Component {...textProps} />;
  return <Component complexComponentProps={props} {...textProps} />;
};
