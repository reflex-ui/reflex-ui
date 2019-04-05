/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';

export const renderViewComponent = <ComponentProps extends {}>(
  props: ComponentProps,
  viewProps: ViewProps & Readonly<{ children?: React.ReactNode }>,
  Component:
    | typeof View
    | React.ComponentType<BuiltInSimpleComponentProps<ComponentProps>> &
        ViewProps = View,
): JSX.Element => {
  if (Component === View) return <Component {...viewProps} />;
  return <Component complexComponentProps={props} {...viewProps} />;
};
