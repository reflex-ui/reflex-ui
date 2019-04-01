/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { extractViewProps } from '../../utils/props';
import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';

export const renderViewComponent = <
  ComponentProps extends ViewProps & Readonly<{ children?: React.ReactNode }>
>(
  props: ComponentProps,
  Component:
    | typeof View
    | React.ComponentType<BuiltInSimpleComponentProps<ComponentProps>> &
        ViewProps = View,
): JSX.Element => {
  const viewProps = extractViewProps(props);

  if (Component === View) {
    return <Component {...viewProps}>{props.children}</Component>;
  }

  return (
    <Component complexComponentProps={props} {...viewProps}>
      {props.children}
    </Component>
  );
};
